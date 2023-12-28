import React from 'react'

function BlogImage({ imageSrc }) {
    return (
        <img src={imageSrc} alt="" className='max-h-[480px] rounded-md object-cover' />
    )
}

export default BlogImage
