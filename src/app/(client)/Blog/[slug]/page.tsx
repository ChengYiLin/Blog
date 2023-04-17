import CustomMDX from '@/components/CustomMDX';
import PageTitle from '@/components/utils/PageTitle';
import { dateFormate } from '@/lib/date';
import { client } from '@/lib/sanity/client';
interface IPostInfo {
  title: string;
  subTitle: string;
  slug: string;
  createTime: Date;
  blog: string;
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const post: IPostInfo = await client.fetch(
    `*[_type == 'post' && (slug.current in path("${slug}"))][0]{
      title,
      subTitle,
      "slug": slug.current,
      createTime,
      blog
    }`,
  );

  return (
    <div>
      <PageTitle>
        {post.title}
        {post.subTitle && (
          <>
            ，
            <br className="sm:hidden" />
            {post.subTitle}
          </>
        )}
      </PageTitle>

      <p>{dateFormate(post.createTime, 'YYYY-MM-DD')}</p>

      <div className="w-3/4 py-8">
        <CustomMDX source={post.blog} />
      </div>
    </div>
  );
}
