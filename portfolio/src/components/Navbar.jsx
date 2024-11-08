import { useState } from "react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "#about" },
        { name: "Projects", path: "/projects" },
        { name: "Resume", path: "/resume" },
    ];

    return (
        <>
            <div className="hidden md:block">
                <nav className="flex justify-between items-center py-6 px-12 border-b border-darkGray">
                    <div>
                        <a href="/">
                            <img
                                src="./portfolio-logo.svg"
                                alt="Portfolio Logo"
                                className="w-16 h-16"
                            />
                        </a>
                    </div>
                    <div className="flex gap-6">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="font-medium text-2xl hover:underline"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
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
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
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
