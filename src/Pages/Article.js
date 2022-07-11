import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import ArticleList from "./Components/List/ArticleList";
import "./Components/styles/article.css"
import Nav from "./Components/WhiteBGNav";
export default function Article(){
    const location=window.location;
    console.log(location.search)
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
                {Image.name==location.search && <img src={Image.header}/>}
            </div>
        )
    })
    return(
        <div onLoad={window.scrollTo(0,0)}>
            <div className="Article">
                <Nav/>
                {banner}
                {blogs}
            </div>
            
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}