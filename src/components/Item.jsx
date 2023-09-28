export default function Item({ todo }) {
  return (
    <li className="flex justify-between items-center border px-3 py-4 bg-gray-50">
      <span>{todo.title}</span>
      <div className="flex gap-2">
        <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
          Edit
        </button>
        <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
          Delete
        </button>
      </div>
    </li>
  );
}
