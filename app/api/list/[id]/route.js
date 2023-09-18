import {mongoDBConnection} from "@/lib/database"
import UserDetails from "@/model/schema"
import { NextResponse } from "next/server"

export async function PUT (request, {params}){
 const {id} = params
 const {FirstName, lastName, EmailId, Mobile, Address1, Address2, State, Country, ZipCode } = await request.json()
 await mongoDBConnection()
 await UserDetails.findByIdAndUpdate(id, {FirstName, lastName, EmailId, Mobile, Address1, Address2, State, Country, ZipCode })
 return NextResponse.json({message:"user updated"}, {status: 200})
}

export async function GET (request, {params}) {
const {id} = params;
await mongoDBConnection();
const userdetails = await UserDetails.findOne({_id: id})
return NextResponse.json({userdetails}, {status: 200})
}