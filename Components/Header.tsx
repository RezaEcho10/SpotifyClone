"use client"

import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { useRouter } from "next/navigation"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Button from "./Button"

interface HeaderProps {
    children: React.ReactNode,
    className?: string
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const route = useRouter()
    return (
        <div className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        `,
        className
        )}>
            <div className="flex flex-row items-center justify-between">
                <div className="hidden md:flex gap-x-2">
                    <button onClick={() => route.back()} className="bg-black rounded-full flex hover:opacity-75 transition" >
                        <RxCaretLeft size={35} />
                    </button>
                    <button onClick={() => route.forward()} className="bg-black rounded-full flex hover:opacity-75 transition" >
                        <RxCaretRight size={35} />
                    </button>
                </div>
                <div className="flex gap-x-2">
                    <button className="bg-white rounded-full p-2 hover:opacity-75 transition">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="bg-white rounded-full p-2 hover:opacity-75 transition">
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div>
                    <Button className="bg-transparent text-neutral-300 font-medium">Sign up</Button>
                    <Button className="bg-white px-6 py-2">Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Header