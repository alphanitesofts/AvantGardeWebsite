import React from 'react'
import SingleProduct from '../ProductDetails/SingleProduct'
import RelatedProducts from '../ProductDetails/RelatedProducts'
import DiscountArea from '../HomePage/DiscountArea'

const ProductDescription = () => {
    return (
        <div>
            <DiscountArea />
            <SingleProduct />
            <RelatedProducts />
        </div>
    )
}

export default ProductDescription