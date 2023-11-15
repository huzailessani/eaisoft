import BaseLayout from "@/components/BaseLayout";
import Image from "next/image";
import { React, useState, useRef, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    import('aos').then((AOS) => {

      AOS.init();
    });
  }, []);

  const [fav, setFav] = useState(false)
  const [activeCardId, setActiveCardId] = useState();

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  const products = [
    {
      id: 0,
      name: "HTML",
      image: "/about/html.png",

    },
    {
      id: 1,
      name: "CSS",
      image: "/about/css.png",

    },
    {
      id: 2,
      name: "JAVASCRIPT",
      image: "/about/javascript.png",

    },

    {
      id: 3,
      name: "PYTHON",
      image: "/about/python.png",

    },

    {
      id: 4,
      name: "REACT",
      image: "/about/react.png",

    },

    {
      id: 5,
      name: "REDUX",
      image: "/about/redux.png",

    },

    {
      id: 6,
      name: "SASS",
      image: "/about/sass.png",

    },

    {
      id: 7,
      name: "GIT",
      image: "/about/git.png",

    },
    {
      id: 8,
      name: "FIGMA",
      image: "/about/figma.png",


    },

    {
      id: 9,
      name: "FLUTTER",
      image: "/about/flutter.png",

    },

  ];

  return (<> <div className="main-section">
    <h2 className="headings ">About us</h2>
  </div>

    <section className="main-section p-5">
      <div className="mx-auto p-5 container vm-bg bg-dark text-white row mt-5 pt-5 pb-5 " data-aos="fade-down">
        <div className="col-md-6 p-2" data-aos="fade-down">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-3 d-flex align-items-center text-center">
                <Image
                  className="img mx-auto"
                  src="/vision.png"
                  alt="Image 1"
                  width={80}
                  height={80}
                  data-aos="fade-down"
                />
              </div>
              <div className="col-12 col-sm-9 text-center text-sm-start">
                <strong>  <h2 className="card-title mb-2" data-aos="fade-down">OUR VISION</h2></strong>
                <p className="m-2" data-aos="fade-down">
                  To lead the charge in AI-driven innovation, transforming industries, and empowering individuals by delivering cutting-edge solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2" data-aos="fade-down">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-3 d-flex align-items-center text-center">
                <Image
                  className="mx-auto"
                  src="/mission.png"
                  alt="Image 1"
                  width={80}
                  height={80}
                  data-aos="fade-down"
                />
              </div>
              <div className="col-12 col-sm-9 text-center text-sm-start">
                <strong>  <h2 className="card-title mb-2" data-aos="fade-down">OUR MISSION</h2></strong>
                <p className="m-2" data-aos="fade-down">
                  Our mission is to harness the transformative power of artificial intelligence to create products that inspire change, solve real-world problems, and set new standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="main-section">
      <h2 className="headings mt-5">Our Technologies</h2>
    </div>

    <section className="main-section">

      <div className="contain">
        {products.map((item) => {

          return (
            <div
              className={`card ${activeCardId === item.id ? "active" : ""
                }`}
              key={item.id}
              onClick={() => handleCardClick(item.id)}
            >
              <div className="text-center">
                <Image width={100}
                  height={100}
                  className=""
                  src={item.image}
                  alt="logo" />

                <h2 className="text-white">{item.name}</h2>
              </div>

            </div>
          );
        }
        )}
      </div>
    </section></>)
};

export default About;
