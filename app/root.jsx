import {
    Meta, Links, Outlet, Scripts, LiveReload, useRouteError,
    isRouteErrorResponse, Link
} from "@remix-run/react"

import styles from "~/style/index.css"
import Header from "~/components/header";
import Footer from "~/components/footer";


export function meta() {
    return [
        { charset: 'utf-8' },
        { title: 'GuitarLA-Remix' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",

        },
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}



export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    );
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header></Header>
                {children}
                <Footer></Footer>
                <Scripts></Scripts>
                <LiveReload></LiveReload>
            </body>
        </html>
    );
}


/* Manejo de Errores */
export function CatchBoundary() {
    const error = useRouteError()
    return (
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className="error-enlace"
                to="/"
            >
                Volver a pagina principal
            </Link>
        </Document>
    )
}

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className="error">
                    {error.status} {error.statusText}
                </p>
                <Link className="error-enlace"
                    to="/"
                >
                    Volver a pagina principal
                </Link>
            </Document>
        )
    }
}