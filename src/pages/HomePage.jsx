import { useEffect, useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import axios from 'axios';

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5555/todo', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <section className="flex flex-col gap-4">
      <Form />
      <List todos={todos} />
    </section>
  );
}
