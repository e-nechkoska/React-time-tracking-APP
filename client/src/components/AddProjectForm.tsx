import React, { ChangeEvent, useEffect, useState } from "react";
import ProjectState from "../pages/HomePage";

interface Props {
  project: ProjectState;
  addProject: ( name: string, description: string) => void;  
  editProject: ( name: string, description: string) => void;
}

export const AddProjectForm = (props: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(props.project.name);
    setDescription(props.project.description);
  }, [props]);

  const inputHandleChange = (event: ChangeEvent<{value: string}>) => {
    setName(event.target.value);
  }

  const textAreaHandleChange = (event: ChangeEvent<{value: string}>) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!props.project.id) {
      if(name.length > 0 && description.length > 0) {
        props.addProject(name, description);
      }
    } else {
      props.editProject(name, description);
    }
  }

  return(
    <form className="project-form" onSubmit={handleSubmit}>
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
        <button className="btn" type="submit">{props.project.id ? "Save" : "Add"}</button>
      </div>
    </form>
  );
}