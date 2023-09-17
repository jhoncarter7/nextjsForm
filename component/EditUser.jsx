"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const EditUser = ({firstName, lastname, emailId, mobile, address1, address2, state, country, zipCode, id}) => {
    const [FirstName, setFirtsName] = useState(firstName);
  const [lastName, setLastName] = useState(lastname);
  const [EmailId, setEmailId] = useState(emailId);
  const [Mobile, setMobile] = useState(mobile);
  const [Address1, setAddress1] = useState(address1);
  const [Address2, setAddress2] = useState(address2);
  const [State, setState] = useState(state);
  const [Country, setCountry] = useState(country);
  const [ZipCode, setZipCode] = useState(zipCode);

  const router = useRouter();

  // *************************************
  const updateuser = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://nextjs-form-qr9ww5oki-jhoncarter7.vercel.app/api/list/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          FirstName,
          lastName,
          EmailId,
          Mobile,
          Address1,
          Address2,
          State,
          Country,
          ZipCode,
        }),
      });
      if (!res.ok) {
        throw new Error("failed to update single user");
      }
      router.refresh()
      router.push("/");
    } catch (error) {}
  };
  return (
    <form
    onSubmit={updateuser}
    className="flex flex-col gap-4 max-w-xl px-5"
    style={{ width: "30rem" }}
  >
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg text-black rounded-md shadow-md"
      type="text"
      placeholder="First Name"
      min={5}
      onChange={(e) => setFirtsName(e.target.value)}
      value={FirstName}
      required
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="text"
      placeholder="Last Name"
      min={2}
      onChange={(e) => setLastName(e.target.value)}
      value={lastName}
      required
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="email"
      placeholder="Last Name"
      min={2}
      onChange={(e) => setEmailId(e.target.value)}
      value={EmailId}
      required
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="number"
      placeholder="Mobile"
      onChange={(e) => setMobile(e.target.value)}
      value={Mobile}
      required
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="manda"
      placeholder="Address-1"
      onChange={(e) => setAddress1(e.target.value)}
      value={Address1}
      required
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="text"
      placeholder="Address-2"
      onChange={(e) => setAddress2(e.target.value)}
      value={Address2}
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="text"
      placeholder="state"
      onChange={(e) => setState(e.target.value)}
      value={State}
      required
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="text"
      placeholder="country"
      onChange={(e) => setCountry(e.target.value)}
      value={Country}
      required
    />
    <input
      className="border px-8 py-2 border-slate-600 w-full max-w-lg  text-black rounded-md shadow-md"
      type="number"
      placeholder="zip"
      onChange={(e) => setZipCode(e.target.value)}
      value={ZipCode}
      required
    />
    <button
      type="submit"
      className='"bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-green-700 bg-red-500 transition'
    >
      Update user
    </button>
  </form>
  )
}

export default EditUser