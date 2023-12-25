import React from 'react'
import { TbMenu } from "react-icons/tb"
import NavLogo from "../assets/Navlogo.jpg"
import bgImg from "../assets/Page1-bg-Nova-speaker.jpg"

function Page1() {
    return (
        <div className=' relative w-screen  h-[108vh] overflow-hidden  bg-gradient-to-b -z-20 from-[#71818E] via-[#71818E] to-[#8FA3B4]'>
            <div className='BG-img absolute left-[36%] -top-8 -z-10 w-[55%] h-full '>
                <img src="https://assets-global.website-files.com/654a0ac89fa4aa44fe8a3f95/6554d831b606819d4b4b8c6a_nova-speaker-xyz-front-p-800.webp" alt='bg-img ' className=''/>
            </div>
            <nav className='px-10 py-5  h-20 flex justify-between items-center '>
                <div className='left-btn border-white border-[1px] rounded-full p-3'>
                    <TbMenu color='white' size={"20px"} />
                </div>
                <div className='logo '>
                 <img src={NavLogo} alt='logo'/>
                </div>
                <div className='right-btn border-white border-[1px] rounded-md leading-tight text-sm px-5 py-3 font-Nova-md text-white '>Reserve Now</div>
            </nav>
            <div className='content absolute bottom-1 px-10 py-10  w-3/4 h-[82%]'>
                <div className='upper  '>
                    <h1 className='text-white font-Nova-md text-7xl  tracking-tighter '>Experience immersive <br />sound at your home.</h1>
                    <button className='border-white border-[1px] rounded-md mt-5 leading-tight text-sm px-5 py-3 font-Nova-md text-black bg-white'>Learn more</button>
            </div>
                <div className='lower mt-8 h-[50vh] '>
                    <h1 className=' text-white leading-none tracking-tighter text-[20rem] font-Nova-md'>NOVA</h1>
            </div>
            
            
            </div> 
        </div>
    )
}

export default Page1