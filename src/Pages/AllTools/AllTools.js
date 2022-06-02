import React from 'react';
import { Row } from "react-bootstrap";
import Loading from "../../Components/Loading/Loading";
import SingleTools from "../Homepage/NewArrivals/SingleTool/SingleTool";
import useMyProducts from "../Shared/Hooks/useMyProducts";

const AllTools = () => {

    const [tools] = useMyProducts();

    return (
        <div className="container mb-4">
            <h2 className="text-center"><span className="text-dark">All</span> <span className="text-danger">Tools</span></h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    !tools ? <Loading></Loading> :
                        tools?.map(tool => <SingleTools key={tool._id} tool={tool}></SingleTools>)
                }
            </Row>
        </div>
    );
};

export default AllTools;