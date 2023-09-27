import { useState } from 'react';
import Joi from 'Joi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).alphanum().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

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
        console.log(error.details);
        nextError[item.path[0]] = item.message;
      }
      return setError(nextError);
    }
    setError({ username: '', password: '', confirmPassword: '' });

    setIsLoading(true);

    axios
      .post('http://localhost:5555/auth/register', {
        username,
        password,
        confirmPassword,
      })
      .then((res) => {
        window.alert('SUCCESS REGISTRATION');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
          className={`w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.username ? 'border-red-700' : 'focus:ring-gray-500'
          }`}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
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
          type="text"
          className={`w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.password ? 'border-red-700' : 'focus:ring-gray-500'
          }`}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error.password && (
          <span className="text-red-600 text-xs">{error.password}</span>
        )}
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="text"
          className={`w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            error.username ? 'border-red-700' : 'focus:ring-gray-500'
          }`}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {error.confirmPassword && (
          <span className="text-red-600 text-xs">{error.confirmPassword}</span>
        )}
      </div>
      <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
        Sign Up
      </button>
    </form>
  );
}
