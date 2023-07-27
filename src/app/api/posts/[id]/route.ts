import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async ({ params }: any) => {
  const { id } = params;
  try {
    await connectDB();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Server Error", { status: 500 });
  }
};
export const DELETE = async ({ params }: any) => {
  const { id } = params;
  try {
    await connectDB();
    await Post.findByIdAndDelete(id);
    return new NextResponse("Success Delete Post", { status: 200 });
  } catch (error) {
    return new NextResponse("Server Error", { status: 500 });
  }
};
