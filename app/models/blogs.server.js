export async function getBlogs(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const resultado= await respuesta.json();
    return resultado;
}

export async function getBlog(url){
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const resultado =await response.json()
    return await resultado
}