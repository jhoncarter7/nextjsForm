'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { User } from "./User";
import RemoveBtn from "./RemoveBtn";




const UserList =  () => {

const [userlist, setUserlist] = useState(null)
  useEffect(() => {
    // Fetch products on load 
    const fetchProducts = async () => {
      const response = await fetch('/api/list')
      let rjson = await response.json()
      setUserlist(rjson.userdetails)
    }
    fetchProducts()
  }, [])


 

  return (
    <div className="text-white w-3/4 flex flex-col gap-4 ">

{userlist?.map((ud)=> (

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
