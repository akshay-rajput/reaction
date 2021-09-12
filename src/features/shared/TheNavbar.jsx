import React from "react";
import { NavLink } from "react-router-dom";

export default function TheNavbar() {
    const applinks = [
        { text: "Home", link: "/" },
        { text: "About", link: "about/" },
    ];

    return (
        <nav className="bg-gray-800 text-gray-300 w-full">
            <div className="flex justify-between items-center container mx-auto px-4 py-2">
                <NavLink to="/">😉</NavLink>
                <ul className="flex items-center gap-4">
                    {applinks.map((linkName) => {
                        return (
                            <li key={linkName.text} className="text-teal hover:underline">
                                <NavLink
                                    end
                                    className={({ isActive }) =>
                                        "nav-link" +
                                        (isActive ? " underline" : "")
                                    }
                                    to={linkName.link}
                                >
                                    {linkName.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
