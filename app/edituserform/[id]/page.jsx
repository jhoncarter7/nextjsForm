
import EditUser from "@/component/EditUser";
import React from "react";

const getSingleUser = async (id) => {
  try {
    const res = await fetch(`https://nextjs-form-qr9ww5oki-jhoncarter7.vercel.app/api/list/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch single user");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditUserdetail = async ({ params }) => {
  const { id } = params;
  
  // ***************************************
  const { userdetails } = await getSingleUser(id);

  const {FirstName, lastName, EmailId, Mobile, Address1, Address2, State, Country, ZipCode} = userdetails;

// ***************************************************
  return (
    <div className="flex flex-grow justify-center py-10 ">
     <EditUser id={id} firstName={FirstName} lastname={lastName} emailId={EmailId} mobile={Mobile} address1={Address1} address2={Address2} state={State} country={Country} zipCode={ZipCode} />
    </div>
  );
};

export default EditUserdetail;
