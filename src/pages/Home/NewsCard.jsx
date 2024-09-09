import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id, rating, total_view } = news;
  // Function to limit details to 50 words
  const truncateDetails = (text, wordLimit) => {
    return (
      text.split(" ").slice(0, wordLimit).join(" ") +
      (text.split(" ").length > wordLimit ? "..." : "")
    );
  };
  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, index) => (
          <span key={index} className="text-yellow-500 text-lg">
            ★
          </span>
        ))}
        {/* Half Star */}
        {halfStars === 1 && <span className="text-yellow-500 text-lg">☆</span>}
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index} className="text-gray-300 text-lg">
            ★
          </span>
        ))}
      </>
    );
  };
  return (
    <div>
      <div className=" mb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image_url} alt="" />
        </a>
        <div className="p-5">
          <div className="mb-4">
            <Link
              to={`/news/${_id}`}
              className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-black"
            >
              {title}
            </Link>
          </div>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {truncateDetails(details, 80)}
          </p>
          <Link
            to={`/news/${_id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="flex items-center justify-between px-5 py-5 border-t">
          {/* rating */}
          <div className="rating flex items-center ">
            <div className="flex items-center">
              {renderStars(rating.number)}
            </div>
            <span className="ml-2 text-gray-600 text-lg">
              {rating.number} ({rating.badge})
            </span>
          </div>
          {/*  */}
          <div className="text-gray-600 text-sm">
            Total views: <span className="font-semibold">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
