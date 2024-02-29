import imagen from "../../public/img/nosotros.jpg"
import styles from "../style/nosotros.css"
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}


function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading"> Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen"></img>

                <p >
                    ¡Bienvenido a nuestra tienda de guitarras! Somos apasionados de la música y estamos aquí para ofrecerte las mejores guitarras y accesorios para que puedas expresar tu arte de la mejor manera posible.

                    En nuestra tienda, encontrarás una amplia selección de guitarras acústicas, eléctricas y clásicas de las marcas más reconocidas en el mundo de la música. Desde modelos clásicos hasta las últimas novedades, tenemos todo lo que necesitas para encontrar el sonido que estás buscando.

                    Además de guitarras, también contamos con una variedad de amplificadores, pedales de efectos, cuerdas, estuches y todo lo necesario para que puedas tocar con comodidad y estilo. Nuestro equipo está aquí para asesorarte y ayudarte a encontrar el equipo perfecto para ti.

                    No importa si eres un principiante que está empezando su viaje musical o un músico experimentado que busca mejorar su sonido, en nuestra tienda encontrarás todo lo que necesitas para llevar tu música al siguiente nivel. ¡Ven y descubre el mundo de la música con nosotros!F
                </p>

            </div>
            
        </main>
    )
}

export default Nosotros
