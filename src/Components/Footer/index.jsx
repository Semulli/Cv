const Footer = () => {
    return (
        <footer className="bg-pink-300 text-pink-800 py-6 px-4 text-center border-t-4 border-t-pink-800">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <a
                    href="https://github.com"
                    className="flex items-center gap-2 text-pink-900 font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path
                            d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.95c.58.1.79-.25.79-.56v-2.05c-3.21.7-3.89-1.55-3.89-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.41-1.26.74-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.51.11-3.16 0 0 .97-.31 3.18 1.18a11.08 11.08 0 0 1 5.8 0C17.63 4.1 18.6 4.4 18.6 4.4c.63 1.65.23 2.86.12 3.16.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.28 5.68.42.36.79 1.08.79 2.18v3.23c0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                    </svg>
                    Star on GitHub
                    <span className="bg-pink-200 text-pink-700 px-2 py-0.5 rounded-xl text-sm">75</span>
                </a>

                <div className="flex gap-4 text-pink-700 font-medium text-sm">
                    <a href="#" className="hover:underline">Code of Conduct</a>
                    <a href="#" className="hover:underline">Contributing</a>
                    <a href="#" className="hover:underline">Security</a>
                </div>
            </div>

            <p className="text-sm text-pink-600 mt-4">© 2025 Resume Builder. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
