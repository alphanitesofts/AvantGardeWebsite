import React, { useEffect } from 'react';
import Hero from '../HomePage/Hero'
import NewArrivals from '../HomePage/NewArrivals'
import Testimonial from '../HomePage/Testimonials'
import ItemInfo from '../Modals/ItemInfo'
import TwoCategories from '../HomePage/TwoCategories'
import OfferArea from '../HomePage/OffersArea';
import Portfolio from '../HomePage/Portfolio'
import Blogs from '../HomePage/Blogs'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../app/features/categories/categoriesSlice';

const Homepage = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state=> state.categories);
    console.log(categories)
    // Fetch Categories on load

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    const newArrivalsItems = [
        { category: "Hoodies / Sweatshirts", imageUrl: "img/product-img/product-1.jpg", link: "hoodies" },
        { category: "Jogger Pants", imageUrl: "img/product-img/product-2.jpg", link: "jogger-pants" },
        { category: "Corduroy Shirts", imageUrl: "img/product-img/product-3.jpg", link: "corduroy-shirts" },
        { category: "Flannel Shirts", imageUrl: "img/product-img/product-4.jpg", link: "flannel-shirts" },
        { category: "Flannel Shackets", imageUrl: "img/product-img/product-5.jpg", link: "flannel-shackets" },
        { category: "Denim Jeans", imageUrl: "img/product-img/product-6.jpg", link: "denim-jeans" },
        { category: "T-Shirts", imageUrl: "img/product-img/product-7.jpg", link: "t-shirts" },
        { category: "Men's Polo Shirts", imageUrl: "img/product-img/product-8.jpg", link: "mens-polo-shirts" },
        { category: "Casual Shirts", imageUrl: "img/product-img/product-9.jpg", link: "casual-shirts" },
        { category: "Shorts", imageUrl: "img/product-img/product-2.jpg", link: "shorts" },
        { category: "Utility Cargos", imageUrl: "img/product-img/product-11.jpg", link: "denim-jeans" },
        { category: "Premium Chinos", imageUrl: "img/product-img/product-12.jpg", link: "premium-chinos" },
        // Add more items as needed
    ];


    return (
        <div>
            <Hero />
            <TwoCategories />
            <ItemInfo />
            <NewArrivals items={newArrivalsItems} />
            <Portfolio />
            <OfferArea />
            <Blogs />
            <Testimonial />
        </div>
    )
}

export default Homepage