import { useState } from 'react';
import Joi from 'Joi';

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).alphanum().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const { value, error } = schema.validate(
      {
        username,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    );
    if (error) {
      const nextError = {
        username: '',
        password: '',
        confirmPassword: '',
      };
      for (let item of error.details) {
        nextError[item.path[0]] = item.message;
      }
      return setError(nextError);
    }
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
          className="w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-red-200"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          className="w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-red-200"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="text"
          className="w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-red-200"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
        Sign Up
      </button>
    </form>
  );
}
