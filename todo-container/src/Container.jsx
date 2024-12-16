import Form from "form/Form";
import List from "list/List";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "store/TodoSlice";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleCreateTask = (task) => {
    dispatch(addTodo(task));
  };

  return (
    <div className="w-full h-screen bg-blue-300 flex flex-col justify-center items-center">
      <div className="w-2/4 bg-white p-6 ">
        <div className="mb-8">
          <Form onCreateTask={handleCreateTask} />
        </div>
        <div>
          <List todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
