import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button
        type="button"
        className=" w-40 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Breaking News
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="mr-10" to='/'>I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
