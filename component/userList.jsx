import Link from "next/link";
import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { User } from "./User";
import RemoveBtn from "./RemoveBtn";

const getUserDetails = async () => {
  try {
    const res = await fetch('https://nextjs-form-qr9ww5oki-jhoncarter7.vercel.app/api/list',{
      cache: 'no-store'
    })
    if(!res.ok){
      console.log("failed to get user details")
    }
    return res.json()
  } catch (error) {
    console.log('get details', error)
  }
}

const UserList = async () => {
  const {userdetails} = await getUserDetails()

  return (
    <div className="text-white w-3/4 flex flex-col gap-4 ">

{userdetails.map((ud)=> (

<div className="text-white w-full py-4 border px-4" key={ud._id}>
<div className="flex justify-between">
  <h2>{ud.FirstName}</h2>
  <div>
      <RemoveBtn id={ud._id} />
    <Link href={`/edituserform/${ud._id}`}>
      <EditNoteIcon size={24} />
    </Link>
  </div>
</div>
<User ud={ud} /> 
</div>

))}
      
    </div>
  );
};

export default UserList;
