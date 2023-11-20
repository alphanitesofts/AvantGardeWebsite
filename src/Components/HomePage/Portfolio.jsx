import React from 'react';
import SliderComponent from './sliderComponent/SliderComponent';
import { useGetCategoriesQuery } from '../features/categories/categoriesSlice';
import { useGetSubCategoriesQuery } from '../features/sub_categories/subCategoriesSlice'
const Portfolio = () => {

    const { data: subCategoriesData, isError: subCategoriesError, isLoading: subCategoriesLoading } = useGetSubCategoriesQuery();
    console.log(subCategoriesData, "subcategories data......");
    
    const { data, isError, isLoading } = useGetCategoriesQuery();
    console.log(data,'sategory')
    let newArrivalsItems;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error fetching categories</div>;
    } else if (data) {
        newArrivalsItems = data.map(item => ({
            id: item.id,
            cat_name: item.cat_name,
            username: item.username,
            imageUrl: 'img/product-img/product-1.jpg',
            link: item.cat_name.toLowerCase().replace(/\s+/g, '-'),
            price:console.log(item.id,"key")
        }))
    }

    return (
        <>
            {
                newArrivalsItems.map((category,index) => (
                    <SliderComponent key={index} id={category.id} sectionTitle={category.cat_name}/>
                ))}
            {/* <SliderComponent sectionTitle="Hoddies" slides={slides} />
            <SliderComponent sectionTitle="Jogger Pants" slides={slides} />
            <SliderComponent sectionTitle="Sweatshirt" slides={slides} />
            <SliderComponent sectionTitle="Corduroy Shirts" slides={slides} />
            <SliderComponent sectionTitle="Flannel Shirts" slides={slides} />
            <SliderComponent sectionTitle="Flannel Shackets" slides={slides} />
            <SliderComponent sectionTitle="Oversized Graphic Tees" slides={slides} />
            <SliderComponent sectionTitle="Polo Shirts" slides={slides} />
            <SliderComponent sectionTitle="Casual Shirts" slides={slides} />
            <SliderComponent sectionTitle="T-Shirts" slides={slides} />
            <SliderComponent sectionTitle="Shorts" slides={slides} />
            <SliderComponent sectionTitle="Jeans" slides={slides} />
            <SliderComponent sectionTitle="Utility Cargos" slides={slides} />
            <SliderComponent sectionTitle="Premium Chinos" slides={slides} /> */}
        </>
    )
}

export default Portfolio;