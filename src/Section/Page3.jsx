import React from 'react'
import Speaker from '../assets/Page3-speaker.jpg'
function Page3() {
    return (<>
        <div className='w-screen relative flex justify-center  px-10  bg-[#F4F4F4]'>
            <span className='text  text-[20rem] font-Nova-md '>X</span>
            <span className='text  text-[20rem] font-Nova-md '>Y</span>
            <span className='text  text-[20rem] font-Nova-md '>Z</span>
        </div>
            <div className='absolute mt-[40vh]  flex justify-center items-start bg-black  '>
                <img src={Speaker} alt='speaker' />
            </div>
            <div className='page3-content bg-black'>
                <h1 className='font-Nova-md'>NOVA XYZ</h1>
                <p className='font-Nova-rg'>The XYZ is a smart speaker reimagined for the
                    streaming age. Its minimal form combines high-
                    resolution stereo sound with a comprehensive
                    range of smart, connected features.</p>
        </div>
    </>
    )
}

export default Page3