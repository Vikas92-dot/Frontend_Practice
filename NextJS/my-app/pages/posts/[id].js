import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href="/">Go back to homepage</Link>
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const res = await fetch(
        `https://dummyjson.com/posts/${params.id}`
    );
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

export default Post;