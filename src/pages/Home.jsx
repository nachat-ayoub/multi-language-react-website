import { site_data } from "../utils";

const Home = ({ lang }) => {
  return (
    <div className="flex flex-col justify-start items-center flex-1 p-6">
      <div className="w-full py-20 px-2 text-center bg-blue-200 rounded shadow">
        <p className="text-3xl">{site_data[lang].welcom.home}</p>
      </div>
      <img
        className="max-w-lg rounded shadow border border-gray-200 mt-6"
        src={site_data[lang].image}
        alt="services banner"
      />
    </div>
  );
};

export default Home;
