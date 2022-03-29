import React from 'react';
import './style.css';

const Actor = ({name, as}) => {
    return(
        <div className='Actor'>
            <p>Jméno: {name}</p>
            <p>Postava: {as}</p>
        </div>


    );
}

export default Actor