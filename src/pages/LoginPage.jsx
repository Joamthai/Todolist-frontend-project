import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Joi from 'Joi';

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).alphanum().required(),
});

export default function LoginPage() {
  const [input, setInput] = useState({ username: '', password: '' });
  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const ctx = useContext(AuthContext); // {user, setUser}
  const [error, setError] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const { error } = schema.validate(input, { abortEarly: false });
    if (error) {
      const nextError = error;
      console.log(error.details);
      for (let item of error.details) {
        nextError[item.path[0]] = item.message;
      }
      return setError(nextError);
    }
    setError(input);

    axios
      .post('http://localhost:5555/auth/login', input)
      .then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        ctx.setUser(true);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert('LOGIN FAILED');
      });
  };
  return (
    <form
      className="flex flex-col gap-4 bg-white p-4 rounded-md"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          name="username"
          className={`w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.username
              ? 'border-red-700 focus:ring-red-500'
              : 'focus:ring-gray-500'
          } `}
          value={input.username}
          onChange={handleChangeInput}
        />
        {error.username && (
          <span className="text-red-600 text-xs">{error.username}</span>
        )}
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          className={`w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.password
              ? 'border-red-700 focus:ring-red-500'
              : 'focus:ring-gray-500'
          }`}
          value={input.password}
          onChange={handleChangeInput}
        />
        {error.password && (
          <span className="text-red-600 text-xs">{error.password}</span>
        )}
      </div>
      <div> </div>
      <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
        Login
      </button>
    </form>
  );
}
