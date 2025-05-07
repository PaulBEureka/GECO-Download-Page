import React from 'react'
import DownloadButton from './DownloadButton'
import { AndroidMockup } from 'react-device-mockup'
import GECOLight from '../../assets/gecoLight.jpg'
import GECODark from '../../assets/gecoDark.jpg'
import { useTheme } from '../../context/ThemeContext'

const LandingSection = () => {
    const { theme } = useTheme();
    return (
        <section id="download" className='flex flex-wrap h-screen bg-white items-center p-10 mt-16'>
            <div className='md:basis-1/2 justify-center items-center'>
                <div className="text-start">
                    <h1 className="text-4xl font-bold">Attain Sustainable Mobile Use Through Artificial Intelligence</h1>
                    <p className="text-lg mt-2">An LLM-based companion application to help adapt sustainable habits</p>
                    <div className="flex items-center my-8">
                        <DownloadButton className="">Download GECO</DownloadButton>
                    </div>
                </div>
            </div>
            <div className='md:basis-1/2 flex justify-center items-center h-full'>
                <AndroidMockup screenWidth={200} className='shadow-2xl rounded-4xl'>
                    <img src={theme === "dark" ? GECODark : GECOLight} alt="GECO Light" className="w-full h-auto" />
                </AndroidMockup>
            </div>
        </section>
        
    )
}

export default LandingSection
