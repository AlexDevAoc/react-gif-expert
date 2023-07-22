import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
    // No se puede poner una condicion en los hooks, react pierde la referencia de los hooks cuando se usan condicionales
    // ejemplo
    // if (true) {
    // const [ categories, setcategories ] = useState([ 'Dragon Ball', 'Pokemon' ])
    // }
    const [ categories, setCategories ] = useState([ 'Dragon Ball', 'Pokemon' ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories  ]);
        // Tambien se puede poner un callback
        // setCategories( cat => [...cat, 'Smash']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // Esto es una propiedad de mi componente
                onNewCategory={ event => onAddCategory( event )}
                // Forma corta 
                // onNewCategory={ onAddCategory} 
            />
            { categories.map( category => <GifGrid key= { category } category={ category }/> ) }
        </>
    )
}
