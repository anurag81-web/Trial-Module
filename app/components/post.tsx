'use client';
import Image from "next/image";

interface PostCardProps {
    image: string;
    setOpenImage: (image: string) => void;
}
export default function PostCard({ image, setOpenImage }: PostCardProps) {
    return (
        <div className="flex flex-col mb-4 bg-gray-800 p-4 rounded-xl max-w-2xl mx-auto">
            <div className="flex flex-row gap-4 items-start">
                <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-full overflow-hidden">
                    <Image src="/images/profile.jpg" width={64} height={64} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 w-full min-w-0">
                    <span className="text-white text-base md:text-lg font-bold">John Doe</span>
                    <span className="text-gray-500 text-sm">2 hours ago</span>
                    <hr className="border-gray-700 border-t-2" />
                    <div className="border border-gray-700 rounded-xl p-2 mt-2">
                        <Image src={image} width={200} height={100} alt="Post"
                            className="rounded-2xl w-full object-cover hover:cursor-pointer"
                            onClick={() => setOpenImage(image)} />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 mt-3">
                <button onClick={(e) => {
                    e.currentTarget.classList.toggle("text-blue-500");
                    e.currentTarget.classList.toggle("text-gray-300");
                }} className="flex-1 flex items-center justify-center gap-1 rounded-md py-2 hover:bg-gray-700 text-gray-300 border border-gray-600 text-sm hover:cursor-pointer">
                    👍 Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 rounded-md py-2 hover:bg-gray-700 text-gray-300 border border-gray-600 text-sm hover:cursor-pointer">
                    💬 Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 rounded-md py-2 hover:bg-gray-700 text-gray-300 border border-gray-600 text-sm hover:cursor-pointer">
                    🔗 Share
                </button>
            </div>
        </div>
    );
}
