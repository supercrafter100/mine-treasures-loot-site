import React from 'react'

const Card = ({ background, children }) => {
    return (
        <div className="rounded-xl p-5 shadow-xl" style={{ backgroundColor: background }}>{children}</div>
    )
}

export default Card