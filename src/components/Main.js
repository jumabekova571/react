import React from 'react';

import Post1 from "./Post1";
import Post2 from "./Post2";
import About from "./About";
import PopularPosts from "./PopularPosts";
import Tags from './Tags';

const Main = () => {
    return (
        <div className="w3-row">
            <div className="w3-col l8 s12">
                <Post1/>
                <Post2/>
            </div>
            <div className="w3-col l4">
                <About/>
                <PopularPosts/>
                <Tags/>
            </div>
        </div>
    );
};

export default Main;