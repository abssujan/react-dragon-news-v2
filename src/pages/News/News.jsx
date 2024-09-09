import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BreakingNews from "../Home/BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        fetch('/news.json')
            .then((res) => res.json())
            .then((data) => {
                const selectedNews = data.find((news) => news._id === id);
                setNewsData(selectedNews);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    // Function to render stars based on the rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {/* Full Stars */}
                {[...Array(fullStars)].map((_, index) => (
                    <span key={index} className="text-yellow-500 text-lg">★</span>
                ))}
                {/* Half Star */}
                {halfStars === 1 && <span className="text-yellow-500 text-lg">☆</span>}
                {/* Empty Stars */}
                {[...Array(emptyStars)].map((_, index) => (
                    <span key={index} className="text-gray-300 text-lg">★</span>
                ))}
            </>
        );
    };

    return (
        <div>
            <Header />
            <BreakingNews />
            <NavBar />
            <div className="grid grid-cols-4 mt-8 gap-4 px-6">
                <div className="col-span-3">
                    {newsData ? (
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">{newsData.title}</h2>
                            <img 
                                src={newsData.image_url} 
                                alt={newsData.title} 
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                            <p className="text-gray-700 text-lg mb-4">{newsData.details}</p>

                            <div className="author-info flex items-center mb-6">
                                <img 
                                    src={newsData.author.img} 
                                    alt={newsData.author.name} 
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="text-gray-800 font-medium">Written by: {newsData.author.name}</p>
                                    <p className="text-gray-500 text-sm">Published on: {new Date(newsData.author.published_date).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="rating flex items-center mb-4">
                                <div className="flex items-center">
                                    {renderStars(newsData.rating.number)}
                                </div>
                                <span className="ml-2 text-gray-600 text-lg">
                                    {newsData.rating.number} ({newsData.rating.badge})
                                </span>
                            </div>

                            <div className="text-gray-600 text-sm">
                                Total views: <span className="font-semibold">{newsData.total_view}</span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Loading news details...</p>
                    )}
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;
