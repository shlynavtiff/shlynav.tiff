import React, { useEffect, useState } from "react";
import { useCursor } from "../CursorContext";

interface HoverCardProps {
    imageSrcSmall: string;
    imageSrcMedium?: string;
    imageSrcLarge?: string;
    title: string;
    link: string;
    className?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ imageSrcSmall, imageSrcMedium, imageSrcLarge, title, link, className }) => {
    const { setCursorVariant } = useCursor();
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    const handleMouseEnter = () => {
        if (!isTouchDevice) {
            setIsHovered(true);
            setCursorVariant("text");
        }
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) {
            setIsHovered(false);
            setCursorVariant("default");
        }
    };

    const handleTouchStart = () => {
        if (isTouchDevice) {
            setIsHovered(true);
            setCursorVariant("text");
        }
    };

    const handleTouchEnd = () => {
        if (isTouchDevice) {
            setIsHovered(false);
            setCursorVariant("default");
        }
    };

    return (
        <div
            className={`bg-[#252525] text-[#D8A7B1] rounded-lg flex flex-col justify-end p-4 relative overflow-hidden ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <picture>
                {imageSrcLarge && <source media="(min-width: 1024px)" srcSet={imageSrcLarge} />}
                {imageSrcMedium && <source media="(min-width: 640px)" srcSet={imageSrcMedium} />}
                <img
                    src={imageSrcSmall}
                    alt="Project Image"
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-250 scale-85 md:scale-100 ${isHovered ? "opacity-100" : "opacity-20"}`}
                />
            </picture>

            <div className="flex flex-row text-sm justify-between w-full items-center relative z-10">
                <span>{title}</span>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 "
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <button className="border border-[#D8A7B1] px-4 py-2 text-sm rounded-md transition duration-300 hover:bg-[#fff8c1] hover:text-[#252525] focus:bg-[#fff8c1] focus:text-[#252525]">
                        visit work.
                    </button>
                </a>
            </div>
        </div>
    );
};

export default HoverCard;