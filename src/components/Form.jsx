import axios from 'axios';
import { useState } from 'react';

export default function Form({ setTodos }) {
  const [input, setInput] = useState('');
  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:5555/todo',
        { title: input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      .then((res) => {
        console.log('SUCCESS');
        setInput('');
        // axios
        //   .get('http://localhost:5555/todo', {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        //     },
        //   })
        //   .then((res) => {
        //     setTodos(res.data);
        //   })
        //   .catch((err) => console.log(err));
        setTodos((prev) => [...prev, res.data.todo]);
      })
      .catch((error) => console.log(error));
  };
  return (
    <form className="flex gap-2" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="outline-none px-3 py-1.5 border rounded-md bg-gray-100 flex-grow"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
        Create
      </button>
    </form>
  );
}
