import "./App.css";
import { useState, useEffect } from "react";
import NewList from "./component/NewList";
import ToDoList from "./component/ToDoList";

function App() {
  let [listToDo, setListToDo] = useState([]);

  let addList = (inputText) => {
    setListToDo([...listToDo,inputText])
  }

  const deleteListIteam = (key) => {
      let newList = [...listToDo];
      newList.splice(key, 1);
      setListToDo([...newList]);
  }

  return (
    <>
        <div id="wrapper">
            <div className="to-do-list">
                <NewList addList={addList}></NewList>

                <div className="list">
                        {listToDo.map((listItem, i) => {
                        return(
                            <ToDoList key={i} item={listItem} index = {i} deleteItem = {deleteListIteam}></ToDoList>
                        );
                    })}

                    <br />
                </div>

            </div>
        </div>
    </>
  );
}

export default App;
