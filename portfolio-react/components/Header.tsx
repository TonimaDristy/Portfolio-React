// components/Header.js
export default function Header() {
    return (
        <div id="header" className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Images/Background.png.jpg')" }}>
            <div className="container mx-auto p-4">
                <nav className="flex justify-between items-center">
                    {/* <img src="/Images/logo.png.png" className="w-36" /> */}
                    <ul className="flex space-x-6 text-white text-2xl font-bold">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="mt-20 text-white text-4xl md:text-6xl">
                    <p className="text-xl md:text-2xl">CSE Undergraduate</p>
                    <h1>
                        Hi, I'm <br />
                        <span className="text-blue-400">Tonima Islam Dristy</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
