import React from "react"
import "./styles/gallery.css"
import GHList from "./List/GHList"
import GHCard from "./GHCard";
import Modal from "./modal";
export default function Gallery(){
    const[ModalImage,setModalImage]=React.useState("")
    const[modal,setModal]=React.useState(false)
    let OpenModal=modal && <Modal closeModal={setModal} image={ModalImage}/>
    function openModal(imagesrc){
        setModalImage(imagesrc)
        setModal(!modal);
    }
    const[items,setitems]=React.useState(GHList);
    function filterCateg(categitem,GHList){
        console.log(items)
        setitems(GHList);
        const updateitem=GHList.filter((Data)=>{
            return(Data.category==categitem)
        });
        setitems(updateitem)
    }
    const Card=items.map(Data=>{
        return(
            <GHCard
            image={Data.image}
            open={()=>openModal(Data.image)}
            />
        )
    })
    
    return (
        <div className="Gallery-Container">
            {OpenModal}
            <div className="Gallery-Head"> 
                <h1>GALLERY</h1>
                <hr></hr>
            </div>
            
            <div className="Gallery-Content">
                <div className="collage-index">
                    <h3 onClick={()=>setitems(GHList)}>All</h3>
                    <h3 onClick={()=>filterCateg('Electrical',GHList)}>Electrical</h3>
                    <h3 onClick={()=>filterCateg('Fire Station',GHList)}>Fire Station</h3>
                    <h3 onClick={()=>filterCateg('School',GHList)}>School</h3>
                </div>
                <div className="collage">
                    <div className="collage-row">
                        {Card}
                    </div>
                </div>
                
            </div>
        </div>
    )
}