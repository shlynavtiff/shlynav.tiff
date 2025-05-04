import React, { useEffect, useState } from "react";
import { useCursor } from "../CursorContext";

interface HoverCardProps {
    imageSrcSmall: string;
    imageSrcMedium?: string;
    imageSrcLarge?: string;
    title: string;
    desc: string;
    className?: string;
    reverseLayout?: boolean;
    year?: string;
    link: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ imageSrcSmall, imageSrcMedium, imageSrcLarge, desc, className, reverseLayout, title, year, link }) => {
    const { setCursorVariant } = useCursor();
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    const handleTouchStart = () => {
        if (isTouchDevice) {
            setCursorVariant("text");
        }
    };

    const handleTouchEnd = () => {
        if (isTouchDevice) {
            setCursorVariant("default");
        }
    };

    return (
        <div
            className={`bg-[#252525] text-[#D8A7B1] rounded-md  flex flex-col ${reverseLayout ? "md:flex-row-reverse" : "md:flex-row "
                } p-4 relative overflow-hidden ${className} moving-noise text-[#E37383]`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
        >
            <div
                className="w-full md:w-1/4 h-48 md:h-auto relative overflow-hidden mb-4 md:mb-0"
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
            >
                <picture>
                    {imageSrcLarge && <source media="(min-width: 1024px)" srcSet={imageSrcLarge} />}
                    {imageSrcMedium && <source media="(min-width: 640px)" srcSet={imageSrcMedium} />}
                    <img
                        src={imageSrcSmall}
                        alt="Project Image"
                        className="w-full h-full absolute object-cover transition-opacity duration-250 scale-100 rounded-md"
                    />
                </picture>
            </div>

            <div className="w-full md:w-3/4 flex flex-col justify-between items-start gap-4 p-2 md:p-4 relative z-10 border-[#]">
                <div className="flex flex-col items-start text-start">
                    <span className="text-xl md:text-2xl font-bold">{title}</span>
                    <span className="text-xs md:text-sm">{year}</span>
                </div>

                <div>
                    <p className="text-sm md:text-base">{desc}</p>
                </div>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-[100px] relative z-20 "
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <button className="min-w-full sm:w-[100px] border border-[#E37383] px-4 py-2 text-sm rounded-md transition hover:bg-[#fff8c1] hover:text-[#252525] focus:bg-[#fff8c1] focus:text-[#252525] duration-300">
                        visit work.
                    </button>
                </a>
            </div>
        </div>
    );
};

export default HoverCard;