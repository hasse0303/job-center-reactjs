import { Link } from "react-router-dom";
function Navbar({ toggle }) {
  const handleToggle = () => {
    toggle();
  };
  return (
    <div className="flex items-center h-auto bg-white">
      <div className="flex justify-between items-center p-10 w-full 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <div className="text-gray-900 uppercase text-2xl font-serif font-bold">
          <p>
            job <span className="text-teal-500">center</span>
          </p>
        </div>
        <div className=" hidden md:flex font-serif text-gray-900 text-lg font-semibold space-x-6">
          <Link to="/" className="focus:outline-none">
            Home
          </Link>
          <p>|</p>
          <Link to="/search" className="focus:outline-none">
            Search
          </Link>
          <p>|</p>
          <Link to="/contact" className="focus:outline-none">
            Contact
          </Link>
          <p>|</p>
          <Link to="/" className="focus:outline-none relative">
            <button
              id="button"
              className="focus:outline-none bg-teal-500 text-white rounded-full py-1 px-3"
            >
              Post Job
            </button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
