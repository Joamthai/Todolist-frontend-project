import Item from './Item';

export default function List({ todos }) {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
