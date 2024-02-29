import { getBlog } from '~/models/blogs.server'
import { useLoaderData } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers.js"

export function meta({ data }) {

  if (!data) {
    return {
      title: 'Blog no encontrada',
    }
  }
  return [
    { title: `GuitarLA-${data.data[0].attributes.titulo}` }
  ]
}


export async function loader({ params }) {
  const { url } = params;
  const post = await getBlog(url)
  if (!post.data || post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: "Post no encontrado"
    })
  }


  console.log(url)

  return post
}

function Posts() {
  const post = useLoaderData()
  console.log(post)
  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes

  return (
    <article className=' post'>
      <img className="imagen mt-3" src={imagen.data.attributes.url} alt="Imagen del post" />
      <div className='contenido '>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <h3 className='titulo'>{titulo}</h3>
        <p className='texto'>{contenido[0]?.children[0]?.text}</p>
      </div>
    </article>
  )
}

export default Posts
