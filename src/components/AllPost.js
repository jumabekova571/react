import React from 'react';
import Post1 from "./Post1";
import Post2 from "./Post2";
import About from "./About";
import Posts from "./Posts";
const AllPostt = () => {
    return (
    <>
        <div className="w3-col l8 s12">
            <Post1/>
            <Post2/>
        </div>
        <div className="w3-col l4">
            <About/>
        </div>
        <div className="w3-card w3-margin">
            <Posts/>
        </div>
     </>
    );
};

export default AllPostt;