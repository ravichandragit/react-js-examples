import React from 'react';

const Person = (props) => {
        // return (<p> I am Person! and I am {Math.floor(Math.random() * 30)} years old</p>)
         return (
                <div>
                <p onClick={props.click}> I am {props.name}! and I am {props.age} years old</p>
                <p>{props.children}</p>
                </div>
                )
};

export default Person;