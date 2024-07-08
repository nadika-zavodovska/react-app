import React, {useState} from 'react';

function MyComponent(){
    const [name, setName]= useState("Guest");
    const [age, setAge] = useState(17);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Spongebob");
    }
    const incrementAge = () => {
        setAge(27);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set age</button>
        <p>Is employes: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>

        </>
    );
}

export default MyComponent;