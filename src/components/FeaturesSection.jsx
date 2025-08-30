import FeatureCard from "./FeatureCard";
import carIcon from "../assets/images/car.png";
import discountIcon from "../assets/images/discount.png";
import returnIcon from "../assets/images/ret.png";
import supportIcon from "../assets/images/support.png";


function FeaturesSection() {
  const features = [
    {
      icon: carIcon,
      title: "Free Shipping",
      desc: "Free Shipping Over $50",
      
    },
    {
      icon: discountIcon,
      title: "Special discounts",
      desc: "Exclusive member deals",
    },
    {
      icon: returnIcon,
      title: "Easy Return",
      desc: "Return within 14 days",
    },
    {
      icon: supportIcon,
      title: "Support 24/7",
      desc: "Always here to help",
    },
  ];
 return (
    <section className="banner_btm">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                desc={feature.desc} 
                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  }

export default FeaturesSection;