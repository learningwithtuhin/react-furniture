import productOne from "../assets/images/product1.png"
import productTwo from "../assets/images/product2.png"
import productThree from "../assets/images/product3.png"
import productFour from "../assets/images/product4.png"
import productFive from "../assets/images/product5.png"
import productSix from "../assets/images/product6.png"
import productSeven from "../assets/images/product7.png"
import productEight from "../assets/images/product8.png"
import dealOne from "../assets/images/deal1.png"
import dealTwo from "../assets/images/deal2.png"
import dealThree from "../assets/images/deal3.png"
import dealFour from "../assets/images/deal4.png"
import star from "..//assets/images/star.png"

const products = [
  {
    id: 1,
    title: "Solid Wood Study Table",
    price: "26,249",
    oldPrice: "41,499",
    image: [productOne],
    starImage: star,
    bestseller: "yes"
  },
  {
    id: 2,
    title: "Bed with storage box",
    price: "33,500",
    oldPrice: "45,000",
    image: [productTwo],
    starImage: star,
    bestseller: "no"
  },
  {
    id: 3,
    title: "Velvet 3-Seater Sofa",
    price: "13,200",
    oldPrice: "15,000",
    image: [productThree],
    starImage: star,
    bestseller: "yes"
  },
  {
    id: 4,
    title: "Outdoor garden chair",
    price: "2299",
    oldPrice: "3399",
    image: [productFour],
    starImage: star,
    bestseller: "no"
  },
{
    id: 5,
    title: "Velvet Sofa",
    price: "26,249",
    oldPrice: "41,499",
    image: [dealOne],
    starImage: star,
    bestseller: "no",
    hours: "01",
    minutes: "15",
    seconds: "10"
  },
  {
    id: 6,
    title: "Comfortable Storage",
    price: "2200",
    oldPrice: "2900",
    image: [dealTwo],
    starImage: star,
    bestseller: "no",
    hours: "01",
    minutes: "15",
    seconds: "10"
  },
  {
    id: 7,
    title: "Puffy Stool",
    price: "2500",
    oldPrice: "3500",
    image: [dealThree],
    starImage: star,
    bestseller: "no",
    hours: "01",
    minutes: "15",
    seconds: "10"
  },
 
  {
    id: 8,
    title: "Queen size bed",
    price: "21,759",
    oldPrice: "29,375",
    image: [productFive],
    starImage: star,
    bestseller: "yes"
  },
  {
    id: 9,
    title: "Kitchen cabinet",
    price: "14,999",
    oldPrice: "24,999",
    image: [productSix],
    starImage: star,
    bestseller: "no"
  },
  {
    id: 10,
    title: "Wall lamp",
    price: "999",
    oldPrice: "2,000",
    image: [productSeven],
    starImage: star,
    bestseller: "yes"
  },
  {
    id: 11,
    title: "4 Door Wardrobe With Mirror",
    price: "33,500",
    oldPrice: "45,000",
    image: [productEight],
    starImage: star,
    bestseller: "no"
  },
];

export default products;