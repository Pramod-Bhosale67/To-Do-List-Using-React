import React from "react";
import App from "../App";

function ToDoList(props){
    return(
        <div className="container">
                <li className="list-item">

                {props.item}

                <span className="icons">
                    <i className="fa-solid fa-trash delete" onClick={eve => {
                        props.deleteItem(props.index);
                    }}></i>
                </span>
                </li>
        </div>
    );
}

export default ToDoList;