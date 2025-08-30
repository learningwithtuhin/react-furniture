import blogImageOne from "../assets/images/blog-img1.png";
import blogImageTwo from "../assets/images/blog-img2.png";
import blogImageThree from "../assets/images/blog-img3.png";
import authorOne from "../assets/images/tanvi.png"
import authorTwo from "../assets/images/rahul.png"
import authorThree from "../assets/images/neha.png"



const blogs = [
  {
      id: 1,
      image: blogImageOne,
      tag: "Trending",
      date: "August 1, 2025",
      title: "Top 5 Furniture Trends To Transform Your Home In 2025",
      authorImage: authorOne,
      authorName: "Tanvi Mehra",
      authorRole: "Interior Stylist @urbanlook",
    },
    {
      id: 2,
      image: blogImageTwo,
      tag: "Living Room",
      date: "March 25, 2025",
      title: "Smart Furniture Ideas for Modern Homes",
      authorImage: authorTwo,
      authorName: "Rahul Khanna",
      authorRole: "Home Consultant @dechout",
    },
     {
      id: 3,
      image: blogImageThree,
      tag: "Buying Guide",
      date: "July 14, 2025",
      title: "How to Choose the Perfect Sofa for Your Living Room",
      authorImage: authorThree,
      authorName: "Neha Rathore",
      authorRole: "Interior Expert @woodhaven",
    },
  
];

export default blogs;
