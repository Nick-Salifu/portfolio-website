
function AnotherButton({ children, onClick }) {
    
    return (
        <button onClick={onClick} className="px-4 py-2 text-base text-white bg-transparent border rounded border-stone-500 hover:bg-hover">
            {children}
        </button>
    )
}

export default AnotherButton
