import React from 'react';
import {Container} from "react-bootstrap";

const Items = ({list}) => {
    return (
        <div>
            <div className="bg-light ">
                <div className="row ">
                    <div className="pt-0 col-md-12"></div>
                </div>
            </div>
            <section
                className=""
                style={{
                    marginTop: '60px',
                    width: '100%',
                }}
            >
                <Container>
                    검색{list}
                </Container>

            </section>
        </div>
    );
};

export default Items;