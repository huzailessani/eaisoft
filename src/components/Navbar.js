import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const Navbar = () => {
    const router = useRouter();
    const navbarItems = [
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
        <>

            <nav className="navbar navbar-one navbar-expand-md navbar-dark bg-dark p-4">
                <div className="container">
                    <Link href="/">
                        <Image
                            width={150}
                            height={50}
                            className="sidebar__logo"
                            src="/logo.png"
                            alt="logo"
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {navbarItems.map(({ name, href }) => {
                             return (
                                <>
                                 <li className="nav-item" key={name}>
                                <Link  className={`nav-link ${router.pathname === href ? "nav-link active" : ""
                                   }`} href={href} id="" role="button" >
                                   {name}
                                </Link>
                            </li>
                              
                               </>
                             );
                           })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;