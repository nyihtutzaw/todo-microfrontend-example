import { useState } from "react";
import { TextBox, Button } from "ui/components";

function FormContainer({ onCreateTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      setTask("");
      onCreateTask(task);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-4">
      <div className="w-full">
        <TextBox
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
      </div>
      <div className="w-[80px]">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}

export default FormContainer;
