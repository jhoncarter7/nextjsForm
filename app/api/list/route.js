
import mongoDBConnection from "@/lib/database";
import UserDetails from "@/model/schema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { FirstName, lastName, EmailId, Mobile, Address1, Address2, State, Country, ZipCode }  = await request.json();
  await mongoDBConnection();

  await UserDetails.create({ FirstName, lastName, EmailId, Mobile, Address1, Address2, State, Country, ZipCode } );
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET () {
    await mongoDBConnection()
   const userdetails = await UserDetails.find()
    return NextResponse.json({userdetails})
}

export async function DELETE (request){
 const id = request.nextUrl.searchParams.get("id")
await mongoDBConnection()
await UserDetails.findByIdAndDelete(id)
return NextResponse.json({message:"user deleted" }, {status: "200"})
}