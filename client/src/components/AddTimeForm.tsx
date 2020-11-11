import React, { ChangeEvent, useState } from "react";

interface Props {
  addTime: (description: string, amount: number) => void;
}

export const AddTimeForm = (props: Props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const textAreaHandleChange = (event: ChangeEvent<{value: string}>) => {
    setDescription(event.target.value);
  }

  const inputHandleChange = (event: ChangeEvent<{value: string}>) => {
    setAmount(Number(event.target.value));
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(description.length > 0 && amount > 0) {
      props.addTime(description, amount);
    }
    setDescription("");
    setAmount(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Add new time</span>
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