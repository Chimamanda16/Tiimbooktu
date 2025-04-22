import React, { useEffect } from 'react'
import NavBarComp from '../components/Navbar'
import FooterComp from '../components/Footer'
import { Link } from 'react-router-dom'

const Composmentis =  () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const shopData = [
        {
            id: 1,
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'UNTITLED',
            desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate commodo sit massa vitae. Sagittis tempor tempus ac sodales elementum eu convallis dui malesuada.',
        },
        {
            id: 2,
            image: '/assets/images/tatto.png',
            date: 'February 12, 2024',
            title: 'TATTOO',
            desc: 'TATTOO One afternoon half a decade ago, I and a buddy drank one too many of that evil dwarf beer and got too shitfaced to think straight. But, think all the same, we did, and…',
        },
        {
            id: 3,
            image: '/thought-card3.png',
            date: 'February 12, 2024',
            title: 'LISTEN, YOU REA...',
            desc: 'LISTEN, YOU REALLY CAN’T SEE SHIT! Occasionally, you’ll see the couple that pop out with the cute videos and pristine smiles, and I know I’m a diehard cynic but, I swear, not in this case.…',
        },
        {
            id: 4,
            image: '/assets/images/illegal.png',
            date: 'February 10, 2025',
            title: 'ILLEGAL',
            desc: 'ILLEGAL He says the shit is easy peasy, that the city is easy, that the roads are pearl-paved, that I’ll just do my master’s, maybe find a job on the side to support and sustain me and…',
        },
        {
            id: 5,
            image: '/thought-card3.png',
            date: 'February 4, 2025',
            title: 'KNOWLEDGE',
            desc: 'KNOWLEDGE Sometime in the late 30s a young man walked late into class and met two problems on the blackboard he assumed were take home assignments. He  went home to work on them only to…es elementum eu convallis dui malesuada.',
        },
        {
            id: 6,
            image: '/assets/images/problem.png',
            date: 'February 1, 2025',
            title: 'PROBLEM',
            desc: 'PROBLEM As I’m writing this, I geh like five problem. Five! All which needs to be solved before Wednesday. They cease to be a problem after Wednesday. Doesn’t mean their automatic absence would make me feel any better. No.…es elementum eu convallis dui malesuada.',
        },
        {
            id: 7,
            image: '/assets/images/creator.png',
            date: 'January 30, 2025',
            title: 'HELLO, CREATOR! ',
            desc: 'HELLO, CREATOR! Exactly a month ago I took Tiimbooktu online. I could tell you thirty reasons I’ve learnt so far, but since its always struck me funny how people’s number of learned lessons somehow, always,…',
        },
        {
            id: 8,
            image: '/assets/images/yaameji.png',
            date: 'January 27, 2025',
            title: 'YAA MEJI',
            desc: 'YAA MEJI I went to a secondary school filled with teachers who were more of sadists than anything else. They came, taught, beat and scrammed. All. Except 1. Ms. Yaa Meji had a thick pair…',
        },
        {
            id: 9,
            image: '/assets/images/skeleton.png',
            date: 'January 25, 2025',
            title: 'SKELETON. CLOAK. SCYTHE',
            desc: 'SKELETON. CLOAK. SCYTHE Dear Diary, These days, I deal with pain I speak nothing about. I smile. I chuckle at jokes that don’t deserve it. Sometimes, I troll and say wild shit, still, I walk…',
        },
        {
            id: 10,
            image: '/assets/images/kaka.png',
            date: 'January 23, 2025',
            title: 'KAKA',
            desc: 'KAKA Listen, when you go to your elder sister’s place and the first question she asks immediately your luggage hits the floor is when you think you’ll be leaving, kindly forget the smile and the…',
        },
    ]
  return (
    <div className='bg-black flex font-cizel flex-col gap-6 text-white'>
        <NavBarComp />
        <div className='flex flex-col gap-8 w-[88%] mb-10 lg:mb-[120px] mx-auto'>
            <div className='flex flex-col gap-1'>
            <h1 className='lg:text-[70px] md:text-[60px] text-[32px] font-chango text-center uppercase'>LA COMPOS MENTIS</h1>
            <p className='text-center capitalize text-xl'>I got, like, storey-high piles of shit on my mind every effin’ day that I get to tell just me.
            Now, I get to tell you. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {shopData.map((shop, index) => {
                    return (
                        <div key={index} className='bg-white py-[15px] px-[19px] border flex flex-col gap-[19px] items-center text-center'>
                        <img className='w-[223px] h-[276px]' src={shop.image} alt="item1" />
                        <div className='flex flex-col gap-[14px]'>
                            <div className='flex flex-col justify-between items-center gap-2'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <img src="/assets/icons/calender-icon.svg" alt="" />
                                    <span className='text-black'>{shop.date}</span>
                                </div>
                                <div className='text-[#0A0A0A] flex justify-center text-xl uppercase font-medium'>
                                    {shop.title}
                                </div>
                                <div className='text-[#0A0A0A] text-xl line-clamp-4'>{shop.desc}</div>
                            </div>
                        </div>
                        <Link to={`/blog/${shop.id}`} className='border border-[#0A0A0A] font-bold text-[#0A0A0A] p-[10px] px-4'>
                                Read more
                        </Link>
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