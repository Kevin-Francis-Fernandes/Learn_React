import "../styles/Button.css"
function Button(){

    let count = 0;
    const handleClick1 = () => { console.log("Hello"); };

    //when function has parameters use arrow function to pass to function to the handler
    const  handleClick2 = (message) => ()=>{console.log(message)}; 
    
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me! `);
        }
    }
    //changing when clicked 
    const handleClick = (e) => e.target.textContent = "hi";
    

    return (
        <>
            <button onClick={(e)=>handleClick(e)} className='button'>Click Me</button>
        </>
    );
}

export default Button