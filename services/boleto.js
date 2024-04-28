import axios from "axios"

export const addBoleto = async (data) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/boleto/crear`, data)
}
