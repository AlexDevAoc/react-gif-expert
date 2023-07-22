import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
// si el hook va retornar codigo jsx el archivo debe tener la extension jsx tambien funciona en react native
// un hook es una funcion que regresa algo
// si regresa un codigo jsx es un functional component
export const useFetchGifs = ( category ) => {
    const [images, setNewImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const imgs = await getGifs(category);
        setNewImages(imgs);
        setIsLoading(false);
    }
    // useEffect se utiliza para manejar efectos secundarios algun proceso que se quiera ejecutar cuando algo cambie dispara un efecto secundario
    useEffect(() => {
        getImages();
    }, [])
    // El arreglo vacio significa que el hook solo se va disparar una vez cuando se renderice el componente
    return {
        images,
        isLoading
    }
}

