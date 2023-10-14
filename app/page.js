'use client';

import { experimental_useFormState as useFormState } from 'react-dom';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function Home() {
  return (
    <>
      <div className="bg-slate-600 w-full h-screen flex flex-col items-center justify-center">
        <div className="bg-slate-200 rounded shadow-lg w-[400px] h-auto p-5">
          <div className="border-b-2 border-gray-500">
            <h1 className="text-xl">To-do List</h1>
          </div>
          <div className="pt-5">
            <form>
              <input
                type="text"
                name="title"
                placeholder="What's up for today?"
                className="rounded border border-double border-slate-500 shadow-md block w-full px-5 py-2 focus:outline-pink-500 text-pink-600"
              ></input>
              <div>
                <button
                  type="submit"
                  className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
