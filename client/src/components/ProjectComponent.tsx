import React from "react";

interface Props {
  id: string;
  name: string;
  description: string;
  deleteProject: (id: string) => void;
}

export function ProjectComponent(props: Props) {
  return (
    <li>
      <span>{props.name}</span>
      <div>{props.description}</div>
      <button type="button">Edit</button>
      <button 
        type="button"
        onClick={() => props.deleteProject(props.id)}>Delete</button>
    </li>
  );
}