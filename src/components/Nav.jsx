import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Book Vibe</Link>
            </div>
            <div className="navbar-center gap-2 hidden lg:flex">
                <ul className="menu menu-horizontal px-1 hidden  sm:flex gap-5">
                    <NavLink to='/' className={({isActive})=> isActive? 'text-[#23BE0A] font-bold': 'font-bold'}>
                         Home 
                    </NavLink>
                    <NavLink to='/listedBooks' className={({isActive})=> isActive? 'text-primary font-bold': 'font-bold'}>
                      Listed Books
                    </NavLink>
                    <NavLink to='/pagesRead' className={({isActive})=> isActive? 'text-primary font-bold': 'font-bold'}>
                      Pages to Read 
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2">
            <button className="btn bg-[#23BE0A] text-white">Sign In</button>
            <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;