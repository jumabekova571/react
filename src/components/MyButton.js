import React from "react";

const MyButton = ({text}) => {
    const user = {
        name:'Test',
        surname:'Testov',
        age:77,
    }

    const {name, surname} = user;

    console.log(name);
    console.log(surname);

    return (
        <button>{text}</button>
    )

}

export default MyButton;