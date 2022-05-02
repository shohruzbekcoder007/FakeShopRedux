import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/action/productActions';

const ProductDetail = () => {

    const product = useSelector(state => state.product)
    const { productId } = useParams();
    const dispatch = useDispatch()
    const {id,title,image,description,category,price} = product;
    const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log(err)
        })
        dispatch(selectProduct(response.data))
    }

    useEffect(() => {
        if(productId && productId !== ""){
            fetchProduct();
        }
    },[productId])

  return (
    <div className='ui grid container'>
        {
           (Object.keys(product).length  === 0)?
           (
            <div>Loading...</div>
           ):
           (
            <div className='placeholder sigment'>
                <div className='ui two column stackable center aligned grid'>
                    {/* <div className='ui vertical divider'>AND</div> */}
                    <div className='middle aligned row'>
                        <div className='column lp'>
                            <img className='ui fluid image' src={image}/>
                        </div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <a className='ui teal tag label'>${price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex="0">
                                <div className='hidden content'>
                                    <i className='shop iconc'></i>
                                </div>
                                <div className='visible content'>Add to Card</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           )
        }

    </div>
  )
}

export default ProductDetail;