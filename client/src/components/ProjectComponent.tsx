import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  description: string;
  deleteProject: (id: string) => void;
  updateProject: (id: string) => void;
}

export const ProjectComponent = (props: Props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td><Link className="link" to={`/project/${props.id}`}>View</Link></td>
      <td><button 
        className="btn"
        type="button"
        onClick={() => props.updateProject(props.id)}>Edit</button></td>
      <td><button 
        className="btn"
        type="button"
        onClick={() => props.deleteProject(props.id)}>Delete</button></td>
    </tr>
  );
}