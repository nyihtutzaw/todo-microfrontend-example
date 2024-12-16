
import { ListItem } from "ui/components"

function ListContainer({todos}) {
  return (
    <div>
        <ul className="">
          {
            todos.map((todo)=>(
              <ListItem key={todo.id}>{todo.text}</ListItem>
            ))
          }
        </ul>
    </div>
  )
}

export default ListContainer