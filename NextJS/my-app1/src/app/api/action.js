'use server'

export async function fetchData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache:'force-cache'
    }).then(res => res.json())

    return data;
}