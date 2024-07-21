
function AnotherButton({ children, onClick }) {
    
    return (
        <button onClick={onClick} className="px-4 rounded relative z-10 py-3 text-base text-white bg-transparent border-2 border-stone-500 hover:border-blue-500 before:absolute before:top-0 before:w-0 before:transition-all before:duration-300 before:bg-blue-500 before:h-full before:left-0 before:-z-10 hover:before:w-full">
            {children}
        </button>
    )
}

export default AnotherButton
