import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard"
import axios from "axios";
import landing__page__ecomm__image from "../../assets/images/landing__page__ecomm__image.png"
const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/categories");
      setCategoryList(response.data.categories);
    })();
  }, []);

    return (
      <>
        <header className="home__header">
          <div className="home__headings">
            <div className="home__heading">
              Your Overall Health Needs fulfilled,
            </div>
            <div className="home__heading">only @Fitkart</div>
          </div>
          <Link
            to="/Product"
            className="explore button m-8 p-4  txt-2xl txt-bold bg-violet-400 rounded-m"
          >
            Explore Collection
          </Link>
          <div className="home__landing__image">
            <img src={landing__page__ecomm__image} />
          </div>

          <main className="categories__container">
            {categoryList.map((category) => {
              return <CategoryCard category={category} key={category._id} />;
            })}
          </main>
        </header>
      </>
    );
};

export default Home;
