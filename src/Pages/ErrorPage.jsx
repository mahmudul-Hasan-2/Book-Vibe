import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-5 overflow-hidden font-sans">
      {/* Visual Section */}
      <div className="relative mb-8">
        {/* Soft Background Pulse */}
        <div className="absolute inset-0 bg-blue-50 rounded-full scale-150 blur-3xl animate-pulse opacity-60"></div>

        {/* Static 404 Text (No Bounce) */}
        <h1 className="relative text-[10rem] md:text-[15rem] font-black text-gray-900 leading-none tracking-tighter">
          4<span className="text-blue-600">0</span>4
        </h1>

        {/* Subtle Bottom Shadow Pulse */}
        <div className="w-3/4 h-3 bg-gray-100 rounded-[100%] blur-md mx-auto mt-2 animate-pulse"></div>
      </div>

      {/* Message Section */}
      <div className="text-center z-10 space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-lg max-w-sm mx-auto">
          The link you followed might be broken, or the page may have been
          removed.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="mt-10">
        <Link
          to="/"
          className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-gray-900 rounded-xl hover:bg-blue-600 hover:shadow-xl active:scale-95"
        >
          <span>Back to Homepage</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      {/* Decorative Footer Elements */}
      <div className="mt-20 flex gap-4 text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
        <span>Error_404</span>
        <span className="text-blue-200">•</span>
        <span>Route_Undefined</span>
      </div>
    </div>
  );
};

export default ErrorPage;
