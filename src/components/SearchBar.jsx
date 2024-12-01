import React, {useState} from "react";

const SearchBar = (props) =>{
    const {onSearch} = props;
    const [filters, setFilters] = useState({
        search: "",
        category: ""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFilters(prevFilters => ({...prevFilters, [name]: value}));
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        onSearch(filters);
    }


    return(
        <form onSubmit={handleSearch} className="mb-4 border p-3 rounded border-secondary">
            <div className="row">
                <div className="col-md-6 mb-2">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Search by title"
                        name="search"
                        value={filters.search}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 mb-2">
                    <select
                        className="form-control"
                        name="category"
                        value={filters.category}
                        onChange={handleChange}
                    >
                        <option value="">All Categories</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="col-md-2 mt-2">
                    <button type="submit" className="btn btn-primary w-100">Apply Filters</button>
                </div>
            </div>
        </form>
    )
}

export default SearchBar