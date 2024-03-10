import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='pt-2'>
            <ul className='ml-2'>
                <li className='hover:bg-[#EFF6FF] hover:rounded-sm hover:shadow-sm py-1 mr-2'><Link className='pr-32 pl-3' to='/overview'>Overview</Link></li>
                <li className='hover:bg-[#EFF6FF] hover:rounded-sm hover:shadow-sm py-1 mr-2'><Link className='pr-32 pl-3' to='/profile'>Profile</Link></li>
                <li className='hover:bg-[#EFF6FF] hover:rounded-sm hover:shadow-sm py-1 mr-2'><Link className='pr-32 pl-3' to='/overview'>Overview</Link></li>
                <li className='hover:bg-[#EFF6FF] hover:rounded-sm hover:shadow-sm py-1 mr-2'><Link className='pr-32 pl-3' to='/profile'>Profile</Link></li>
                <li className='hover:bg-[#EFF6FF] hover:rounded-sm hover:shadow-sm py-1 mr-2'><Link className='pr-32 pl-3' to='/overview'>Overview</Link></li>
                <li className='hover:bg-[#EFF6FF] hover:rounded-sm hover:shadow-sm py-1 mr-2'><Link className='pr-32 pl-3' to='/profile'>Profile</Link></li>
            </ul>
        </div>
    )
}

export default Menu