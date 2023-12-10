import React, { useState } from 'react'
import HeaderComponent from '../../../components/HeaderComponent';
import bachi1 from '../../../assets/bachi1.jpg'
import { Button, Card, ColorPicker, DatePicker, Divider, Form, Input, Modal, Select, Typography, message } from 'antd';
import { MdMarkEmailRead, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Title = Typography;

const initialstate = { title: '', date: '' }
const Doctors = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [state, setState] = useState(initialstate)
    const [selected, setSelected] = useState('Monday');
    const [isProcessing, setIsProcessing] = useState(false)

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }
    const handleDate = (_, date) => setState(s => ({ ...s, date }))

    return (
        <main className='min-h-screen'>
            <HeaderComponent header='Doctor Details' />
            <div className="container mx-auto py-1 flex flex-wrap gap-1">
                <div className="border rounded flex gap-2">
                    <img src={bachi1} className='' alt="" />
                    <div className="flex flex-col gap-1 my-1 me-1">
                        <h1 className='text-lg font-bold'>Micheal Johnny</h1>
                        <span className='text-[#005963] mb-4'>DIABETIES</span>
                        <div className="flex gap-2 items-center">
                            <div className="text-[#a87f32]">
                                <MdPhone size={25} />
                            </div>
                            <a href='Mailto:' className='text-[#005963]'>(741)376-5672</a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-[#a87f32]">
                                <MdMarkEmailRead size={25} />
                            </div>
                            <a href='Mailto:' className='text-[#a87f32]'>matthewreyes@gmail.com</a>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button className='bg-[#32929c] rounded-md text-white px-4 py-2 w-fit' onClick={showModal}>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered footer={false}>
                    <Form layout='vertical' className='my-5'>
                        <h1 className='text-center text-xl text-[#005659] font-bold my-3' style={{ fontFamily: 'Poppins' }}>Patient Details</h1>
                        <Form.Item>
                            <Input type='text' placeholder='Input your Full Name' className='text-clr' name='title' onChange={handleChange} />
                        </Form.Item>
                        <Form.Item>
                            <Input type='email' placeholder='Input your Email' className='text-clr' name='email' onChange={handleChange} />
                        </Form.Item>
                        <Form.Item>
                            <Input type='text' placeholder='Your Medical History' className='text-clr' name='medical' onChange={handleChange} />
                        </Form.Item>
                        <Form.Item>
                            <Select
                                defaultValue='Monday'
                                value={selected}
                                onChange={(value) => { setSelected(value) }}
                                options={[
                                    {
                                        value: 'Monday',
                                        label: 'Monday',
                                    },
                                    {
                                        value: 'Tuesday',
                                        label: 'Tuesday',
                                    },
                                    {
                                        value: 'Wednesday',
                                        label: 'Wednesday',
                                    },
                                    {
                                        value: 'Thrusday',
                                        label: 'Thrusday',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item>
                            <DatePicker name="date" placeholder='select date' className='w-full text-clr' onChange={handleDate} />
                        </Form.Item>
                        <Form.Item>
                            <div className="flex justify-center w-full">
                                <Link to='/appointment'>
                                    <button htmlType='submit' className='w-fit bg-[#005659] text-white rounded-lg px-4 py-2' loading={isProcessing} >Book Appointment</button>
                                </Link>
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        </main>
    )
}

export default Doctors;