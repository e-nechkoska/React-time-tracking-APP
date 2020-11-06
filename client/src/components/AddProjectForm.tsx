import React, { useState } from "react";

interface Props {
  addProject: ( name: string, description: string) => void;  
}

export function AddProjectForm(props: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function inputHandleChange(event: any): any {
    setName(event.target.value);
  }

  function textAreaHandleChange(event: any) {
    setDescription(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if(name.length > 0 && description.length > 0) {
      props.addProject(name, description);
      setName("");
      setDescription("");
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-project">
        Add new project
      </label>
      <div>
        <input 
          type="text" 
          id="new-project" 
          placeholder="Project name:" 
          value={name}
          onChange={inputHandleChange} 
        />
      </div>
      <div>
        <textarea 
          className="project-description" 
          placeholder="Project description:" 
          value={description}
          onChange={textAreaHandleChange}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}