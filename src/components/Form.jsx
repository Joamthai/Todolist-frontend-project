export default function Form() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="outline-none px-3 py-1.5 border rounded-md bg-gray-100 flex-grow"
      />
      <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
        Create
      </button>
    </div>
  );
}
