import { Link } from "react-router-dom";
import { site_data } from "../utils";

const Page_404 = ({ lang }) => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 p-6">
      <div className="flex justify-center items-center gap-4">
        <span className="text-6xl font-medium">404</span>
        <span className="h-24 w-1 bg-black"></span>
        <span className="text-lg font-medium">{site_data[lang].error_404}</span>
      </div>
      <Link
        className="mt-10 text-lg bg-blue-500 hover:bg-blue-600 text-white hover:text-blue-100 px-8 py-2 rounded hover:rounded-lg transition-all duration-300"
        to="/"
      >
        Back Home
      </Link>
    </div>
  );
};

export default Page_404;
