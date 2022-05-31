import React from 'react';
import { Row } from "react-bootstrap";
import Loading from "../../../Components/Loading/Loading";
import useProducts from "../../Shared/Hooks/useProducts";
import SingleTool from "./SingleTool/SingleTool";

const NewArrivals = () => {

    const [tools] = useProducts();
    const newTools = tools.slice(-6, tools.length);

    return (
        <div>
            <div className="container py-2">
                <h2 className="text-center mt-4 mb-2"><span className="text-dark">New</span> <span className="text-danger">Arrivals</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        !newTools ? <Loading></Loading> :
                            newTools.map(tool => <SingleTool key={tool._id} tool={tool}></SingleTool>
                            )
                    }
                </Row>
            </div>
        </div>
    );
};

export default NewArrivals;