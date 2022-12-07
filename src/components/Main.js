import React from 'react';
import About from "./About";
import PopularPosts from "./PopularPosts";
import Tags from './Tags';
import Post from './Post';

const tags = [
    'Travel',
    'York',
    'London',
    'IKEA',
    'NORWAY',
    'DIY',
    'Ideas',
    'Baby',
    'Family',
    'News',
    'Clothing',
    'Shopping',
    'Sports',
    'Games',
];

const Main = () => {
    return (
        <div className="w3-row">
            <div className="w3-col l8 s12">
                <Post
                    title="TITLE HEADING"
                    imageUrl={"https://www.w3schools.com/w3images/woods.jpg"}
                    subTitle={"Title description"}
                    date={"April 7, 2014"}
                    text={"Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
                    commentsCount={"0"}
                />
                <Post
                    title="BLOG ENTRY"
                    imageUrl={"https://www.w3schools.com/w3images/bridge.jpg"}
                    subTitle={"Title description"}
                    date={"April 2, 2014"}
                    text={"Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
                    commentsCount={"2"}
                />
            </div>
            <div className="w3-col l4">
                <About />
                <PopularPosts />
                <Tags tags={tags} />
            </div>
        </div>
    );
};

export default Main;