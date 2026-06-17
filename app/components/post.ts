'use client';
import React from "react";
import Image from "next/image";

interface PostCardProps {
    image: string;
    setOpenImage: (image: string) => void;
}

export default function PostCard({ image, setOpenImage }: PostCardProps) {
    return React.createElement(
        "div",
        { className: "flex flex-col mb-4 bg-gray-800 p-4 rounded-xl max-w-2xl mx-auto" },
        React.createElement(
            "div",
            { className: "flex flex-row gap-4 items-start" },
            React.createElement(
                "div",
                { className: "w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-full overflow-hidden" },
                React.createElement(Image, {
                    src: "/images/profile.jpg", width: 64, height: 64, alt: "Profile", className: "w-full h-full object-cover"
                })
            ),
            React.createElement(
                "div",
                { className: "flex flex-col gap-1 w-full min-w-0" },
                React.createElement("span", { className: "text-white text-base md:text-lg font-bold" }, "John Doe"),
                React.createElement("span", { className: "text-gray-500 text-sm" }, "2 hours ago"),
                React.createElement("hr", { className: "border-gray-700 border-t-2" }),
                React.createElement(
                    "div",
                    { className: "border border-gray-700 rounded-xl p-2 mt-2" },
                    React.createElement(Image, {
                        src: image, width: 200, height: 100, alt: "Post", className: "rounded-2xl w-full object-cover hover:cursor-pointer",
                        onClick: () => setOpenImage(image)
                    })
                )
            )
        ),
        React.createElement(
            "div",
            { className: "flex gap-2 mt-3" },
            React.createElement(
                "button",
                {
                    onClick: (e) => {
                        e.currentTarget.classList.toggle("text-blue-500");
                        e.currentTarget.classList.toggle("text-gray-300");
                    },
                    className: "flex-1 flex items-center justify-center gap-1 rounded-md py-2 hover:bg-gray-700 text-gray-300 border border-gray-600 text-sm hover:cursor-pointer"
                },
                "👍 Like"
            ),
            React.createElement(
                "button",
                { className: "flex-1 flex items-center justify-center gap-1 rounded-md py-2 hover:bg-gray-700 text-gray-300 border border-gray-600 text-sm hover:cursor-pointer" },
                "💬 Comment"
            ),
            React.createElement(
                "button",
                { className: "flex-1 flex items-center justify-center gap-1 rounded-md py-2 hover:bg-gray-700 text-gray-300 border border-gray-600 text-sm hover:cursor-pointer" },
                "🔗 Share"
            )
        )
    );
}
