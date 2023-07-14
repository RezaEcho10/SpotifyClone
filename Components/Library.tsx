import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
const Library = () => {
    return (
        <div className='py-5 px-4'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-x-2'>
                    <TbPlaylist className='text-neutral-400' />
                    <p className='text-neutral-400 font-medium text-md'>Your Library</p>
                </div>
                <AiOutlinePlus className='text-neutral-400 cursor-pointer hover:text-white transition' />
            </div>
        </div>
    )
}

export default Library