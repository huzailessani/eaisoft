import React from 'react'

const Footer = () => {
  const footerItems = [
    {
      name: "Home",
      href: "/",
      
    },
    {
      name: "About",
      href: "/about",
    
    },
    {
      name: "Service",
      href: "/service",
      
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      
    },
    {
      name: "Contact Us",
      href: "/contact",
      
    },
  ];
  return (
    <div>
    <footer className="p-5 footer bg-dark text-white">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      {footerItems.map((item)=>{
       return(<> <li class="nav-item "><a href={item.href} class="nav-link px-2  text-white">{item.name}</a></li></>)
      })}
      
    </ul>
    <p className="text-center text-white">© 2021 Eaisoft Company, Inc</p>
  </footer>
  </div>
  )
}

export default Footer