import BaseLayout from "../components/BaseLayout";
import Image from "next/image";

import SharedContact from "../pages/shared/sharedContact"
import SharedPortfolio from "../pages/shared/sharedPortfolio"
import SharedService from "../pages/shared/sharedService"
import SharedAbout from "../pages/shared/sharedAbout"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Home = () => {

  useEffect(() => {
    import('aos').then((AOS) => {

      AOS.init();
    });
  }, []);



  return <BaseLayout>


    <section className="hero-section">
      <div className="container swiper-container">
        <div className="row gy-2">
          <div className="col-lg-5 d-flex flex-column justify-content-center order-md-2 order-2 order-lg-1" data-aos="fade-down">
            <div className="hero-text-section">
              <h1 className="hero-title" data-aos="fade-down">EMPOWERING</h1>
              <span className="hero-title-2" data-aos="fade-down" data-aos-delay="100">THE FUTURE</span>
              <p className="hero-text" data-aos="fade-down" data-aos-delay="200">We are on a mission to reshape the future through innovation and technology</p>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 order-md-1 ">
            <Image
              width={400}
              height={400}
              className="ai-img animated-image"
              src="/ai.png"
              alt="logo"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
        </div>
      </div>
    </section>
    <SharedAbout />
    <SharedService />
    <SharedPortfolio />
    <SharedContact />

  </BaseLayout>;
};

export default Home;
