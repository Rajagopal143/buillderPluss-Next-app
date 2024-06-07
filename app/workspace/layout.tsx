import ProductForm from "../components/AddProducts";
import Filter from "../components/Filter";
import { Navbar } from "../components/NavBar";
import Sidebar from "../components/sidebar";

const workspacelayout = ({children}:{children:React.ReactNode}) => {
    return (
      <div className="h-screen ">
        <Navbar />
        <div className="flex h-[90vh]">
          <Sidebar />
            
        {children}
        <Filter/> 
        </div>
        {/* <ProductForm/> */}
      </div>
    );
}
export default workspacelayout;