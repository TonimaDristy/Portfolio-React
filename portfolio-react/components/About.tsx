// components/About.js
"use client";
import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState("Skills");

    return (
        <div id="about" className="py-20 text-white">
            <div className="container mx-auto flex flex-wrap gap-10">
                <div className="flex-1 max-w-md">
                    <img src="/Images/user.png.jpg" className="rounded-lg w-full" />
                </div>
                <div className="flex-1 max-w-lg">
                    <h1 className="text-4xl text-blue-400 font-semibold mb-4">About Me</h1>
                    <p>
                        I'm a Computer Science & Engineering student at AIUB. I enjoy AI, Data Science, Machine Learning, and Full-Stack Web Development. I have hands-on experience in HTML, CSS, JS, NestJS, PostgreSQL, SQL, and RESTful APIs.
                    </p>

                    <div className="flex space-x-8 mt-6">
                        <p
                            className={`cursor-pointer ${activeTab === "Skills" ? "border-b-2 border-blue-400" : ""}`}
                            onClick={() => setActiveTab("Skills")}
                        >
                            Skills
                        </p>
                        <p
                            className={`cursor-pointer ${activeTab === "Education" ? "border-b-2 border-blue-400" : ""}`}
                            onClick={() => setActiveTab("Education")}
                        >
                            Education
                        </p>
                    </div>

                    {activeTab === "Skills" && (
                        <ul className="mt-4 list-disc list-inside space-y-2">
                            <li><span className="text-blue-600 font-semibold">Backend Development:</span> RESTful backend services with NestJS and PostgreSQL.</li>
                            <li><span className="text-blue-600 font-semibold">Computer Graphics:</span> 2D cityscape in C++ with OpenGL and animation.</li>
                            <li><span className="text-blue-600 font-semibold">Web Development:</span> Responsive websites using HTML, CSS, JS.</li>
                            <li><span className="text-blue-600 font-semibold">AutoCAD Designing:</span> 3D building models with accurate layouts.</li>
                        </ul>
                    )}

                    {activeTab === "Education" && (
                        <ul className="mt-4 list-disc list-inside space-y-2">
                            <li><span>2022-2025:</span> Undergraduate at AIUB</li>
                            <li><span>2020:</span> HSC from Police Lines School & College, Rangpur</li>
                            <li><span>2018:</span> SSC from Setabgonj Ideal Academy, Dinajpur</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
