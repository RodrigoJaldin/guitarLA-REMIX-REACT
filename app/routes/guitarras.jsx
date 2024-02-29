import {  Outlet } from "@remix-run/react"
import { getGuitarras } from '../models/guitarras.server'
import styles from "~/style/guitarras.css"

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Tienda = () => {

  return (
    <main className="contenedor">
            <Outlet></Outlet>
    </main>

  )
}

export default Tienda
