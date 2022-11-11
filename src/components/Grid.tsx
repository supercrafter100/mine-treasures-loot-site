import React from 'react'

const Grid = ({ children }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5`}>{children}</div>
    )
}

export default Grid