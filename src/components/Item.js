import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Item = () => {
    return (
        <>
                <div className="" style={{margin:'1rem', padding:'1rem'}}>

                        <img className="product-image" src="images/compare_iphone_12_pro__gmn3556ju3am_large.jpg"
                             alt="Product image"/>


                    <div style={{paddingLeft:'5%', paddingRight:'5%' , margin:'0 auto', maxWidth:'330px' }} >
                        <p className="text-xl-start wrap-text" style={{marginBottom:'0.1rem'}}>48W 퀵 차져 멀티 충전기(아이폰 아이패드 맥북 노트북 충전기) ,타입 PD충전기, 고속 충전기, QC충전기 3.0</p>
                        <p className="text-lg-start small-text" style={{marginBottom:'0.1rem' ,justifyContent:'start'}}>경기도 광명시 소하동</p>
                            <Row>
                                <Col> <p className="text-lg-start">15,000원</p></Col>
                                <Col className='text-end'><p>heart 1</p></Col>
                            </Row>
                    </div>
                </div>
        </>
    );
};

export default Item;