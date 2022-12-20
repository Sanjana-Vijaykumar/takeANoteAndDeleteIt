import React, { useState } from "react";

function CreateArea(props) {
  const [inputValue, inputSetValue] = useState({
    title: "",
    content: ""
  });
  const [data, setDataOnClick] = useState([]);
  function captureData(event) {
    const { name, value } = event.target;
    inputSetValue((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  }

  function addData(event) {
    setDataOnClick(inputValue);
    // inputSetValue("");
    inputSetValue({
      title: "",
      content: ""
    });
    props.addNote(inputValue);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={captureData}
          value={inputValue.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={captureData}
          value={inputValue.content}
        />
        <button onClick={addData}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
