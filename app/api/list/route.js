import {mongoDBConnection} from "@/lib/database";
import UserDetails from "@/model/schema";
import { NextResponse } from "next/server";

// Create a new user
export async function POST(request) {
  try {
    const {
      FirstName,
      lastName,
      EmailId,
      Mobile,
      Address1,
      Address2,
      State,
      Country,
      ZipCode,
    } = await request.json();
    await mongoDBConnection();

    // Create a new user with the provided data
    await UserDetails.create({
      FirstName,
      lastName,
      EmailId,
      Mobile,
      Address1,
      Address2,
      State,
      Country,
      ZipCode,
    });

    // Return a success response
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    // Handle errors gracefully and return an error response
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

// Get a list of users
export async function GET() {
  try {
    await mongoDBConnection();

    // Find all user details in the database
    const userdetails = await UserDetails.find();

    // Return the list of users as JSON
    return NextResponse.json({ userdetails });
  } catch (error) {
    // Handle errors gracefully and return an error response
    return NextResponse.json({ error: "Failed to fetch user details" }, { status: 500 });
  }
}

// Delete a user by ID
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await mongoDBConnection();

    // Find and delete the user by ID
    await UserDetails.findByIdAndDelete(id);

    // Return a success response
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    // Handle errors gracefully and return an error response
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
