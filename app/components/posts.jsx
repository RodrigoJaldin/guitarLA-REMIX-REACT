import {formatearFecha}from "~/utils/helpers"
import { Link } from "@remix-run/react"


function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post

  return (
    <article className='post'>
      <img className="imagen" src={imagen.data.attributes.formats.small.url} alt="Imagen del post" />
      <div className='contenido '>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <h3 className='titulo'>{titulo}</h3>
        <p className='resumen'>{contenido[0]?.children[0]?.text}</p>
        <Link className='enlace' to={`/blog/${url}`}>Leer BLOG</Link>
      </div>
    </article>
  )
}

export default Post
