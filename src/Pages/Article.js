import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ArticleList from "./Components/List/ArticleList";
import "./Components/styles/article.css"
export default function Article(props){
    console.log(props);
    const blogs=ArticleList.map(Data=>{
        return (
            <Blog
            key={Data.id}
            {...Data}
            />
        )
    })
    const banner=ArticleList.map(Image=>{
        return(
            <div className="Header">
                {Image.name=="Inside" && <img src={Image.header}/>}
            </div>
        )
    })
    return(
        <div>
            <div className="Article">
                <Navbar/>
                {banner}
                {blogs}
            </div>
            
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}