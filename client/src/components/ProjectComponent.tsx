import React from "react";

interface Props {
  id: string;
  name: string;
  description: string;
  deleteProject: (id: string) => void;
  updateProject: (id: string) => void;
}

export const ProjectComponent = (props: Props) => {
  return (
    <li>
      <span>{props.name}</span>
      <div>{props.description}</div>
      <button 
        type="button"
        onClick={() => props.updateProject(props.id)}>Edit</button>
      <button 
        type="button"
        onClick={() => props.deleteProject(props.id)}>Delete</button>
    </li>
  );
}