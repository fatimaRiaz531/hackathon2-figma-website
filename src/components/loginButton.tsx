import React from 'react';

const LoginButtons = () => {
  return (
    <div className="flex gap-4">
      <h4 className=" hover:bg-black text-blue-400 font-bold py-2 px-4 rounded">
        Login
      </h4>
      <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
        Become a member
        <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default LoginButtons;