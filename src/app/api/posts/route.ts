import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connectDB();
    const posts = await Post.find(username ? { username } : {});
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Server Error", { status: 500 });
  }
};
export const POST = async (request: any) => {
  const body = await request.json();
  const newPost = new Post(body);
  try {
    await connectDB();
    await newPost.save();
    return new NextResponse("Success Create Post", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
