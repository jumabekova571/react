import React from "react";

const Title = ({color, size, text}) => {

    const titleStyle = {
        color: color,
        fontSize: size
    }

    const divStyle = {
        backgroundColor:'blue',
        textAlign: 'center'
    }

    return (
        <div className="container">
            <h1 style={titleStyle}>{text}</h1>
        </div>
        )
}

Title.defaultProps = {
    color:'yellow',
    size:'20px'
}


export default Title;