function NavIcon({ Icon, title }) {
    return (
        <div className="flex flex-col items-center px-2 hover:bg-gray-100 rounded-xl cursor-pointer">
            <Icon className="h-8 w-8" />
            <p>{title}</p>
        </div>
    )
}

export default NavIcon
