import BreakingNews from "../Home/BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Category = () => {
    return (
        <div className="mt-10">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 gap-4">
                <div className=" col-span-3">
                    <h2 className="text-4xl">Working on Category</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Category;