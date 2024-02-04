import "../styles/Student.css"
import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
        </div>
    );
    
}
Student.propTypes={
    age : PropTypes.number
}

export default Student