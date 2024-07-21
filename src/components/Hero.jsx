import { GoDownload } from "react-icons/go"
import AnotherButton from "./AnotherButton"
import Button from "./Button"
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";


const socials = [
    {image:  <FaFacebookF />},
    {image:  <FaLinkedinIn />},
    {image:  <FaXTwitter />},
]

function Hero() {
    return (
        <div className="container flex flex-col-reverse items-center justify-center h-screen gap-10 px-5 mx-auto mb-32 text-white lg:flex-row lg:px-12">
            <div className="flex flex-col justify-center gap-3 lg:justify-start lg:w-1/2">
                <h1 className="text-4xl font-bold text-center lg:text-left lg:text-6xl font-roboto">Hi, I am Salifu Friday Nicodemus</h1>
                <h3 className="text-xl text-center lg:text-2xl lg:text-left font-lato">Frontend Developer</h3>
                <p className="mb-3 text-sm text-center font-lato lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, amet error! Natus, eligendi. Inventore, explicabo, quibusdam odio sequi placeat delectus sed amet, hic suscipit quidem commodi eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                <div className="flex justify-center gap-4 lg:justify-start">
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
                <div className="flex justify-center gap-3 mt-6 lg:justify-start">
                    {socials.map(social =>
                        <div key={social.image} className="relative z-10 flex items-center justify-center overflow-hidden border-2 border-blue-500 rounded-full cursor-pointer h-7 w-7 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-red before:-z-10 hover:before:w-full hover:before:bg-blue-500 before:duration-300">
                            {social.image}
                       </div>
                   )}   
                </div>
            </div>

            {/* left part */}
            <div className="mt-40 lg:mt-0">
                <img className="md:w-[400px] md:h-[400px] rounded-xl" src="/avatar.jpg" alt="Nick" />
            </div>
        </div>
    )
}

export default Hero
