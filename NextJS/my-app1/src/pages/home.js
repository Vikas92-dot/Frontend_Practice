import React from 'react'
import Layout from '@/Components/Layout'

const Home = async () => {
    await new Promise((resolved)=>{
        setTimeout(resolved,2000);
    })
    return (
        <Layout >
            <div className="container mt-2">
                <h3>Welcomo to My Application</h3>
                <div>This is <b>Home</b> page</div>
            </div>
        </Layout>
    )
}
export default Home;