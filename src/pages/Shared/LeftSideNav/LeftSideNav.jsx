import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  // Filter news for sports category (category_id: "4")
  const sportsNews = news.filter((aNews) => aNews.category_id === "4");

  // Function to limit details to 50 words
  const truncateDetails = (text, wordLimit) => {
    return (
      text.split(" ").slice(0, wordLimit).join(" ") +
      (text.split(" ").length > wordLimit ? "..." : "")
    );
  };

  return (
    <div>
      <h2 className="text-xl font-medium text-gray-700">All Category</h2>
      <div className="flex flex-col space-y-5 items-center justify-center mt-5">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="transition-all delay-75 hover:bg-gray-200 px-5 py-2 text-gray-700"
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Sports News Section */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold">Sports News</h3>
        {sportsNews.map((aNews) => (
          <div key={aNews._id} className="mt-3 p-4 border rounded shadow-sm">
            <img
              src={aNews.thumbnail_url}
              alt={aNews.title}
              className="w-full h-48 object-cover rounded"
            />
            {/* Title as a clickable link */}
            <Link
              to={`/news/${aNews._id}`}
              className="text-xl font-medium mt-2  hover:underline"
            >
              {aNews.title}
            </Link>

            <p className="text-gray-600 mt-2">
              {truncateDetails(aNews.details, 50)}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Author: {aNews.author?.name ? aNews.author.name : "Desk Report"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
