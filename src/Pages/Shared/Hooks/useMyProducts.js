import { useEffect, useState } from 'react';

const useMyProducts = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch(`https://nameless-headland-97121.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setTools(data));

    }, [tools]);

    return [tools];
};

export default useMyProducts;