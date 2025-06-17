const fetchData = ({posts})=>{
    console.log(posts);
    
    return<>

        <h1>Data fetch</h1>
            <ul>
                {posts.map((post)=>(
                    <>
                    <li key={post.id}>{post.id}</li>
                    <li>{post.title}</li>
                    <li>{post.userId}</li>
                    </>
                ))}
            </ul>
            
    </>
}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const posts = await res.json()

    return{
        props:{
            posts,
        }
    }
}

export default fetchData;