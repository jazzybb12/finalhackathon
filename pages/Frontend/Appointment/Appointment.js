import React from 'react'
import HeaderComponent from '../../../components/HeaderComponent'
import { MdMarkEmailRead, MdPhone } from 'react-icons/md'

const Appointment = () => {
    return (
        <main className='min-h-screen'>
            <HeaderComponent header='Appointment' />
            <div className='overflow-scroll container mx-auto my-20'>
                <table className="table-auto rounded-lg">
                    <thead>
                        <tr className="bg-white shadow space-x-6 flex items-center mb-1 rounded-md">
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap w-[20rem]">HOMEOWNER</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">MILESTONE</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">UPDATED</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">ACTIVITY</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">PROJECT PEOPLE</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">TICKETS</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">MOVE IT FORWARD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white shadow space-x-6 flex items-center mb-1 rounded-md">
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap w-[20rem]">HOMEOWNER</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">MILESTONE</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">UPDATED</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">ACTIVITY</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">PROJECT PEOPLE</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">TICKETS</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">MOVE IT FORWARD</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Appointment