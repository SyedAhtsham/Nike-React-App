import React from 'react'

const ShoeSmall = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL) {
            changeBigShoeImage(imgURL)
        }
    }

    return (

        
        <div className={`
 rounded-xl 
            ${bigShoeImg === imgURL
            ? ''
            : ''
            } cursor-pointer max-sm:flex-1
            `}
            onMouseOver={handleClick}
        >
            
            <div className=''>
                
                <img src={imgURL} alt="shoe collection"
                   
                    className='object-cover w-20 h-20 rounded-md'
                />
            </div>

        </div>
    )
}

export default ShoeSmall