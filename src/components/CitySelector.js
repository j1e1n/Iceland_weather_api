import React from 'react';

const CitySelector = ({selectAkureyri, selectReykjavik}) => {
    return(
        <>
        <button onClick={selectReykjavik}>Reykjavík</button>
        <button onClick={selectAkureyri}>Akureyri</button>
        </>
    )
}

export default CitySelector;