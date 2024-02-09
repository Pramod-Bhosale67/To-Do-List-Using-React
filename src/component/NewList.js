import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ToDoList from "./ToDoList";
import App from "../App";

function NewList(props){

    const [inputText, setInputText] = useState('');

    const enterHandler = (eve) => {
        if (eve.keyCode === 13){
            props.addList(inputText);
            setInputText('');
        }
    }

    return(
    <> 
            <div className="content">
                <h2 className="heading">TO DO LIST</h2>

                
                <div className="add-to-do">
                    <input type="text" value={inputText} className="input" placeholder="New TO DO" onChange={ev => {
                        
                        setInputText(ev.target.value)
                    }}/>
                    <button className="btn" onClick={() =>{
                        if (inputText === ''){
                            alert("Please enter the text");
                            return;
                        }   
                        props.addList(inputText);
                        setInputText('');
                    }}
                    
                    onKeyDown={enterHandler}
                    >ADD TODO</button>

                </div>
                
                <div className="heding-line">
                    <h2 className="list-heading">TO DO</h2>
                    <hr className="line" />
                </div>                    
            </div>
        </>
    );
}

export default NewList;