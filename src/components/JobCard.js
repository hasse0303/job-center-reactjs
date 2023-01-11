import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    photoUrls: ["1.jpg"],
    featured: true,
    category: "Media",
    title: "Video Editor",
    address: {
      city: "Phnom Penh",
      country: "Cambodia",
    },
    jobType: "Full-Time",
    salary: 1000,
    salaryType: "monthly",
    companyWebsite: "www.youtube.com",
  },
  {
    id: 16,
    photoUrls: ["1.jpg"],
    featured: true,
    category: "Media",
    title: "Video Editor",
    address: {
      city: "Phnom Penh",
      country: "Cambodia",
    },
    jobType: "Full-Time",
    salary: 1000,
    salaryType: "monthly",
    companyWebsite: "www.youtube.com",
  },
  {
    id: 14,
    photoUrls: ["1.jpg"],
    featured: false,
    category: "Media",
    title: "Video Editor",
    address: {
      city: "Phnom Penh",
      country: "Cambodia",
    },
    jobType: "Full-Time",
    salary: 1000,
    salaryType: "monthly",
    companyWebsite: "www.youtube.com",
  },
  {
    id: 13,
    photoUrls: ["1.jpg"],
    featured: true,
    category: "Media",
    title: "Video Editor",
    address: {
      city: "Phnom Penh",
      country: "Cambodia",
    },
    jobType: "Full-Time",
    salary: 1000,
    salaryType: "monthly",
    companyWebsite: "www.youtube.com",
  },
  {
    id: 12,
    photoUrls: ["1.jpg"],
    featured: true,
    category: "Media",
    title: "Video Editor",
    address: {
      city: "Phnom Penh",
      country: "Cambodia",
    },
    jobType: "Full-Time",
    salary: 1000,
    salaryType: "monthly",
    companyWebsite: "www.youtube.com",
  },
  {
    id: 11,
    photoUrls: ["1.jpg"],
    featured: false,
    category: "Media",
    title: "Video Editor",
    address: {
      city: "Phnom Penh",
      country: "Cambodia",
    },
    jobType: "Full-Time",
    salary: 1000,
    salaryType: "monthly",
    companyWebsite:
      "https://www.facebook.com/photo/?fbid=532359748676949&set=a.106405637939031",
  },
];
function JobCard() {
  return (
    <div>
      <ul className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {jobs.length &&
          jobs.map((job) => (
            <li
              key={job.id}
              className="bg-white rounded shadow-sm w-full max-w-sm mx-auto"
            >
              <div className="relative">
                <img
                  src={require(`../assets/${job.photoUrls[0]}`)}
                  alt="img"
                  className="w-full h-52 rounded-t object-cover object-center"
                />
                {job.featured && (
                  <div className="absolute top-10 -right-2">
                    <div className="w-24 h-7 bg-red-500 text-white shadow rounded-l font-bold uppercase flex justify-center items-center">
                      Featured
                    </div>
                    <div className="absolute right-0 arrow-right-top"></div>
                  </div>
                )}
              </div>
              <div className="border-b border-gray-100 p-3 space-y-4">
                <p className="font-bold text-sm text-gray-400">
                  {job.category}
                </p>
                <Link
                  to="job detail"
                  className="font-bold text-xl focus: outline-none"
                >
                  {job.title}
                </Link>
                <div className="flex justify-between items-center capitalize text-lg">
                  <p className="text-gray-900">{job.address.city}</p>
                  <p className="bg-teal-500 text-white px-1 py-px font-bold text-sm rounded ">
                    {job.jobType}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <svg
                      data-bs-toggle="collapse"
                      data-bs-target={`#tooltip-${job.id}`}
                      aria-expanded="true"
                      aria-controls={`tooltip-${job.id}`}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      />
                    </svg>
                    <div
                      id={`tooltip-${job.id}`}
                      className="collapse absolute -top-52 left-0 bg-gray-900 text-white rounded py-4 px-6 space-y-2 text-center text-sm"
                    >
                      <QRCodeSVG
                        value={job.companyWebsite}
                        className="border-2 border-white p-px"
                      />
                      <p>Scan QRCode</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="flex items-center space-x-3">
                  <p className="text-bold text-lg">
                    ${job.salary}{" "}
                    <span className="text-xs">
                      {job.salaryType === "annually"
                        ? "P.A"
                        : job.salaryType === "monthly"
                        ? "P.M"
                        : "P.H"}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default JobCard;
