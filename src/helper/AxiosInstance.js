import axios from 'axios';

export const API_ROOT = "https://639d448e16d1763ab15be5cb.mockapi.io/api/pets/products";

export const getProducts = async() => {
    try {
        const response = await axios.get(API_ROOT);
        // console.log(response.data);

        return response.data;
    } catch (error) {


        console.error('error', error);
    }
}
export const getProductById = async(id) => {
        try {
            const response = await axios.get(`API_ROOT/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('error', error);
        }
    }
    // export const getProductById = async(id) => {
    //     try {
    //         const response = await axios.get(`API_ROOT/${id}`);
    //         console.log(response.data);
    //         return response.data;
    //     } catch (error) {
    //         console.error('error', error);
    //     }
    // }