export default function RegisterPage() {
  return (
    <section className="flex flex-col gap-4 bg-white p-4 rounded-md">
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          className="w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-red-200"
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          className="w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-red-200"
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="text"
          className="w-full border bg-gray-100 outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-red-200"
        />
      </div>
      <button className="bg-red-400 px-3 py-1.5 rounded-md font-semibold">
        Sign Up
      </button>
    </section>
  );
}
