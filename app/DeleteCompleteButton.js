'use client';

export const DeleteCompleteButton = ({ deleteComplete }) => {
  return (
    <button
      onClick={() => deleteComplete()}
      className="text-xs border bg-slate-600 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
    >
      Delete all
    </button>
  );
};
