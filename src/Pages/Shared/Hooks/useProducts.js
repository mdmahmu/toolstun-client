import { useState } from 'react';
import { Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../../../Components/Loading/Loading";

const useProducts = () => {

    const [tools, setTools] = useState([]);
    const [show, setShow] = useState(true);

    const url = `http://localhost:5000/products`;

    const { isLoading, error, data, refetch } = useQuery('findingMyOrders', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (error) {
        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh no! You got an error!</Alert.Heading>
                    <p>Error : {error.message}</p>
                </Alert>
            );
        }
    }
    setTools(data);
    console.log(typeof (tools));
    return [tools, refetch];
};

export default useProducts;