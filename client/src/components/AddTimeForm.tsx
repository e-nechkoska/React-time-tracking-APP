import React, { KeyboardEventHandler, useState } from "react";

interface Props {
  addTime: (description: string, amount: number) => void;
}

export const AddTimeForm = (props: Props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const textAreaHandleChange = (event: any) => {
    setDescription(event.target.value);
  }

  const inputHandleChange = (event: any) => {
    setAmount(Number(event.target.value));
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(description.length > 0 && amount > 0) {
      props.addTime(description, amount);
    }
    setDescription("");
    setAmount(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new time</h2>
      <div>
        <textarea 
          placeholder="Description: "
          value={description}
          onChange={textAreaHandleChange}
        ></textarea>
      </div>
      <div>
        <input 
          type="text"
          placeholder="Amount: "
          value={amount}
          onChange={inputHandleChange}
        ></input>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}