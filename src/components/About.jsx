
function About() {
    return (
        <div>
            <div className="px-8 mx-auto mb-[224px] max-w-screen-2xl md:px-12" id="About">
                <h1 className="mb-20 text-3xl font-semibold text-center text-gray-300 uppercase font-poppins">About me</h1>

                <div className="flex flex-col justify-between gap-y-10 md:flex-row ">
                    <div className="flex justify-center md:items-start w-full mx-auto max-w-[300px] md:w-[40%]">
                        <img className="w-[300px] h-[300px] rounded-xl" loading="lazy" src="/avatar.jpg" alt="Nick" />
                    </div>
                    
                    <div className="flex flex-col  lg:max-w-3xl gap-5  md:w-[55%]">
                        <h1 className="text-lg font-semibold tracking-wide text-left text-gray-200 font-lato">Introduction</h1>
                        <p className="text-lg text-gray-400 font-lato">My name is Salifu Friday Nicodemus, I'm a FrontEnd Developer based in Nigeria. I spend most of my time coding up things for the web, bringing designs to life and learning algorithms.</p>

                        <p className="text-lg text-gray-400 font-lato">My goal is to deliver, through code, unique and innovative solutions to complex problems. If my portfolio interests you, or you need an enthusiastic developer on your team, <a href="mailto:nicksalifu@gmail.com" className="text-indigo-500 hover:border-b-2 hover:border-indigo-500">I am available for hire</a></p>

                        <div className="flex flex-col gap-4 md:justify-between md:flex-row md:gap-4">
                            <div className="mb-4">
                            <h2 className="mb-6 text-lg tracking-wide text-left text-gray-200 font-lato">Languages and Technologies</h2>
                            <ul className="space-y-2 text-gray-400 font-lato">                            
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>React</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>Redux</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>Javascript</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>HTML</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>CSS</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>TailwindCSS</p>
                                    </li>
                            </ul>
                           </div>

                            <div>
                            <h2 className="mb-6 text-lg tracking-wide text-left text-gray-200 font-lato">Tools & Methods</h2>
                            <ul className="space-y-2 text-gray-400 font-lato">
                            <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>Git & Github</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>Figma</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>Vercel</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-3 w-3 border-2 border-blue-800 rounded-full"></span>
                                        <p>Responsive Development</p>
                                    </li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    )
}

export default About
