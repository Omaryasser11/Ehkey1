// hooks/useServices.js
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { productListState } from '../../store/index';
import APIClient from '../../services/api-service'; // Adjust path as necessary

const apiClient = new APIClient('/packages'); // Initialize with your desired endpoint

const useServices = () => {
    const [productList, setProductList] = useRecoilState(productListState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await apiClient.get();
            setProductList(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []); // Empty dependency array to run only once on mount

    return {
        productList,
        loading,
        error,
        fetchProducts,
    };
};

export default useServices;
