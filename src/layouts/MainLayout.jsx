import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
// import Home from "../pages/Home";
// import ListedBooks from "../pages/ListedBooks";
// import PagesRead from "../pages/PagesRead";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
              <Nav></Nav>
            </div>
            <div>
                {/* packet */}
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;