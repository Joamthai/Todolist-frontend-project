import { useState } from 'react';
import Joi from 'Joi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const schema = Joi.object({
//   username: Joi.string().min().max(30).required(),
//   password: Joi.string().min().max(6).alphanum().required(),
// });

export default function LoginPage() {
  const [input, setInput] = useState({ username: '', password: '' });
  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  // const [error, setError] = useState(input);
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // if (error) {
    //   const nextError = input;
    //   console.log(nextError);
    //   for (let item of error.details) {
    //     // console.log(error.details);
    //     // nextError[item.path[0]] = item.message;
    //   }
    //   return setError(nextError);
    // }
    // setError(input);

    axios
      .post('http://localhost:5555/auth/login', input)
      .then((res) => {
        console.log(res.data.accessToken);
        localStorage.setItem('accessToken', res.data.accessToken);
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
          className={`w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 `}
          value={input.username}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          name="password"
          className={`w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 `}
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <div> </div>
      <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
        Login
      </button>
    </form>
  );
}
