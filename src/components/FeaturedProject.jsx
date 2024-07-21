import { useState } from "react"

function FeaturedProject() {
    // const [open, setOpen] = useState(false);
    // const [isOpen, setIsOpen] = useState(false)

    // function toggle() {
    //     setOpen(!open)
    // }

    // function secondToggle() {
    //     setIsOpen(!isOpen)
    // }

    return (
        <div className=" hidden lg:grid grid-cols-[21rem_21rem_1fr] border border-gray-800 max-w-screen-2xl mx-14 rounded-lg mb-24 text-white">
            <div className="flex flex-col border-r border-gray-600">
                <div className="p-4 border overflow-y-hidden border-gray-600 hover:border-gray-500 hover:rounded-tl-lg">
                    <h1 className="font-bold text-xl mb-3">Project name</h1>
                    <p className="text-sm text-gray-400 max-w-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, aperiam!.</p>
                    <div className="space-x-3 mb-4">
                        <button className="bg-green-500 text-white text-sm font-semibold rounded-xl px-4">CSS</button>
                        <button className="bg-red-500 text-white text-sm font-semibold rounded-xl px-4">react</button>
                   </div>
                </div>
                
                <div className="p-4 border-b-2 border-gray-600 hover:border hover:border-gray-600">
                    <h1 className="font-bold text-xl mb-3">Project name</h1>
                    <p className="text-sm text-gray-400 max-w-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, facere!.</p>
                    <div className="space-x-3 mb-4">
                        <button className="bg-green-500 text-white text-sm font-semibold rounded-xl px-4">CSS</button>
                        <button className="bg-red-500 text-white text-sm font-semibold rounded-xl px-4">react</button>
                   </div>
                </div>

                <div className="p-4 hover:border hover:border-gray-600 hover:rounded-bl-lg">
                    <h1 className="font-bold text-xl mb-3">Project name</h1>
                    <p className="text-sm text-gray-400 max-w-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, explicabo..</p>
                    <div className="space-x-3">
                        <button className="bg-green-500 text-white text-sm font-semibold rounded-xl px-4">CSS</button>
                        <button className="bg-red-500 text-white text-sm font-semibold rounded-xl px-4">react</button>
                   </div>
                </div>
            </div>

            <div className="text-white border-r border-gray-500 bg-slate-900">
                <div className="flex flex-col p-4 justify-between h-full">
                    <div>
                        <h1 className="text-xl font-bold">Project name</h1>
                        <p className="text-gray-500 text-sm">Project date</p>
                        <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam rerum voluptatum, sed itaque illo eos sint asperiores nobis a sunt.</p>
                    </div>
                    <div className="flex flex-col gap-4 mb-8">
                        <div>
                            <button className="bg-blue-500 rounded-lg px-7 py-2 text-sm font-semibold">View Live</button>
                        </div>
                        <div>
                            <button className="border border-gray-600 px-5 py-2 rounded-lg text-sm font-semibold">View on Github</button>
                        </div>
                    </div>
                </div>
                
                {/* <div className="flex flex-col p-4 justify-between h-full">
                    <div>
                        <h1 className="text-xl font-bold">Project name</h1>
                        <p className="text-gray-500 text-sm">Project date</p>
                        <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam rerum voluptatum, sed itaque illo eos sint asperiores nobis a sunt.</p>
                    </div>
                    <div className="flex flex-col gap-4 mb-8">
                        <div>
                            <button className="bg-red-500 rounded-lg px-7 py-2 text-sm font-semibold">View Live</button>
                        </div>
                        <div>
                            <button className="border border-gray-600 px-5 py-2 rounded-lg text-sm font-semibold">View on Github</button>
                        </div>
                    </div>
                </div> */}
            </div>

            
            <div>
                third grid item
            </div>
        </div>
    )
}

export default FeaturedProject
