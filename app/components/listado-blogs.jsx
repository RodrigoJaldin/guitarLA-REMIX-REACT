import Post from "./posts"

function ListadoBlogs({posts}) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {
          posts.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            ></Post>
          ))
        }
      </div>
    </>
  )
}

export default ListadoBlogs
