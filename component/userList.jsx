import Link from "next/link";
import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { User } from "./user";
const UserList = () => {
  return (
    <div className="text-white w-3/4 flex flex-col gap-4 ">


      <div className="text-white w-full py-4 border px-4">
        <div className="flex justify-between">
          <h2>useName</h2>
          <div>
            <Link className="px-4" href={"/"}>
              <DeleteIcon size={24} />
            </Link>
            <Link href={"/edituserform"}>
              <EditNoteIcon size={24} />
            </Link>
          </div>
        </div>
        <User /> 
      </div>

      
    </div>
  );
};

export default UserList;
