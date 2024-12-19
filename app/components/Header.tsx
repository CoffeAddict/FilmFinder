import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = memo(function Header() {
    return <header className="backdrop-blur-sm sticky top-0 border-b-[1px] border-black bg-black/50">
        <div className="container flex justify-between py-3 mx-auto">
            <div className="flex items-center justify-center gap-16">
                <Image src="/images/logo.png" alt="film finder logo" width={56} height={56}/>
                <Link className="h-fit font-bold text-white hover:text-slate-400 transition-colors duration-300" href="/">Browse +</Link>
            </div>
            <div className="flex items-center justify-center gap-16">
                <Link className="h-fit font-bold text-white hover:text-slate-400 transition-colors duration-300" href="/">Login</Link>
                <Link className="h-fit font-bold text-white border-[1px] border-white py-2 px-5 rounded-full hover:bg-white hover:text-slate-800 transition-colors duration-300" href="/">Sign Up</Link>
            </div>
        </div>
    </header>;
})

export default Header