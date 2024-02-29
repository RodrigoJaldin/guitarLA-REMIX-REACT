
import { Outlet} from "@remix-run/react"
import styles from "~/style/blogs.css"

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}


const Blog = () => {

  return (
    <main className="contenedor">
      <Outlet></Outlet>
    </main>
  )
}

export default Blog
