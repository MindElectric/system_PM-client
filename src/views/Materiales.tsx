import { Link, useLoaderData } from "react-router-dom"
import { getMateriales } from "../services/ProductService"
import ProductDetails from "../Components/ProductDetails"


export async function loader() {
    const materiales = await getMateriales()
    //console.log(materiales)
    return materiales
}



const Materiales = () => {
    const materiales = useLoaderData();
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Materiales</h2>
                <Link
                    to="materiales/nuevo"
                    className="rounded-sm bg-green-400 p-3 text-sm font-bold text-white shadow hover:bg-green-600"
                >
                    Agregar Material
                </Link>
                <Link
                    to="/inv"
                    className="rounded-sm bg-green-400 p-3 text-sm font-bold text-white shadow hover:bg-green-600"
                >
                    Ir a inventario
                </Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Descripcion</th>
                            <th className="p-2">Codigo</th>
                            <th className="p-2">Cantidad</th>
                            <th className="p-2">Costo</th>
                            <th className="p-2">Material</th>
                            <th className="p-2">Marca</th>
                            <th className="p-2">Proveedores</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {materiales.map(material => (
                            <ProductDetails
                                key={material.id}
                                material={material}
                            />
                        ))}

                    </tbody>

                </table>
            </div>

        </>
    )
}

export default Materiales
