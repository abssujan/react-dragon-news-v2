import { useParams } from "react-router-dom";
import BreakingNews from "../Home/BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            
            <div className="grid grid-cols-4 mt-8">
                <div className=" col-span-3">
                    <h2>News details is coming</h2>
                    {id}
                    </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;