import Guideline from "../components/Guideline";
import JobCard from "../components/JobCard";
import MapBanner from "../components/MapBanner";

function Home() {
  return (
    <div>
      <div className="w-full h-map-height">
        <MapBanner />
      </div>
      <div className="px-10 2xl:px-0 2xl:w-10/12 2xl:mx-auto">
        <JobCard />
      </div>
      <div className="px-10 2xl:px-0 mt-10 bg-gray-50">
        <Guideline />
      </div>
    </div>
  );
}
export default Home;
