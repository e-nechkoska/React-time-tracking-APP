import React from "react";

interface Props {
  name: string;
  description: string;
}

export function ProjectComponent(props: Props) {
  return (
    <li>
      <span>{props.name}</span>
      <div>{props.description}</div>
      <button type="button">Edit</button>
      <button type="button">Delete</button>
    </li>
  );
}