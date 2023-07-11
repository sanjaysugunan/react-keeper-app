import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [notes, addNotes] = useState([]);

  function editNote(event){
    const {value, name} = event.target;
    setNote((prevNote)=>{
        return {
          ...prevNote,
          [name]: value
        }
      
    });
  }

  function addNote(event){
    event.preventDefault();

    addNotes((prevNotes)=>{
      return [...prevNotes, note];
    });
    setNote({
      title: "",
      content: ""
    });
  }

  function deleteNote(id){
    addNotes((prevNote)=>{
      return prevNote.filter((item,index)=>{
        return index!=id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
       inputTitle={editNote}
       inputContent={editNote}
       addNote={addNote}
       addTitle={note.title}
       addContent={note.content} 
       />
      {notes.map((newNote, index)=>{
        return (
          <Note
           key={index}
           id={index}
           delete={deleteNote}
           title={newNote.title} 
           content={newNote.content} 
           />)
      })}

      <Footer />
    </div>
  );
}

export default App;
