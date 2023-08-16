import React from 'react'
import CardStructure from './CardStructure';
import "./Card.css";


let data = [{
    img: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
    variety: "Beautiful Plant Varieties",
    Description1: "Luctus nec ullamcorper mattis,",
    Description2: "pulvinar dapibus leo",
    link: "SEE COLLECTION"
},
{
    img: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
    variety: "Trendy Cactus Varieties",
    Description1: "Luctus nec ullamcorper mattis,",
    Description2: "pulvinar dapibus leo",
    link: "SEE COLLECTION"
}, {
    img: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
    variety: "Gardening Accessories",
    Description1: "Luctus nec ullamcorper mattis,",
    Description2: "pulvinar dapibus leo",
    link: "SEE COLLECTION"
}, {
    img: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
    variety: "Boncellensis Secullant",
    Description1: "Luctus nec ullamcorper mattis,",
    Description2: "pulvinar dapibus leo",
    link: "SEE COLLECTION"
}, {
    img: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg",
    variety: "Money Plant",
    Description1: "Luctus nec ullamcorper mattis,",
    Description2: "pulvinar dapibus leo",
    link: "SEE COLLECTION"
}, {
    img: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg",
    variety: "Star Cactus",
    Description1: "Luctus nec ullamcorper mattis,",
    Description2: "pulvinar dapibus leo",
    link: "SEE COLLECTION"
}]

function Cardmap() {
    return (
        <><div className='card-flex'>
            {data.map((e, i) => {
                return <CardStructure cardData={e} key={i} />;
            })}
        </div>
        </>
    )
}

export default Cardmap