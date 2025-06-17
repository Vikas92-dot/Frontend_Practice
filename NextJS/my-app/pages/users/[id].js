import Link from "next/link";

const Users = ({ user, posts }) => {

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <h2>Posts by {user.name}</h2>
            <ul>
                
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    const users = data.users;

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false };
}

 
export async function getStaticProps({ params }) {
    const [userRes, postRes] = await Promise.all([
        fetch(`https://dummyjson.com/users/${params.id}`),
        fetch(`https://dummyjson.com/posts?userId=${params.id}`),
    ]);

    const user = await userRes.json();
    const postsData = await postRes.json();

    return {
        props: {
            user,
            posts: postsData.posts,
        },
    };
}

export default Users;
