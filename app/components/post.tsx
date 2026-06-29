'use client';
import { useState } from "react";
import Image from "next/image";

interface PostCardProps {
    image: string;
    setOpenImage: (image: string) => void;
}

export default function PostCard({ image, setOpenImage }: PostCardProps) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="flex flex-col mb-6 bg-card border border-border-color/60 p-6 rounded-2xl max-w-2xl mx-auto shadow-sm">
            <div className="flex flex-row gap-4 items-start">
                <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-full overflow-hidden">
                    <Image src="/images/profile.jpg" width={64} height={64} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 w-full min-w-0">
                    <span className="text-foreground text-base md:text-lg font-bold">John Doe</span>
                    <span className="text-muted text-sm">2 hours ago</span>
                    <hr className="border-border-color/60 border-t" />
                    <div className="border border-border-color/60 rounded-2xl overflow-hidden p-1.5 bg-background/50 mt-3 flex justify-center items-center">
                        <img 
                            src={image} 
                            alt="Post"
                            className="rounded-xl w-full h-auto max-h-[480px] object-contain hover:cursor-pointer"
                            onClick={() => setOpenImage(image)} 
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-3 mt-4">
                <button onClick={() => setLiked(!liked)} 
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2.5 bg-transparent hover:bg-sidebar-hover border border-border-color/60 text-sm font-medium hover:cursor-pointer transition-all duration-150 ${
                        liked ? "text-blue-500" : "text-muted"
                    }`}>
                    👍 Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2.5 bg-transparent hover:bg-sidebar-hover text-muted hover:text-foreground border border-border-color/60 text-sm font-medium hover:cursor-pointer transition-all duration-150">
                    💬 Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2.5 bg-transparent hover:bg-sidebar-hover text-muted hover:text-foreground border border-border-color/60 text-sm font-medium hover:cursor-pointer transition-all duration-150">
                    🔗 Share
                </button>
            </div>
        </div>
    );
}
