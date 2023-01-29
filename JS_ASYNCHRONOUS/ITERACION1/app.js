// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const getApi = async () => {
    const data = await fetch("https://api.agify.io?name=michael");
    const transformJson = await data.json();

    console.log(transformJson);
}

