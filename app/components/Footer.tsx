import Link from 'next/link';
import { memo } from 'react'

const Footer = memo(function Footer() {
    return <footer className="bg-slate-900">
        <div className="container flex justify-between pt-12 pb-24 mx-auto text-white font-bold">
            <div className="flex flex-col gap-5">
                <div className="flex gap-8">
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300">About</Link>
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300">Jobs</Link>
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300">Press</Link>
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300">News</Link>
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300">Gift</Link>
                </div>
                <div className="flex gap-8">
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300 font-normal">Legal</Link>
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300 font-normal">Cookies</Link>
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300 font-normal">AdChoices</Link>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-8">
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300">Facebook</Link>
                    <Link href="/" className="hover:text-slate-400 transition-colors duration-300">Twitter</Link>
                </div>
                <div className="flex gap-14">
                    <div className="font-normal ml-auto">© 2024 Film Finder</div>
                </div>
            </div>
        </div>
    </footer>;
})

export default Footer