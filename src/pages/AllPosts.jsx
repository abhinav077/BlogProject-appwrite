import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((response) => {
            if (response) {
                setPosts(response.documents)
            }
        })
    }, [])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))}
                <h1>hi nigga</h1>
            </div>
        </Container>
    </div>
  )
}

export default AllPosts