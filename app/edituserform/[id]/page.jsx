'use client'
import EditUser from "@/component/EditUser";
import React, { useEffect, useState } from "react";

const EditUserdetail = ({ params }) => {
  const { id } = params;

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch products on load
    const fetchSingleUser = async () => {
      try {
        const response = await fetch(`/api/list/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const userData = await response.json();
        setUser(userData.userdetails);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchSingleUser();
  }, [id]);

  if (!user) {
    // You might want to add a loading indicator here while user data is being fetched
    return <div>Loading...</div>;
  }

  const { FirstName, lastName, EmailId, Mobile, Address1, Address2, State, Country, ZipCode } = user;

  return (
    <div className="flex flex-grow justify-center py-10">
      <EditUser
        id={id}
        firstName={FirstName}
        lastname={lastName}
        emailId={EmailId}
        mobile={Mobile}
        address1={Address1}
        address2={Address2}
        state={State}
        country={Country}
        zipCode={ZipCode}
      />
    </div>
  );
};

export default EditUserdetail;
