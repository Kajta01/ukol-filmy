import React from 'react';

const Actor = ({name, as}) => {
    return(
        <div className='Actor'>
            <p>Jméno: {name}</p>
            <p>Postava: {as}</p>
        </div>


    );
}

export default Actor