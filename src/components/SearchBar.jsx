function SearchBar(props) {
    return (
        <form className="mt-5">
            {/* <label htmlFor="searchAccount">Search</label> */}
            <input
                onChange={props.handleChange}
                className="bg-gray-100 dark:bg-gunmetal dark:text-slate-200 p-3 my-4 rounded-xl w-96"
                type="text"
                id="searchAccount"
                placeholder="Search Account..."
            />
        </form>
    )
}

export default SearchBar
