import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-white text-zinc-900 py-4 border-b">
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <div className="text-2x1 font-bold">News Site</div>
                    <div className="space-x-4">
                        <Link className="text-zinc-900 hover:text-zinc-700" to="/">
                            Home
                        </Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" to="/game">
                            Bingo-Game
                        </Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" to="/vote">
                            Vote
                        </Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" to="/teams">
                            Premier League
                        </Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" to="/contact">
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>
      </header>
    );
};

export default Navbar;