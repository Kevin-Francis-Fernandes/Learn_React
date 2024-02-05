import "../styles/Button.css"
function Button(){
    const handleClick = () => { console.log("Hello"); };
    

    //when function has parameters use arrow function to pass to function to the handler
    const  handleClick2 = (message) => ()=>{console.log(message)}; 
    
    return (
        <>
            <button onClick={handleClick2("Kevin")} className='button'>Click Me</button>
        </>
    );
}

export default Button