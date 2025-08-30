import React from 'react'
import CategoryCard from "./CategoryCard";
import firstImage from "../assets/images/category-img-1.png"
import secondImage from "../assets/images/category-img-2.png"
import thirdImage from "../assets/images/category-img-3.png"
import fourthImage from "../assets/images/category-img-4.png"
import fifthImage from "../assets/images/category-img-5.png"
import sixthImage from "../assets/images/category-img-6.png"

const CategorySection = () => {
    const categories = [
        {
              icon: firstImage,
              title: "Chair",
              productCount: "(1 Product)",
              
            },
        {
              icon: secondImage,
              title: "Table",
              productCount: "(2 Products)",
              
            },
        {
              icon: thirdImage,
              title: "Bed",
              productCount: "(2 Products)",
              
            },
        {
              icon: fourthImage,
              title: "Sofa",
              productCount: "(2 Products)",
              
            },
        {
              icon: fifthImage,
              title: "Cabinet",
              productCount: "(1 Product)",
              
            },
        {
              icon: sixthImage,
              title: "Light",
              productCount: "(1 Product)",
              
            },
    ]
  return (
    <div className='row'>
        {categories.map((category,index) =>(
          <div key={index} className="col-md-2">
<CategoryCard
icon={category.icon} 
title={category.title} 
productCount={category.productCount} 
/>
          </div>  
        ))}
    </div>
  )
}

export default CategorySection