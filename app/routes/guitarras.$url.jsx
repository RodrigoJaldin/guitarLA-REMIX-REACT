import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";


export async function loader({ params }) {
  const { url } = params;

  const guitarra = await getGuitarra(url);
  console.log("desde loader ", guitarra);

  if (!guitarra.data || guitarra.data.length === 0) {
    throw new Response('',{
      status:404,
      statusText:"Guitarra no encontrada"
    })
  }

  return guitarra;
}


export function meta({ data }) {

  if(!data){
    return [{ title: `Guitarra no encontrada` }]

  }
  return [
    { title: `GuitarLA-${data.data[0].attributes.nombre}` }
  ]
}


function Guitarra() {
  const guitarra = useLoaderData();

  if (!guitarra || !guitarra.data || guitarra.data.length === 0) {
    return <div>No se encontraron datos de la guitarra.</div>;
  }

  const { nombre, imagen, precio, descripcion } = guitarra.data[0].attributes;

  return (
    <div className=" guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`}></img>
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion[0]?.children[0]?.text}</p>
        <p className="precio">${precio}</p>
      </div>


    </div>
  );
}

export default Guitarra;
