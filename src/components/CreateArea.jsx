import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.addNote} >
        <input onChange={props.inputTitle} name="title" placeholder="Title" value={props.addTitle}/>
        <textarea onChange={props.inputContent} name="content" placeholder="Take a note..." rows="3" value={props.addContent}/>
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
