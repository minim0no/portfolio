import { useState } from "react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="hidden md:block">{/* Desktop */}</div>
            <div className="md:hidden">
                <nav className="flex justify-between items-center p-5 border-b border-darkGray">
                    <div>
                        <a href="/">
                            <img
                                src="./portfolio-logo.svg"
                                alt="Portfolio Logo"
                                className="w-12 h-12"
                            />
                        </a>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <img
                                src="./burger-logo.svg"
                                alt="Open Menu"
                                className="w-12 h-12"
                            />
                        </button>
                    </div>
                </nav>
                {isOpen && (
                    <div className="fixed inset-0 z-10 flex flex-col justify-center items-center p-5 bg-main font-medium text-3xl gap-5">
                        <a href="/">Home</a>
                        <a href="/projects">Projects</a>
                        <a href="/resume">Resume</a>
                    </div>
                )}
                {isOpen && (
                    <div
                        className="absolute top-5 right-5 z-10"
                        onClick={() => setIsOpen(false)}
                    >
                        <img
                            src="./x.svg"
                            alt="Close Menu"
                            className="w-12 h-12"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
