import Filter from "../components/Filter";
import { Navbar } from "../components/NavBar";
import Sidebar from "../components/sidebar";

const workspacelayout = ({children}:{children:React.ReactNode}) => {
    return (
      <div className="h-[100vh] overflow-y-hidden">
        <Navbar />
        <div className="flex h-full overflow_hidden">
          <Sidebar />
        {children}
        </div>
        {/* <ProductForm/> */}
      </div>
    );
}
export default workspacelayout;