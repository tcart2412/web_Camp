import React from "react";
import { Link } from "react-router-dom";
export default function Layout({ children }) {
    return (
        <React.Fragment>
            <nav className="bg-red-100 flex flex-row h-20 w-full space-x-5 items-center justify-center">
                <Link to="/" className="bg-green-100 px-2 py-0.5 rounded-md hover:shadow-lg">Home Page</Link>
                <Link to="/about" className="bg-green-100 px-2 py-0.5 rounded-md hover:shadow-lg">About Page</Link>
            </nav>
            {children}
        </React.Fragment>
    )
}