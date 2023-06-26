import axios from "axios"

export const getProducts = async ()=>{
    const response = await axios.get(import.meta.env.VITE_BASE_URL+'/products');
    return response.data.products;
}