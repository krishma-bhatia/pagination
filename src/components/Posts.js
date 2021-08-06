import React from 'react'

const Posts = (props) => {
    const loading = props.loading;
    if(loading)
    { return (
        <h2>Loading...</h2>
    );
    }
    const posts=props.posts;
    return (
        
        <ul className="list-group">
            {
                posts.map((post)=>{
                    return <li className="list-group-item" key={post.id}>
                        <h2>{post.title}</h2>
                    </li>
                })
            }

        </ul>
    )
}

export default Posts;
