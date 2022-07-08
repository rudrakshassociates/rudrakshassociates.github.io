import Blog from "./Blog";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ArticleList from "./List/ArticleList";
export default function Article(){
    const blogs=ArticleList.map(Data=>{
        return (
            <Blog
            {...Data}
            />
        )
    })
    return(
        <div>
            <Navbar/>
            <div className="Header">

            </div>

            {blogs}

            <div>
            <Footer/>
            </div>
        </div>
    )
}