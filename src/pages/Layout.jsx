import React from 'react'

function Layout({ children }) {

    return (
        <div className='mt-16 lg:mt-0 lg:ml-60 h-full'>
            {children}
        </div>
    )
}

export default Layout
