import React from "react";
import { Time } from "../models/Time";

interface Props extends Time {
  deleteTime: (id: string) => void;
}

export const TimeComponent = (props: Props) => {
  return (
    <tr> 
      <td> {props.description} </td>
      <td> {props.amount} </td>
      <td>
        <button 
          type="button"
          onClick={() => props.deleteTime(props.id)}
        >Delete</button>
      </td>
    </tr>
  )
}