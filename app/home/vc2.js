'use client';
import PostCard from "../components/post";
import Image from "next/image";
import { useState } from "react";
import useAuth from "../hooks/auth";
export default function HomePage() {
    const [openImage, setOpenImage] = useState(null);
    const [activeTab, setActiveTab] = useState("Posts");
    useAuth();

    return (
        <>
            <div className="relative">
                <div className=" relative w-full h-60 md:h-80 overflow-hidden rounded-xl cursor-pointer" 
                onClick={() => setOpenImage('/images/cover3.jpg')}>
                    <Image src="/images/cover3.jpg" 
                    fill
                    style={{objectFit: "cover"}}
                    alt="Cover"/>
                    
                </div>
                <div className="absolute bottom-[-60px] left-6 rounded-full w-70 h-70 overflow-hidden border-2 border-white cursor-pointer" 
                onClick={() => setOpenImage('/images/profile.jpg')}>
                    <Image src="/images/profile.jpg"
                    fill
                    style={{objectFit: "cover"}}
                    alt="Profile"/>
                </div>
            </div>

            {openImage && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setOpenImage(null)}>
                <img src={openImage} className="max-w-2xl max-h-2xl" alt="Full view"/>
            </div>
            )}
            
                <div className=" flex gap-2 justify-center mt-4 mr-4">
                    <span className="flex text-white text-4xl justify-center items-center font-bold ml-60 mr-20">John Doe</span>
                <div className="flex gap-2 justify-end items-end ml-120">
                    <button className="flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 hover:cursor-pointer">
                        <span> + </span> Add to Story
                    </button>
                    <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer">
                        <span> 🖊 </span> Edit Profile
                    </button>
                    <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer">
                        <span> ⮟ </span> 
                    </button>
                </div>
            </div>
            <hr className="m-6 border-gray-700 border-t-2" />

            <div className="flex ml-10 mt-3 text-white border-b border-gray-700">
                {["Posts", "About", "Friends", "Photos", "Reels", "Check-ins", "More ▼"].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={"px-5 py-2 hover:cursor-pointer hover:text-blue-500 hover:bg-gray-700 rounded-t-md " 
                        + (activeTab === tab ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-300")}>
                        {tab}
                    </button>
                ))}
            </div>
            
            <div className="bg-gray-900 mt-4 rounded-xl p-4 mx-10">
                <div className="flex justify-center gap-2 items-end mt-4 mr-4">
                    <h1 className="text-3xl font-bold text-white ml-10 mt-4">Posts</h1>
                    <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer">
                        <span> ☰ </span> Filter Posts
                    </button>
                    <button className="flex items-center gap-2 rounded-md bg-gray-600 text-white px-4 py-2 hover:cursor-pointer">
                        <span> ⚙️ </span> Post Settings
                    </button>
                </div>
                <hr className="m-6 border-gray-700 border-t-2" />

            {[1,2,3,4,5,6,7,8,9].map(n => (
                <PostCard key={n} image={`/images/img${n}.jpg`} setOpenImage={setOpenImage}/>
            ))}

            </div>
        </> 
    )
}

 