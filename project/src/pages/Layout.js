import { Outlet, Link } from "react-router-dom";
import "../App.css"
import Button from '@mui/material/Button';
const Layout = () => {
  return (
    <><div className="Container">
      
        
          <div> <Button color="secondary" variant="contained"><Link to="/Home">Home</Link></Button></div>

          
          
          <div><Button color="secondary" variant="contained"><Link to="/about">About</Link></Button></div>

          
          
          <div><Button color="secondary" variant="contained"><Link to="/contact">Contact</Link></Button></div>

          
       
      </div>

      <Outlet />
    </>
  )
};

export default Layout;