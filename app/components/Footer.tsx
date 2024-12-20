import Link from 'next/link';
import { memo } from 'react'

const Footer = memo(function Footer() {
    return <footer className="bg-slate-900">
        <nav className="container flex justify-between pt-12 pb-24 mx-auto text-white font-bold gap-8 px-4 flex-col-reverse md:flex-row">
            <div className="flex flex-col gap-8">
                <div className="flex flex-wrap gap-8">
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300">
                        About
                    </Link>
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300">
                        Jobs
                    </Link>
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300">
                        Press
                    </Link>
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300">
                        News
                    </Link>
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300">
                        Gift
                    </Link>
                </div>
                <div className="flex flex-wrap gap-8">
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300 font-normal">
                        Legal
                    </Link>
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300 font-normal">
                        Cookies
                    </Link>
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300 font-normal">
                        AdChoices
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex gap-8 flex-wrap">
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300">
                        Facebook
                    </Link>
                    <Link
                        href="/home"
                        className="hover:text-slate-400 transition-colors duration-300">
                        Twitter
                    </Link>
                </div>
                <div className="flex">
                    <div className="font-normal text-left">Made with ❤️ using Next.js</div>
                </div>
            </div>
        </nav>
    </footer>;
})

export default Footer