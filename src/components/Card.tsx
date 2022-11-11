import React from 'react'

const Card = ({ background, children }) => {
    return (
        <div className="rounded-xl p-5" style={{ backgroundColor: background }}>{children}</div>
    )
}

export default Card