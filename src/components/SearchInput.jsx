import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

SearchInput.propTypes = {

};

function SearchInput(props) {

    const [searchValue, setSearchValue] = useState("");
    // console.log(searchValue)

    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value)
        // console.log(searchValue)
    }
    const searchAPI = async (e) => {
        // e.preventDefault()
        //
        try {
            const response = await axios({
                method: 'GET',
                url: `http://localhost:8080/api/product/searchProduct/${searchValue}`,
            })
            console.log(response)
        } catch (error) {
            console.log("---err", error)
        }
    }
    useEffect(() => {
        searchAPI();
    }, [])

    return (
        <div>
            <div className="header-center">
                <div className="header-search header-search-extended header-search-visible header-search-no-round">
                    <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                    <form>
                        <div className="header-search-wrapper search-wrapper-wide">
                            <label htmlFor="q" className="sr-only">Search</label>
                            <input onChange={handleChangeSearch} type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />

                            <button onClick={() => { searchAPI() }} className="btn btn-primary"><i className="icon-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchInput;