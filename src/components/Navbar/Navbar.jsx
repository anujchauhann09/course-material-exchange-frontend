import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(true)
    const [isToggleOpen, setToggleOpen] = useState(true)

    const setToggle = () => setToggleOpen(!isToggleOpen)

    return (
        <nav className="nav w-full">
            <div className="navbar-container w-full bg-slate-400 flex p-3">
                <div className="left-nav w-1/2">
                    <span id="logo-name">CourseMaterialExchange</span>
                </div>
                <div className={`right-nav w-1/2 flex ${isToggleOpen ? 'block' : 'hidden'}`}>
                   <button className="toggle-btn ml-auto" onClick={setToggle}>hey</button>
                </div>
                {isToggleOpen ? (
                    <div className="right-nav w-1/2 flex">
                        <div className="toggle">
                            <ul className="ul">
                                <li className="li">Features</li>
                                <li className="li">Pricing</li>
                                <li className="li">About</li>
                                <li className="li">Contacts</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="right-nav w-1/2 flex">
                        <div className="toggle">
                            <span className="li">Features</span>
                            <span className="li">Pricing</span>
                            <span className="li">About</span>
                            <span className="li">Contacts</span>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}