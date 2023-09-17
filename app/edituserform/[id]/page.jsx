import React from 'react'

const page = () => {
  return (
<div className='flex flex-grow justify-center py-10 '>
      <form action='' className='flex flex-col gap-4 max-w-xl px-5' style={{width:'30rem'}}>
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg text-black rounded-md shadow-md'
          type='text'
          placeholder='First Name'
          min={5}
          required
        />
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md'
          type='text'
          placeholder='Last Name'
          min={2}
          required
        />
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md'
          type='number'
          placeholder='Mobile'
          required
        />
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md'
          type='manda'
          placeholder='Address-1'
          required
        />
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md'
          type='text'
          placeholder='Address-2'
        />
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md'
          type='text'
          placeholder='state'
          required
        />
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md'
          type='text'
          placeholder='country'
          required
        />
        <input
          className='border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md'
          type='number'
          placeholder='zip'
          required
        />
        <button className='"bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-green-700 bg-red-500 transition'>Update user</button>
      </form>
    </div>
  );
  
}

export default page