import React from 'react'

function Thumbnail(foto) {
    return (
        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={foto.image} />
    )
}

export default Thumbnail
