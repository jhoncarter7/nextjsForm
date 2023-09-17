import Link from "next/link";
import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { User } from "./User";

const getUserDetails = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/list',{
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
    <Link className="px-4" href={"/"}>
      <DeleteIcon size={24} />
    </Link>
    <Link href={"/edituserform"}>
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
