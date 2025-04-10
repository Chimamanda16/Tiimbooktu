import React, { useEffect } from 'react'
import NavBarComp from '../components/Navbar'
import FooterComp from '../components/Footer'

const Composmentis =  () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const shopData = [
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
    ]
  return (
    <div className='bg-black flex font-[satoshi] flex-col gap-6 text-white'>
        <NavBarComp />
        <div className='flex flex-col gap-6 w-[88%] mb-10 lg:mb-[120px] mx-auto'>
            <h1 className='xl:text-[112px] lg:text-[80px] md:text-[60px] text-[32px] font-[myFont] text-center uppercase'>LA COMPOS MENTIS</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {shopData.map((shop, index) => {
                    return (
                        <div key={index} className='bg-white py-[15px] px-[19px] border flex flex-col gap-[19px] items-center text-center'>
                        <img className='w-[223px] h-[276px]' src={shop.image} alt="item1" />
                        <div className='flex flex-col gap-[14px]'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <img src="/assets/icons/calender-icon.svg" alt="" />
                                    <span className='text-black'>{shop.date}</span>
                                </div>
                                <h6 className='text-[#0A0A0A] text-xl uppercase font-medium'>{shop.title}</h6>
                                <p className='text-[#0A0A0A] text-xl'>{shop.desc}</p>
                            </div>
                        </div>
                        <button className='border border-[#0A0A0A] font-bold text-[#0A0A0A] p-[10px] px-4 rounded-[22px]'>
                                Read more
                        </button>
                    </div>
                    )
                })}
            </div>
        </div>
        <FooterComp />
    </div>
  )
}

export default Composmentis;