import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();
  await connectDB();
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("Success Register Account", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
