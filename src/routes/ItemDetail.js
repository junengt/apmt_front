import React from 'react';
import {useParams} from "react-router-dom";

const ItemDetail = () => {
    const param = useParams();

    return (
        <>
            <div className="bg-light ">
                <div className="row ">
                    <div className="pt-0 col-md-12"></div>
                </div>
            </div>
            <section
                style={{
                    marginTop: '60px',
                    height: '560px',
                    width: '100%',
                }}
            >상품 상세{param.id}</section>
        </>
    );
};

export default ItemDetail;