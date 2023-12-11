"use client"
import React from "react";
import Link from "next/link";
const PostCard = ({post}:{post:{id:number;title:string;body:string}}) => {

  return (
    <Link href={`/posts/${post.id}`} >
    <div className="border px-2" key={post.id} >
      
      <h3 className="border-b   border-zinc-900/70  p-2 text-sm">{post.title}</h3>
      <p className="text-xs p-2">{post.body}</p>
    </div>
    </Link>
  );
};

export default PostCard;
