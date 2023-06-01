import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { increment } from '../features/counter/productsSlice';
import { useNavigate } from 'react-router-dom';

SearchInput.propTypes = {

};

function SearchInput() {

    const [searchValue, setSearchValue] = useState("");
    console.log(searchValue)

    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value)
        // console.log(searchValue)
    }


    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault()
        navigate(`/productList/search/${searchValue}`, { replace: true });
    }
    // useEffect(() => {
    //     if (searchValue !== "") {
    //         navigate(`/productList/search/${searchValue}`, { replace: true });
    //     }
    // }, [searchValue]);

    return (
        <div>
            <div className="header-center">
                <div className="header-search header-search-extended header-search-visible header-search-no-round">
                    <a className="search-toggle" role="button"><i className="icon-search"></i></a>
                    <form onSubmit={(e) => { handleNavigate(e) }}>
                        <div className="header-search-wrapper search-wrapper-wide">
                            {/* <label htmlFor="q" className="sr-only">Search</label> */}
                            {/* <input onChange={handleChangeSearch} type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required /> */}
                            <input onChange={handleChangeSearch} type="text" className="form-control" />
                            <button type="submit" className="btn btn-primary"><i className="icon-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchInput;