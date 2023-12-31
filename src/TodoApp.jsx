import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoApp = (props) => {
  //a text input and a ‘add’ button
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItem, setCheckedItem] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };
  const handleButtonClick = () => {
    if (inputText !== "") {
      setInputText("");
      setTodoList([...todoList, inputText]);
    } else {
      alert("Please enter a value");
    }
  };
  const handleDelete = (todo, index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };
  const handleCheckbox = (e, index) => {
    //   console.log(e)
    const value = e.target.checked;
    setIsChecked(value);

    if (value) setCheckedItem([...checkedItem, index]);
    else {
      const newCheckedList = [...checkedItem];
      const i = newCheckedList.indexOf(index);
      newCheckedList.splice(i, 1);

      setCheckedItem(newCheckedList);
    }
  };
  return (
    <div>
      <h1>TodoApp</h1>
      <input type="text" value={inputText} onChange={handleInputChange} />

      <button onClick={handleButtonClick}>Add</button>
      <ul>
        {todoList.map((todo, index) => {
          console.log(checkedItem.indexOf(index));
          return (
            <>
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckbox(e, index)}
                />
                <p
                  style={{
                    textDecoration:
                      checkedItem.indexOf(index) != -1 ? "line-through" : "",
                  }}
                >
                  {index + 1} - {todo}
                

                  &nbsp;&nbsp;&nbsp;<button onClick={() => handleDelete(todo, index)}>
                  Delete
                </button>
                </p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;