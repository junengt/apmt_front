import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
const Home = () => {

    return (
        <>
            <div className="bg-light ">
                <div className="row ">
                    <div className="pt-0 col-md-12"></div>
                </div>
            </div>
            <section
                className="pt-4 banner"
                style={{
                    marginTop: '60px',
                    height: '560px',
                    width: '100%',
                }}
            >
                <div className="row">
                    <div className="pt-2 col-md-12">
                        <div className="text-center text-light text">
                            <h2 className="banner-header-text">AppleMart</h2>
                            <h3 className="banner-text">
                                {' '}
                                회원가입 후 서비스 이용이 가능합니다.
                            </h3>
                            <Link to="/auth">Let's start <i
                                className="banner-links-icons font-weight-normal fas fa-chevron-right"></i></Link>
                            <div className="banner-image-box">
                                <img
                                    style={{
                                        height: '394px',
                                        width: '847px',
                                    }}
                                    id="myImg"
                                    className="banner-image"
                                    alt="imgA"
                                    src="./images/index-banner.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="mt-3 mb-3 banner-two"
                style={{
                    height: '550px',
                    width: '100%',
                }}
            >
                <div className="row">
                    <div className="pt-2 col-md-12">
                        <div className="text-center text-black text">


                            <div className="banner-image-box">
                                <img
                                    style={{
                                        height: '500px',
                                        width: '100%',
                                        objectFit:'cover',

                                    }}
                                    id="myImg"
                                    className="banner-image"
                                    alt="imgA"
                                    src="./images/hero_imac__dqh65mwjj04m_large.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="mt-3 mb-3 banner-two"
                style={{
                    height: '550px',
                    width: '100%',
                }}
            >
                <div className="row">
                    <div className="pt-2 col-md-12">
                        <div className="text-center text-black text">


                            <div className="banner-image-box">
                                <img
                                    style={{
                                        height: '604px',
                                        width: '100%',
                                        objectFit:'cover',
                                    }}
                                    id="myImg"
                                    className="banner-image"
                                    alt="imgA"
                                    src="./images/iphone_12_updated__jepm2xpxncuy_large_2x.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
        ;
};

export default Home;
