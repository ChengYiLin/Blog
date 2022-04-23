import { FC, useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeButton: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0];

        isDarkMode
            ? htmlTag.classList.add("dark")
            : htmlTag.classList.remove("dark");
    }, [isDarkMode]);

    return (
        <div
            className="p-2.5 border border-emerald-500 rounded-full cursor-pointer dark:bg-gray-700 dark:border-none"
            onClick={() => setIsDarkMode((prev) => !prev)}
        >
            {isDarkMode ? (
                <FiMoon className="text-xl text-white hover:text-amber-200" />
            ) : (
                <FiSun className="text-xl text-emerald-400 hover:text-orange-400" />
            )}
        </div>
    );
};

export default DarkModeButton;
