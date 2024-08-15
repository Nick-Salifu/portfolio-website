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
                <div className="p-4 overflow-y-hidden border border-gray-600 hover:border-gray-500 hover:rounded-tl-lg">
                    <h1 className="mb-3 text-xl font-bold">Project name</h1>
                    <p className="max-w-sm mb-2 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, aperiam!.</p>
                    <div className="mb-4 space-x-3">
                        <button className="px-4 text-sm font-semibold text-white bg-green-500 rounded-xl">CSS</button>
                        <button className="px-4 text-sm font-semibold text-white bg-red-500 rounded-xl">react</button>
                   </div>
                </div>
                
                <div className="p-4 border-b-2 border-gray-600 hover:border hover:border-gray-600">
                    <h1 className="mb-3 text-xl font-bold">Project name</h1>
                    <p className="max-w-sm mb-2 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, facere!.</p>
                    <div className="mb-4 space-x-3">
                        <button className="px-4 text-sm font-semibold text-white bg-green-500 rounded-xl">CSS</button>
                        <button className="px-4 text-sm font-semibold text-white bg-red-500 rounded-xl">react</button>
                   </div>
                </div>

                <div className="p-4 hover:border hover:border-gray-600 hover:rounded-bl-lg">
                    <h1 className="mb-3 text-xl font-bold">Project name</h1>
                    <p className="max-w-sm mb-2 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, explicabo..</p>
                    <div className="space-x-3">
                        <button className="px-4 text-sm font-semibold text-white bg-green-500 rounded-xl">CSS</button>
                        <button className="px-4 text-sm font-semibold text-white bg-red-500 rounded-xl">react</button>
                   </div>
                </div>
            </div>

            <div className="text-white border-r border-gray-500 bg-slate-900">
                <div className="flex flex-col justify-between h-full p-4">
                    <div>
                        <h1 className="text-xl font-bold">Project name</h1>
                        <p className="text-sm text-gray-500">Project date</p>
                        <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam rerum voluptatum, sed itaque illo eos sint asperiores nobis a sunt.</p>
                    </div>
                    <div className="flex flex-col gap-4 mb-8">
                        <div>
                            <button className="py-2 text-sm font-semibold bg-blue-500 rounded-lg px-7">View Live</button>
                        </div>
                        <div>
                            <button className="px-5 py-2 text-sm font-semibold border border-gray-600 rounded-lg">View on Github</button>
                        </div>
                    </div>
                </div>
                
                {/* <div className="flex flex-col justify-between h-full p-4">
                    <div>
                        <h1 className="text-xl font-bold">Project name</h1>
                        <p className="text-sm text-gray-500">Project date</p>
                        <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam rerum voluptatum, sed itaque illo eos sint asperiores nobis a sunt.</p>
                    </div>
                    <div className="flex flex-col gap-4 mb-8">
                        <div>
                            <button className="py-2 text-sm font-semibold bg-red-500 rounded-lg px-7">View Live</button>
                        </div>
                        <div>
                            <button className="px-5 py-2 text-sm font-semibold border border-gray-600 rounded-lg">View on Github</button>
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
