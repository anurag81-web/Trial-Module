import Link from "next/link";
export default function SignupPage() {
    return (
        <div className="justify-center bg-navy-500 flex flex-col items-center px-12 py-10 rounded-xl max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-white tracking-wide">Sign Up</h1>
            <p className="text-white/60 text-sm mb-4">Create a new account</p>
            <form className="flex flex-col gap-4 max-w-sm mx-auto">
                <input type="text" placeholder="First Name" className="border border-white/60 placeholder:text-white rounded-xl py-4 px-9" />
                <input type="text" placeholder="Last Name" className="border border-white/60 placeholder:text-white rounded-xl py-4 px-9" />
                <input type="email" placeholder="Email" className="border border-white/60 placeholder:text-white rounded-xl py-4 px-9" />
                <input type="text" placeholder="Username" className="border border-white/60 placeholder:text-white rounded-xl py-4 px-9" />
                <input type="password" placeholder="Password" className="border border-white/60 placeholder:text-white rounded-xl py-4 px-9" />
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl hover:cursor-pointer">
                    Create My Account
                </button>
                <Link href="/login" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:cursor-pointer text-center">
                    Already have an account? Login
                </Link>
            </form>
        </div>
    );


}