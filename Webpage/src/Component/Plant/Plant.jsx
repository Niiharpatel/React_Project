import React, { useEffect, useState } from 'react';
import './Plant.css';
import NavigationBar from '../Navbar/NavigationBar';
import Footer from '../Footer/Footer';
import PlantData from '../../Utils/PlantData.json';
import CardStructure from '../Card/CardStructure';

export default function Plant() {

    let [plantData, setPlantData] = useState([]);

    let [searchText, setSearchText] = useState('');

    useEffect(() => {

        setPlantData(PlantData?.filter?.((e) => e?.category === "plant"));

        let filterData = PlantData?.filter?.((e) => {
            return e?.name?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.())  // for search data
        });

        setPlantData(filterData?.filter?.((e) => e?.category === "plant"));  // for show only plant data 


    }, [searchText]);

    return (
        <>
            {/* Header-------------------------------- */}
            <div className="plant-navbar">
                <NavigationBar search={true} setSearchText={setSearchText} />
            </div>


            <div className="plant-main">
                {plantData.map((e) => {
                    return <CardStructure data={e} />
                })}
            </div>



            {/* Footer------------------------------- */}
            <div className="plant-footer">
                <Footer />
            </div>
        </>
    )
}
