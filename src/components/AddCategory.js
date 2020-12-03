import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories }) => {

    const [inputValue, setInputValue] = useState(''); //Si no lo pongo como un string vacio '' me da error de undefined

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories( cats => [ inputValue , ...cats] );
            setInputValue('');   
        }  
    }

    return (

        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )

}

    AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired
    }