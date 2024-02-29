import { getGuitarras } from '~/models/guitarras.server'
import { getBlogs } from '~/models/blogs.server'
import { getCurso } from '~/models/curso.server'
import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoBlogs from "~/components/listado-blogs"
import Curso from "~/components/curso"
import styleGuitarras from "~/style/guitarras.css"
import styleBlogs from "~/style/blogs.css"
import styleCurso from "~/style/curso.css"

export function meta() {

}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleGuitarras
    },
    {
      rel: 'stylesheet',
      href: styleBlogs
    },
    {
      rel: 'stylesheet',
      href: styleCurso
    }
  ]
}

export async function loader() {

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(), getBlogs(), getCurso()
  ])
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData()
  return (
    <>
      <main className='contenedor'>

        <ListadoGuitarras
          guitarras={guitarras}
        >
        </ListadoGuitarras>

      </main>

      <Curso
        curso={curso.attributes}
      ></Curso>
      <section className='contenedor'>
        <ListadoBlogs
          posts={posts}
        ></ListadoBlogs>
      </section>
    </>
  )
}

export default Index
