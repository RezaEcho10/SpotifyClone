"use client"
import { usePathname } from 'next/navigation'
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box';
import SideBarItem from './SideBarItem';
import Library from './Library';

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({
    children
}) => {
    const path = usePathname()
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: path !== '/search',
            href : '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: path === '/search',
            href: '/search'
        }
    ], [path])
    return (
        <div className='flex h-full'>
            <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
                <Box>
                    <div className='flex flex-col gap-y-4 px-5 py-4'>
                        {
                            routes.map((item) => (
                                <SideBarItem key={item.label} {...item} />
                            ))
                        }
                    </div>
                </Box>
                <Box className='overflow-y-auto h-full'>
                    <Library />
                </Box>
            </div>
            <main className='h-full flex-1 overflow-y-auto py-2'>
                {children}
            </main>
        </div>
    )
}

export default SideBar