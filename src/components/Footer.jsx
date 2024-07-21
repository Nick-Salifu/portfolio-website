import { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import Logo from "../assets/Logo.png";

function Footer() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <footer className="bg-slate-800">
            <div className="flex flex-col justify-between px-6 py-10 md:flex-row gap-y-12">

                <div className="flex flex-row justify-between gap-8 md:flex-col">
                    <a href="/" className="cursor-pointer"><img className="w-16 h-10" src={Logo} alt="logo" /></a>

                    <div className="flex flex-row gap-3 md:flex-col ">
                        <a href="" className="flex items-center gap-2 text-gray-300 cursor-pointer hover:text-gray-100">
                            <FaGithub className="text-4xl " />
                            <p className="hidden hover:border-b-2 md:block">Github</p>
                        </a>
                        <a href="" className="flex items-center gap-2 text-gray-300 cursor-pointer hover:text-gray-100">
                            <LuMail className="text-4xl " />
                            <p className="hidden hover:border-b-2 md:block">Gmail</p>
                        </a>
                        <a href="" className="flex items-center gap-2 text-gray-300 cursor-pointer hover:text-gray-100">
                            <FaLinkedin className="text-4xl " />
                            <p className="hidden hover:border-b-2 md:block">LinkedIn</p>
                        </a>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-between gap-5 md:items-end">
                    <div className="flex items-center h-12 gap-2 px-1 border rounded-full">
                        <button className={`flex justify-center items-center h-10 w-10 rounded-full transition-all duration-300 ${activeButton === 'moon' ? 'bg-indigo-900 opacity-100 text-white' : 'text-gray-300 opacity-50' }`}
                            onClick={() => handleButtonClick('moon')}>
                            <FaRegMoon className="text-2xl" />
                        </button>

                        <button className={`flex justify-center items-center h-10 w-10 rounded-full transition-all duration-300 ${activeButton === 'sun' ? 'bg-indigo-900 opacity-100 text-white' : 'text-gray-300 opacity-50' }`}
                            onClick={() => handleButtonClick('sun')} >
                            <MdSunny className="text-2xl" />
                        </button>
                    </div>
                    <div className="text-sm text-gray-300">Built by : <a href="" className="text-lg font-semibold uppercase text-slate-300 hover:text-blue-400 font-roboto">Salifu Friday Nicodemus</a></div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;