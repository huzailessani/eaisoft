import BaseLayout from "@/components/BaseLayout";
import Image from "next/image";
import { BsArrowRight} from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const Service = () => {

    
  const service = [{
    id: 0,
      name: "WEB DEVELOPMENT",
      desc:"Web development is the art of creating and maintaining websites and web applications.",
      image: "/services/service1.jpg",
  },
  {
    id: 1,
      name: "UI/UX DESIGN",
      desc:"UI/UX design combines aesthetics and user experience to create user-friendly and visually appealing digital interfaces.",
      image: "/services/service2.jpg",
  },
  {
    id: 2,
      name: "AI-ENHANCED CRM",
        desc:"AI-enhanced CRM leverages artificial intelligence to optimize customer interactions and improve relationship management.",
      image: "/services/service3.jpg",
  }]
  return (<>
     <div className="main-section">
  <h2 className="headings mb-5">Our services</h2>
</div>

<section className="main-section">
  <div className="wrapper-justice mb-5">
    <div className="container-fluid">
      <div className="target-items row justify-content-center">
        {service.map((item) => (
          <div className="col-12 col-lg-4 card-items" key={item.id}>
            <Image
              className="card-image"
              src={item.image}
              alt="who we are"
              width={200}
              height={200}
             
            />
            <div className="card-body-content">
              <div className="borders"></div>
              <h5 className="title">{item.name}</h5>
              <p className="text">
                {item.desc}
              </p>
              <div className="arrow-border">
                <BsArrowRight className="arrow-left" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  </>);
};

export default Service;
