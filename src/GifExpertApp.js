import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/> 
            <hr />


            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )

}



/*
    Para agregar un elemento nuevo 
    const handleAdd = () => {
        //setCategories( [...categories, 'Dragon Ball'] );
        setCategories( cats => [ ...cats, 'Dragon Ball' ] ); 
        //cats es el argumento anterior osea categories y despues debe retornar un nuevo arreglo y estado
    }

    <button onClick = { handleAdd }>Agregar</button>

    Comunicacion entre componentes
    <AddCategory setCategories={ setCategories }/> 
*/
