import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { removeSelectedProduct, setProducts } from './../redux/action/productActions'

const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    // const response = axios
    //         .get('https://fakestoreapi.com/products')
    //         .then(response => {
    //             console.log(response.data)
    //             dispatch(setProducts(response.data))
    //             console.log("Products :", products)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products').catch(err => {
                console.log(err)
            })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[])

    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;