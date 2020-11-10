import React from "react";
import { Time } from "../models/Time";

interface Props extends Time {
  deleteTime: (id: string) => void;
}

export const TimeComponent = (props: Props) => {
  return (
    <li> 
      <span> Description: {props.description} </span>
      <span> Amount: {props.amount} </span>
      <div>
        <button 
          type="button"
          onClick={() => props.deleteTime(props.id)}
        >Delete</button>
      </div>
    </li>
  )
}