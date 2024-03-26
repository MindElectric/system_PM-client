import axios from "axios"

export async function getMateriales() {
    try {
        const url = `${import.meta.env.VITE_API_URL}api/material`;
        const { data } = await axios(url);
        const result = data.data;
        return result
    } catch (error) {
        console.log(error)
    }
}

export async function updateMaterialCantidad(data, id) {
    try {
        console.log(data);
        console.log(id)
        let jsonData = { "cantidad": data };


        const url = `${import.meta.env.VITE_API_URL}api/material/${id}`;
        await axios.put(url, jsonData)
    } catch (error) {
        console.log(error)
    }
}

//TODO: Agregar funcion para modificar todos los campos de material