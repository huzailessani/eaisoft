
import Navbar from "./Navbar"
import Footer from "./Footer"



const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
    
      <Navbar/>
      <main className="layout__main-content">{children}</main>;
      <Footer/>
    </div>
  );
};

export default BaseLayout;
