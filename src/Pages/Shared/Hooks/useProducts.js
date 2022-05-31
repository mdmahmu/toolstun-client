import { useEffect, useState } from 'react';

const useProducts = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setTools(data));

    }, [tools]);

    return [tools];
};

export default useProducts;