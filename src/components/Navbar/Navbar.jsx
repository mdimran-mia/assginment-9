import { useState, useRef, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerWidth, setDrawerWidth] = useState(300); // Default drawer width
    const drawerRef = useRef(null);

    const { user, logout } = useContext(AuthContext);

    const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

    const handleLogOut = () => {
        logout();
    };

    // Resizing drawer with mouse
    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const newWidth = Math.min(
            Math.max(200, window.innerWidth - e.clientX),
            window.innerWidth - 50
        );
        setDrawerWidth(newWidth);
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    // Close drawer when clicking outside
    const handleClickOutside = (e) => {
        if (drawerRef.current && !drawerRef.current.contains(e.target) && isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDrawerOpen]);

    const Links = (
        <div className="flex flex-col lg:flex-row gap-5 ">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "text-slate-900 lg:text-white")}>
                Home
            </NavLink>
            {
                user && <>
                    <NavLink to="/newSite" className={({ isActive }) => (isActive ? "text-blue-500" :  "text-slate-900 lg:text-white")}>
                        New Sites
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-500" :  "text-slate-900 lg:text-white")}>
                        Contact
                    </NavLink>
                </>
            }
        </div>
    );

    return (
        <div>
            {/* Navbar */}
            <div className="navbar bg-black opacity-75 fixed top-0 left-0 w-full z-10 text-white font-medium">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost text-xl">
                        Super Home
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{Links}</ul>
                </div>
                <div className="navbar-end flex justify-end items-center gap-4">
                    {user ? (
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-ghost">
                                LogOut
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="hidden lg:block">
                            Login
                        </Link>
                    )}
                    <button
                        className="btn btn-ghost lg:hidden"
                        onClick={toggleDrawer}
                        aria-label="Open menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Drawer */}
            {isDrawerOpen && (
                <div
                    ref={drawerRef}
                    className="fixed top-16 right-0 h-full bg-base-200 bg-opacity-90 transition-all duration-300 z-20 text-gray-500"
                    style={{ width: `${drawerWidth}px` }}
                >
                    <div className="p-4">
                        <ul className="menu text-base-content">{Links}</ul>
                    </div>
                    <div className="absolute left-8">
                        {user ? (
                            <>
                                <span>{user.email}</span>
                                <button onClick={logout} className="btn btn-ghost">
                                    LogOut
                                </button>
                            </>
                        ) : (
                            <>
                                <FaUserCircle />
                                <Link to="/login" className="btn btn-ghost">
                                    Login
                                </Link>
                            </>
                        )}

                    </div>
                    <div
                        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize bg-gray-300"
                        onMouseDown={handleMouseDown}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
