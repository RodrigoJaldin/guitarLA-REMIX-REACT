export async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const resultado= await respuesta.json();
    return resultado;
}


export async function getGuitarra(url){
    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const resultado =await response.json()
    return await resultado
}

