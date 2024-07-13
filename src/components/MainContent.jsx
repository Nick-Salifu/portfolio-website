import {GoDownload} from "react-icons/go";

import AnotherButton from "./AnotherButton"
import Button from "./Button"

function MainContent() {

    return (
        <div className="px-8 mx-auto mb-10 max-w-screen-2xl md:px-12" id="Home">
            <div className="flex flex-col items-center text-center py-32 md:py-[180px]">
                <div className="relative flex gap-2">
                    <p className="absolute text-xl font-semibold text-white left-16 sm:left-20 -top-4 lg:-left-9 md:left-28">I<span className="mx-1 text-blue-500">'</span>m</p>
                    <h1 className="mt-4 mb-2 md:mb-4 text-5xl font-bold leading-tight text-gray-200 uppercase md:text-6xl font-poppins">Salifu Friday Nicodemus</h1>
                </div>

                <p className="mb-8 md:mb-10 text-base text-gray-500 uppercase font-lato">I embrace the digital realm</p>
                <p className="max-w-3xl mb-8 md:mb-10 text-lg text-center text-gray-400 font-lato">I can assist in creating a product, feature, or website. Take a look at my work and experience! If you're interested, I'm available for hire.</p>

                <div className="flex gap-4">
                    <a href="#Project">
                        <Button>Check my work</Button>
                    </a>

                    <a href="https://drive.google.com/file/d/10jD35p02rl7KEK0D6SmBQT_Ax3Ud4sOD/view" target="_blank">
                        <AnotherButton >
                            <div className="flex items-center gap-2">
                                <p className="font-lato">Resume</p>
                                <GoDownload className="w-5 h-5"/>
                            </div>
                        </AnotherButton> 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainContent
