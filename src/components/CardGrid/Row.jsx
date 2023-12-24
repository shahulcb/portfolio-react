import React from 'react'

function Row({ children }) {
    return (
        <div className="flex flex-wrap gap-6">
            {children}
        </div>
    )
}

export default Row
