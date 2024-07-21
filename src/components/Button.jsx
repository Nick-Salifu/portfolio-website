function Button({children}) {
    return (
        <button className="px-6 relative z-10 py-3 border-2 border-blue-500 rounded overflow-hidden text-base text-white transition-all duration-300 bg-blue-500  font-lato before:absolute before:top-0 before:w-0 before:transition-all before:duration-300 before:bg-black before:h-full before:left-0 before:-z-10 hover:before:w-full">
            {children}
        </button>
    )
}

export default Button
