import React from 'react'
import SingleProduct from '../ProductDetails/SingleProduct'
import RelatedProducts from '../ProductDetails/RelatedProducts'
import DiscountArea from '../HomePage/DiscountArea'
import { Link, useParams} from 'react-router-dom';
const ProductDescription = () => {
    const params = useParams();
    let {productId}=params;
    console.log(productId,"abcd id")
    return (
        <div>
            {/* <DiscountArea /> */}
            <SingleProduct />
            <RelatedProducts />
        </div>
    )
}

export default ProductDescription