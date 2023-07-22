import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // Limpiar valor y guardarlo en una constante
        const value = inputValue.trim();
        if(value.length <= 1 ) return
        // setCategories(categories => [ ...categories, inputValue ]);
        onNewCategory(value)
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
