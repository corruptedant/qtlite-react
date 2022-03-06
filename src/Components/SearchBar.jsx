function SearchBar() {
    return (
        <form className="mt-5">
            {/* <label htmlFor="searchAccount">Search</label> */}
            <input
                className="bg-gray-100 p-2 rounded-2xl w-96"
                type="text"
                id="searchAccount"
                placeholder="Search Account..."
            />
        </form>
    )
}

export default SearchBar
