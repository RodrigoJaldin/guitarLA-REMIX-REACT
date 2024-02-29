import { getBlogs } from "../models/blogs.server"
import { useLoaderData } from "@remix-run/react"
import ListadoBlogs from "../components/listado-blogs";

export function meta() {
    return [
        { title: 'GuitarLA - Nuestro Blog' }
    ]
}


export async function loader() {
    const posts = await getBlogs()
    return posts.data;
}
const Blog = () => {

    const posts = useLoaderData();
    return (
        <ListadoBlogs
            posts={posts}
        ></ListadoBlogs>
    )
}

export default Blog
