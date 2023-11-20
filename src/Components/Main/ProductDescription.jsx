import React from 'react'
import SingleProduct from '../ProductDetails/SingleProduct'
import RelatedProducts from '../ProductDetails/RelatedProducts'
import DiscountArea from '../HomePage/DiscountArea'
import { Link, useParams,useLocation } from 'react-router-dom';
const ProductDescription = () => {
    const location = useLocation();
    return (
        <div>
            {/* <DiscountArea /> */}
            <SingleProduct />
            <RelatedProducts />
        </div>
    )
}

export default ProductDescription