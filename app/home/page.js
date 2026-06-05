'use client';
import PostCard from "../components/post";
import Image from "next/image";
import { useState } from "react";
import useAuth from "../hooks/auth";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";

export default function HomePage() {
    const [openImage, setOpenImage] = useState(null);
    const tabs = ["Posts", "About", "Friends", "Photos", "Reels", "Check-ins"];
    useAuth();

    return (
        <>
            <div className="relative">
                <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => setOpenImage('/images/cover3.jpg')}>
                    <Image src="/images/cover3.jpg" fill style={{ objectFit: "cover" }} alt="Cover" />
                </div>
                <div className="absolute bottom-[-40px] left-4 md:bottom-[-60px] md:left-6 rounded-full w-28 h-28 md:w-48 md:h-48 border-2 border-white overflow-hidden bg-gray-700">
                    <Avatar.Root className="w-full h-full cursor-pointer" onClick={() => setOpenImage('/images/profile.jpg')}>
                        <Avatar.Image src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                        <Avatar.Fallback className="w-full h-full flex items-center justify-center text-white text-2xl">
                            John Doe
                        </Avatar.Fallback>
                    </Avatar.Root>
                </div>
            </div>

            <Dialog.Root open={!!openImage} onOpenChange={(isOpen) => !isOpen && setOpenImage(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
                    <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center outline-none">
                        <Dialog.Title className="sr-only">Image preview</Dialog.Title>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img src={openImage} className="w-[90vw] md:max-w-3xl max-h-[90vh] object-contain rounded-xl" />
                        </div>
                        <Dialog.Close className="absolute top-4 right-4 text-white text-3xl cursor-pointer">
                            ✕
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 md:mt-16 px-4 md:px-8 gap-4">
                <span className="text-white text-2xl md:text-4xl font-bold">John Doe</span>
                <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 hover:cursor-pointer">
                        <span>+</span> Add to Story
                    </button>
                    <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-3 py-2 hover:cursor-pointer">
                        <span>🖊</span> Edit Profile
                    </button>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer">
                                <span>⮟</span> More
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-gray-800 rounded-md p-1 shadow-lg z-50">
                                <DropdownMenu.Item className="px-3 py-2 text-white hover:bg-gray-700 rounded cursor-pointer">
                                    Report profile
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="px-3 py-2 text-white hover:bg-gray-700 rounded cursor-pointer">
                                    Share profile
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="h-px bg-gray-600 my-1" />
                                <DropdownMenu.Item className="px-3 py-2 text-red-400 hover:bg-gray-700 rounded cursor-pointer">
                                    Block user
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </div>
            </div>

            <hr className="m-6 border-gray-700 border-t-2" />

            <Tabs.Root defaultValue="Posts">
                <Tabs.List className="flex overflow-x-auto ml-4 mt-3 border-b border-gray-700 scrollbar-none">
                    {tabs.map(tab => (
                        <Tabs.Trigger key={tab} value={tab}
                            className="px-5 py-2 text-gray-300 hover:text-blue-500 hover:bg-gray-700 rounded-t-md cursor-pointer data-[state=active]:text-blue-500 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
                            {tab}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>

                <Tabs.Content value="Posts">
                    <div className="bg-gray-900 mt-4 rounded-xl p-3 md:p-4 mx-2 md:mx-10">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <h1 className="text-3xl font-bold text-white">Posts</h1>
                            <div className="flex gap-2">
                                <Popover.Root>
                                    <Popover.Trigger asChild>
                                        <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer">
                                            <span>☰</span> Filter Posts
                                        </button>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content className="bg-gray-800 rounded-md p-3 shadow-lg z-50 w-56">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-white text-sm">Sort by</label>
                                                <select className="bg-gray-700 text-white rounded px-2 py-1">
                                                    <option>Latest</option>
                                                    <option>Oldest</option>
                                                </select>
                                                <button className="bg-blue-600 text-white rounded px-3 py-1 mt-2">
                                                    Apply
                                                </button>
                                            </div>
                                            <Popover.Arrow className="fill-gray-800" />
                                        </Popover.Content>
                                    </Popover.Portal>
                                </Popover.Root>

                                <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer">
                                    <span>⚙️</span> Post Settings
                                </button>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-700" />
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                            <PostCard key={n} image={`/images/img${n}.jpg`} setOpenImage={setOpenImage} />
                        ))}
                    </div>
                </Tabs.Content>

            </Tabs.Root>
        </>
    );
}