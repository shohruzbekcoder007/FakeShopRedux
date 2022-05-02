import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products)
    
    const renderList = products.map((product) => {

        const {id,title,image,description,catecory,price} = product;

        return(
            <div className='four column four wide' key={id}>
                <Link to={`product/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img className='ui fluid image' src={image} alt={title}/>
                            </div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                {/* <p>{description}</p> */}
                                <div className='meta price'>$ {price}</div>
                                <div className='meta'>{catecory}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent;