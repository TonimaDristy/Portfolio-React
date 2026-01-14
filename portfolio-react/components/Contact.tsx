// components/Contact.js
"use client";
export default function Contact() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzll7wOMtERJa3chSrx1oNG6esgJyNNa2ekK2juxh5JeVy5JYKEo-L83sqExyCi5eTZkw/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        try {
            await fetch(scriptURL, { method: "POST", body: data });
            alert("Success!");
            form.reset();
        } catch (err) {
            console.error("Error!", err.message);
        }
    };

    return (
        <div id="Contact" className="py-20">
            <div className="container mx-auto flex flex-wrap gap-10">
                <div className="flex-1">
                    <h1 className="text-4xl text-blue-400 font-semibold mb-6">Contact Me</h1>
                    <p><i className="fa-regular fa-message"></i> tidristy477@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> 01767022650</p>
                    <div className="flex space-x-4 mt-4 text-2xl">
                        <a href="https://www.linkedin.com/in/tonima-dristy650"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/tonima-dristy650"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.facebook.com/TI.Dristy.33"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <a href="/CV.pdf" download className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-lg">Download CV</a>
                </div>

                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="text" name="Name" placeholder="Your Name" required className="p-4 rounded bg-gray-700 text-white" />
                        <input type="email" name="Email" placeholder="Your Email" required className="p-4 rounded bg-gray-700 text-white" />
                        <textarea name="Massage" rows="6" placeholder="Your Message" className="p-4 rounded bg-gray-700 text-white"></textarea>
                        <button type="submit" className="bg-blue-500 py-3 rounded-lg text-white font-semibold">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
