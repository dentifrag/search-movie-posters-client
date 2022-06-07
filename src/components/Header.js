import React from "react";
import {useState} from "react";

const Header = () => {
    const [title, setTitle] = useState('');
    return (
        <div id="header">
            <div className="inputting">
                <a className="headers" id="home-link" href="/">Search Movie Posters</a>
                <p className="headers" id="slogan">A simple way to get your high quality movie posters</p>

                <form id='form' method={'GET'} action={'/search'}>
                    <input id="search-box" type="text" placeholder='Search for any movie' name="movie" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button id='search-btn'>Search</button>
                </form>
        </div>
        </div>
    )
}

export default Header