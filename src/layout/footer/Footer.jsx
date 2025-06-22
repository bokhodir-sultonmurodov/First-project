import React from 'react'

const Footer = () => {
  return (
    

    <footer className='container mx-auto px-4'>
      {/* <div className='w-full border-t border-gray-400' ></div> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12'>
        <div>
          <p className='text-[24px] font-bold text-[#000000]'>Funiro.</p>
          <p className='mt-[30px] text-[#000000]'>
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <p className='text-[#9F9F9F] font-semibold'>Links</p>
          <div className='mt-[30px] text-[#000000] flex flex-col gap-[45px]'>
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <p className='text-[#9F9F9F] font-semibold'>Help</p>
          <div className='mt-[30px] text-[#000000] flex flex-col gap-[45px]'>
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
          </div>
        </div>

        <div>
          <p className='text-[#9F9F9F] font-semibold mb-4'>Newsletter</p>
          <div className='flex items-center gap-4'>
            <input
              type='email'
              placeholder='Email Address'
              className='p-0.5 placeholder:text-[#9F9F9F] border-b border-black outline-none bg-transparent w-full  pb-1'
            />
            <button className='border-b border-black text-black font-medium pb-1'>
              SUBSCRIBE
            </button>
          </div>

        </div>
      </div>

      <div className=' w-full'>
        <div className='container mx-auto px-4 py-4 border-t border-gray-400'>
          <p className=' text-black text-sm'>2023 Furino. All rights reserved</p>
        </div>
      </div>
    </footer>
    
  )
}

export default React.memo(Footer)
