
function About() {
    return (
        <div className="mt-40 lg:mt-0">
            <div className="px-5 mx-auto mb-20 max-w-screen-2xl md:px-12" id="About">
                <h1 className="mb-12 text-3xl font-semibold text-center text-gray-300 uppercase font-poppins">About me</h1>
                    
                <div className="container max-w-5xl mx-auto">
                    <div className="flex flex-col">
                            <h1 className="text-lg font-semibold tracking-wide text-center text-gray-200 mb-4 font-lato">Introduction</h1>
                            <div>
                            <p className="text-lg text-gray-400 font-lato">My name is Salifu Friday Nicodemus, I'm a FrontEnd Developer based in Nigeria. I specialize in building responsive and dynamic web applications that bring ideas to life. With over 2 years of experience, my expertise in modern frameworks like React.js allows me to create interactive and scalable solutions, ensuring that each project I work on is both visually appealing and functionally robust.</p>

                            <p className="text-lg text-gray-400 font-lato mt-6">I believe that effective communication is just as important as technical expertise. My ability to clearly convey ideas and collaborate with both technical and non-technical stakeholders makes me a great team-player.</p>
                            
                            <div className="text-lg text-gray-400 font-lato mt-6">
                                <p className="mb-5">When I'm not coding, I spend time;</p>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="bg-blue-500 p-2 w-fit text-white">Playing/Watching Football</div>
                                    <div className="bg-blue-500 p-2 w-fit text-white">Reading a book</div>
                                    <div className="bg-blue-500 p-2 w-fit text-white">Seeing a movie</div>
                                    <div className="bg-blue-500 p-2 w-fit text-white">Gaming</div>
                                
                                </div>
                            </div>

                                <p className="text-lg text-gray-400 font-lato mt-6">My goal is to deliver, through code, unique and innovative solutions to complex problems. If my portfolio interests you, or you need an enthusiastic developer on your team, <br/> <a href="mailto:nicksalifu@gmail.com" className="text-blue-500 hover:border-b-2 hover:border-blue-500">I am available for hire</a></p>
                            </div>
                        </div> 
                </div>
           </div>
       </div>
    )
}

export default About
