import BaseLayout from "@/components/BaseLayout";
import Image from "next/image";

const Portfolio = () => {
  const portfolio = [
    {
      id: 0,
      name: "WEATHER APP",
      subheading:"lorem ipsum",
      image: "/portfolio/portfolio1.png",
   desc:"Provides accurate weather forecasts and real-time updates."

    },
    {
      id: 1,
      name: "EXPENSE TRACKER",
      subheading:"lorem ipsum",
      image: "/portfolio/portfolio2.jpg",
   desc:"An expense tracker helps users manage and monitor their financial transactions."
    },
    {
      id: 2,
      name: "ADMIN PORTAL",
      subheading:"lorem ipsum",
      image: "/portfolio/portfolio3.jpg",
      desc:"An admin portal empowers administrators to manage and oversee various aspects of a system."
    },
    {
      id: 3,
      name: "CHAT APPLICATION",
      subheading:"lorem ipsum",
      image: "/portfolio/portfolio4.jpg",
      desc:"A chat application facilitates real-time communication and collaboration."
    },
    {
      id: 4,
      name: "SALES TRACKER",
      subheading:"lorem ipsum",
      image: "/portfolio/portfolio5.png",
      desc:"A sales tracker assists businesses in monitoring and analyzing sales."
    },
    {
      id: 5,
      name: "GROWTH TRACKER",
      subheading:"lorem ipsum",
      image: "/portfolio/portfolio6.jpg",
      desc:"A growth tracker visualizes performance to help businesses grow"
    },
    
  ]

  return (<>
  
  <div className="main-section">
  <h2 className="headings mb-5">Our Portfolio</h2>
</div>

<section className="main-section">
  <div className="container mb-5 d-flex justify-content-center align-items-center events-wrapper main-section">
    <div className="row us-card">
      {portfolio.map((item) => (
        <div className="col-md-4 p-2" key={item.id} >
          <article className="event-container">
            <Image
              width={400}
              height={250}
              className=""
              src={item.image}
              alt="logo"
             
            />
            <div className="event-info">
              <h2 className="event-title">{item.name}</h2>
              <h3 className="event-spots">{item.subheading}</h3>
              <p className="event-description">
                {item.desc}
              </p>
            </div>
          </article>
        </div>
      ))}
    </div>
  </div>
</section>

  </>
  
  )
};

export default Portfolio;
