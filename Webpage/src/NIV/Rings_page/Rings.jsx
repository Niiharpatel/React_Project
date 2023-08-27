import React, { useEffect, useState } from 'react';
import beauty_data from '../beauty_data.json';
import Rings_data_card from '../Rings_structure/Rings_data_card';
import NaviBar from '../Navbar/NaviBar';


function Rings() {
    let [ring, setRing] = useState([]);
    let [searchData, setSearchData] = useState('');

    useEffect(() => {

        setRing(beauty_data?.filter((e) => e?.gender === 'Male'));

        let filterData = beauty_data?.filter((e) => {
            return e?.name?.toLowerCase?.()?.includes?.(searchData?.toLowerCase?.());
        });

        setRing(filterData?.filter?.((e) => e?.gender === 'Male'));

    }, [searchData]);

    return (
        <>

            <NaviBar setSearchData={setSearchData} />

            <div className='d-flex justify-content-center gap-4'>

                {
                    ring.map((e) => {
                        return <Rings_data_card data={e} />;
                    })
                }
            </div>

        </>
    );
}

export default Rings;