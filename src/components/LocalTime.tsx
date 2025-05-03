import { useEffect, useState } from "react";

const LocalTime = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false, // ← This sets 24-hour format
                })
            );
        };

        updateTime(); // Set immediately
        const interval = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return <div className="text-sm text-[#151515]"> {time}</div>;
};

export default LocalTime;
