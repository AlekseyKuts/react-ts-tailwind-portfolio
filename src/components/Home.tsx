import React from 'react'
import myImage from "../assets/myImage.jpg"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center 
        h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Frontend Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 2 years of experience building and designing software.
                    Currently, I love to work on web application using
                    technologies like
                    React and Tailwind.
                </p>

                <div>
                    <Link to="experience" spy={true} smooth={true} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Experience
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={myImage} alt='my profile' 
                className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
            </div>
        </div>
    </div>
  )
}

export default Home //rafce