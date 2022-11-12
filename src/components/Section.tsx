import React from 'react'

const Section = ({ children }) => {
    return (
        <div className="bg-gray-100 mt-5 rounded-xl p-5 shadow-xl">
            {children}
        </div>
    )
}

export default Section