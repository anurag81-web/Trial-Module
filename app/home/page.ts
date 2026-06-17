'use client';
import React, { useState } from "react";
import PostCard from "../components/post";
import Image from "next/image";
import useAuth from "../hooks/auth";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";

export default function HomePage() {
    const [openImage, setOpenImage] = useState<string | null>(null);
    const tabs = ["Posts", "About", "Friends", "Photos", "Reels", "Check-ins", "More ▼"];
    useAuth();

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "relative" },
            React.createElement(
                "div",
                {
                    className: "relative w-full h-60 md:h-80 overflow-hidden rounded-xl cursor-pointer",
                    onClick: () => setOpenImage('/images/cover3.jpg')
                },
                React.createElement(Image, { src: "/images/cover3.jpg", fill: true, style: { objectFit: "cover" }, alt: "Cover" })
            ),
            React.createElement(
                "div",
                { className: "absolute bottom-[-40px] left-4 md:bottom-[-60px] md:left-6 rounded-full w-28 h-28 md:w-48 md:h-48 border-2 border-white overflow-hidden bg-gray-700" },
                React.createElement(
                    Avatar.Root,
                    { className: "w-full h-full cursor-pointer", onClick: () => setOpenImage('/images/profile.jpg') },
                    React.createElement(Avatar.Image, { src: "/images/profile.jpg", alt: "Profile", className: "w-full h-full object-cover" }),
                    React.createElement(
                        Avatar.Fallback,
                        { className: "w-full h-full flex items-center justify-center text-white text-2xl" },
                        "John Doe"
                    )
                )
            )
        ),
        React.createElement(
            Dialog.Root,
            { open: !!openImage, onOpenChange: (isOpen: boolean) => { if (!isOpen) setOpenImage(null); } },
            React.createElement(
                Dialog.Portal,
                null,
                React.createElement(Dialog.Overlay, { className: "fixed inset-0 bg-black/80 z-50" }),
                React.createElement(
                    Dialog.Content,
                    { className: "fixed inset-0 z-50 flex items-center justify-center outline-none" },
                    React.createElement(Dialog.Title, { className: "sr-only" }, "Image preview"),
                    React.createElement(
                        "div",
                        { className: "relative w-full h-full flex items-center justify-center" },
                        React.createElement("img", { src: openImage ?? '', className: "w-[90vw] md:max-w-3xl max-h-[90vh] object-contain rounded-xl" })
                    ),
                    React.createElement(
                        Dialog.Close,
                        { className: "absolute top-4 right-4 text-white text-3xl cursor-pointer" },
                        "✕"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "flex flex-col md:flex-row justify-between items-start md:items-center mt-12 md:mt-16 px-4 md:px-8 gap-4" },
            React.createElement("span", { className: "text-white text-2xl md:text-4xl font-bold" }, "John Doe"),
            React.createElement(
                "div",
                { className: "flex flex-wrap gap-2" },
                React.createElement(
                    "button",
                    { className: "flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 hover:cursor-pointer" },
                    React.createElement("span", null, "+"),
                    " Add to Story"
                ),
                React.createElement(
                    "button",
                    { className: "flex items-center gap-2 rounded-md bg-gray-600 text-white px-3 py-2 hover:cursor-pointer" },
                    React.createElement("span", null, "🖊"),
                    " Edit Profile"
                ),
                React.createElement(
                    DropdownMenu.Root,
                    null,
                    React.createElement(
                        DropdownMenu.Trigger,
                        { asChild: true },
                        React.createElement(
                            "button",
                            { className: "flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer" },
                            React.createElement("span", null, "⮟"),
                            " More"
                        )
                    ),
                    React.createElement(
                        DropdownMenu.Portal,
                        null,
                        React.createElement(
                            DropdownMenu.Content,
                            { className: "bg-gray-800 rounded-md p-1 shadow-lg z-50" },
                            React.createElement(DropdownMenu.Item, { className: "px-3 py-2 text-white hover:bg-gray-700 rounded cursor-pointer" }, "Report profile"),
                            React.createElement(DropdownMenu.Item, { className: "px-3 py-2 text-white hover:bg-gray-700 rounded cursor-pointer" }, "Share profile"),
                            React.createElement(DropdownMenu.Separator, { className: "h-px bg-gray-600 my-1" }),
                            React.createElement(DropdownMenu.Item, { className: "px-3 py-2 text-red-400 hover:bg-gray-700 rounded cursor-pointer" }, "Block user")
                        )
                    )
                )
            )
        ),
        React.createElement("hr", { className: "m-6 border-gray-700 border-t-2" }),
        React.createElement(
            Tabs.Root,
            { defaultValue: "Posts" },
            React.createElement(
                Tabs.List,
                { className: "flex overflow-x-auto ml-4 mt-3 border-b border-gray-700 scrollbar-none" },
                tabs.map(tab =>
                    React.createElement(
                        Tabs.Trigger,
                        {
                            key: tab,
                            value: tab,
                            className: "px-5 py-2 hover:cursor-pointer hover:text-blue-500 hover:bg-gray-700 rounded-t-md text-gray-300 data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 transition-all outline-none"
                        },
                        tab
                    )
                )
            ),
            React.createElement(
                Tabs.Content,
                { value: "Posts" },
                React.createElement(
                    "div",
                    { className: "bg-gray-900 mt-4 rounded-xl p-3 md:p-4 mx-2 md:mx-10" },
                    React.createElement(
                        "div",
                        { className: "flex flex-wrap justify-between items-center gap-4" },
                        React.createElement("h1", { className: "text-3xl font-bold text-white" }, "Posts"),
                        React.createElement(
                            "div",
                            { className: "flex gap-2" },
                            React.createElement(
                                Popover.Root,
                                null,
                                React.createElement(
                                    Popover.Trigger,
                                    { asChild: true },
                                    React.createElement(
                                        "button",
                                        { className: "flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer" },
                                        React.createElement("span", null, "☰"),
                                        " Filter Posts"
                                    )
                                ),
                                React.createElement(
                                    Popover.Portal,
                                    null,
                                    React.createElement(
                                        Popover.Content,
                                        { className: "bg-gray-800 rounded-md p-3 shadow-lg z-50 w-56" },
                                        React.createElement(
                                            "div",
                                            { className: "flex flex-col gap-2" },
                                            React.createElement("label", { className: "text-white text-sm" }, "Sort by"),
                                            React.createElement(
                                                "select",
                                                { className: "bg-gray-700 text-white rounded px-2 py-1" },
                                                React.createElement("option", null, "Latest"),
                                                React.createElement("option", null, "Oldest")
                                            ),
                                            React.createElement("button", { className: "bg-blue-600 text-white rounded px-3 py-1 mt-2" }, "Apply")
                                        ),
                                        React.createElement(Popover.Arrow, { className: "fill-gray-800" })
                                    )
                                )
                            ),
                            React.createElement(
                                "button",
                                { className: "flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer" },
                                React.createElement("span", null, "⚙️"),
                                " Post Settings"
                            )
                        )
                    ),
                    React.createElement("hr", { className: "my-6 border-gray-700" }),
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n =>
                        React.createElement(PostCard, { key: n, image: `/images/img${n}.jpg`, setOpenImage: (img: string) => setOpenImage(img) })
                    )
                )
            )
        )
    );
}