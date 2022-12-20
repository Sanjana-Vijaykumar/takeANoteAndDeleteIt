import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);
  // const [dataItem,dataItemSet] = useState([]);

  function addNote(note) {
    setNote((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteData(dataId) {
    setNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== dataId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            dataId={index}
            title={item.title}
            content={item.content}
            delete={deleteData}
          />
        );
      })}
      {/* <button onClick={deleteData}>DELETE</button> */}
      <Footer />
    </div>
  );
}

export default App;
