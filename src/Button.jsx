function Button() {

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} cyou clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "OUCH";

    return (
        <button onDoubleClick={(e)=> handleClick(e)}>Click me!</button>
        // <button className="Button" onClick={() => handleClick("Nadika")}>Click me </button> //Prevent to call function straight away
    );

}

export default Button;