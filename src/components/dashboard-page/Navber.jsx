import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navber = () => {
    return (
        <div className='flex justify-between pt-5'>
            <div className='flex w-3/4'>
                <div>
                    <h1 className='text-2xl'><IoMenu /></h1>
                </div>
                <div className='pl-10'>
                    <h1 className='text-2xl text-purple-600'><IoIosNotifications /></h1>
                </div>
            </div>
            <div className='w-1/4'>
                <div>
                    <h2>Abdullah Al Habib</h2>
                    <h3 className='text-gray-500'>Team Member</h3>
                </div>
            </div>
        </div>
    )
}

export default Navber