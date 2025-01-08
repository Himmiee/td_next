const Newsletter = () => {
  return (
    <div className="bg-primary-60 py-6 px-4 sm:px-8 my-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">NEWSLETTER</h3>
          <p className="text-sm text-gray-600">Stay Up to Date</p>
        </div>
        <div className="relative flex items-center w-full sm:w-auto">
          <input
            type="email"
            placeholder="Your Email..."
            className="w-full sm:w-[796px] py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary-100 text-white rounded-full w-10 h-10 flex items-center justify-center  focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.5 6.5m6.5-6.5l-6.5-6.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
