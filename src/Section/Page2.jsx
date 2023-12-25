import React from 'react'

function Page2() {
    return (
        <div className='w-screen flex justify-between h-screen px-10 py-10 bg-[#F4F4F4]'>
            <div className='left py-24 flex '>
                <div className='w-2 h-2 bg-gradient-to-b from-yellow-500 via-yellow-500 to-orange-500 rounded-full 
'></div>
                <span className='font-Nova-md text-[.7em] ml-2 mb-10'>EXCELLENCE EVOLVED</span>
            </div>
            <div className='right py-20'>
                <p className='font-Nova-rg text-left text-[1.9rem] leading-tight text-[#1C1C1C] '>At NOVA we deliver the True Sound experience by infusing <br />
                    top-notch audio technology into our products. This ensures <br />
                    you hear music with the utmost accuracy and realism of the<br />
                    original recording — just pure, authentic sound.</p>
            </div>


        </div>
    )
}

export default Page2