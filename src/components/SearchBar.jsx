function SearchBar(props) {
    return (
        <form className="mt-5">
            {/* <label htmlFor="searchAccount">Search</label> */}
            <input
                onChange={props.handleChange}
                className="bg-gray-100 dark:text-gray-800 p-2 rounded-2xl w-96"
                type="text"
                id="searchAccount"
                placeholder="Search Account..."
            />
        </form>
    )
}

export default SearchBar
