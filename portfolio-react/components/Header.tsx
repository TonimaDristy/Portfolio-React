"use client"; // in case you want interactivity later

export default function Header() {
    return (
        <div
            id="header"
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/Images/Background.png.jpg')" }}
        >
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-4">
                <nav className="flex justify-between items-center py-4">
                    {/* Logo placeholder */}
                    {/* <img src="/Images/logo.png.png" className="w-36" /> */}
                    <ul className="flex space-x-6 text-white text-xl md:text-2xl font-semibold tracking-wider">
                        <li className="hover:text-blue-400 transition-colors duration-300"><a href="#header">Home</a></li>
                        <li className="hover:text-blue-400 transition-colors duration-300"><a href="#about">About</a></li>
                        <li className="hover:text-blue-400 transition-colors duration-300"><a href="#services">Services</a></li>
                        <li className="hover:text-blue-400 transition-colors duration-300"><a href="#work">Work</a></li>
                        <li className="hover:text-blue-400 transition-colors duration-300"><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Main header text */}
                <div className="mt-20 text-white text-center md:text-left animate-fadeIn">
                    <p className="text-xl md:text-2xl mb-2 opacity-0 animate-fadeIn delay-200">CSE Undergraduate</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight opacity-0 animate-fadeIn delay-400">
                        Hi, I'm <br />
                        <span className="text-blue-400">Tonima Islam Dristy</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-2xl opacity-0 animate-fadeIn delay-600">
                        Passionate about AI, Web Dev & Graphics
                    </p>
                </div>

                {/* Scroll down indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <span className="text-white mb-2 animate-bounce">Scroll Down</span>
                    <div className="w-1 h-10 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
            </div>

            {/* Tailwind animation classes */}
            <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fadeIn.delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
