// components/Services.js
export default function Services() {
    return (
        <div id="services" className="py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl text-blue-400 font-semibold mb-12">Services</h1>
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="bg-gray-700 p-8 rounded-lg hover:bg-blue-600 transition-transform transform hover:-translate-y-2">
                        <i className="fa-solid fa-code text-4xl mb-4"></i>
                        <h2 className="text-2xl font-semibold mb-2">Full-Stack Web Development</h2>
                        <p>I create responsive websites with HTML, CSS, JS, NestJS, RESTful APIs, and database integration.</p>
                    </div>
                    <div className="bg-gray-700 p-8 rounded-lg hover:bg-blue-600 transition-transform transform hover:-translate-y-2">
                        <i className="fa-solid fa-database text-4xl mb-4"></i>
                        <h2 className="text-2xl font-semibold mb-2">Data Science</h2>
                        <p>Analyzed datasets in R, cleaned data, visualized patterns, and generated insights using statistics and plots.</p>
                    </div>
                    <div className="bg-gray-700 p-8 rounded-lg hover:bg-blue-600 transition-transform transform hover:-translate-y-2">
                        <i className="fa-regular fa-house text-4xl mb-4"></i>
                        <h2 className="text-2xl font-semibold mb-2">2D/3D Graphics & Animation</h2>
                        <p>Designed interactive 2D/3D scenes with C++, OpenGL, and AutoCAD including animations for immersive visuals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
