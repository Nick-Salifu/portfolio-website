function LiveButton({ link, children}) {
    return (
        <a href={link} className="flex text-sm items-center gap-1 font-medium bg-indigo-400 px-2 lg:px-3 py-2 rounded-lg transition-all duration-300 hover:bg-opacity-80">
            {children}
        </a>
    )
}

function GithubButton({ link, children}) {
    return (
        <a href={link} className="flex items-center gap-2 bg-black px-2 lg:px-3 py-2 rounded-lg transition-all duration-300 hover:bg-opacity-20">
            {children}
        </a>
    )
}


export {LiveButton, GithubButton}