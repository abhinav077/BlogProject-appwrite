import React, {useEffect, useState} from 'react'
import appwriteSerive from "../appwrite/config"
import {Container, PostCard} from "../components"

function Home() {

    const [posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteSerive.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])

    if(posts.length === 0){
        return (
            <Container>
                <h1 className="text-2xl font-bold text-center mt-10">No posts found</h1>
            </Container>
        )
    }

    return(
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post}/>            
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home