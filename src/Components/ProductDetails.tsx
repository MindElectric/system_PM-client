import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { updateMaterialCantidad } from '../services/ProductService';

//import { ActionFunctionArgs } from 'react-router-dom'


// export async function action({ request }: ActionFunctionArgs) {
//     const data = 
// }

const ProductDetails = ({ material,
    handleToast
    //setIsBoxVisible 
}) => {
    const [materialCantidad, setMaterialCantidad] = useState(material.cantidad);
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [isBoxRendered, setIsBoxRendered] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (isBoxVisible) {
            setIsBoxRendered(true);
            setAnimationClass('animate-slide-down');
        } else {
            setAnimationClass('animate-slide-up');
            const timer = setTimeout(() => {
                setIsBoxRendered(false);
            }, 500); // Matches the duration of your animation
            return () => clearTimeout(timer);
        }
    }, [isBoxVisible]);

    const decrease = () => {
        setMaterialCantidad(materialCantidad - 1);
        setIsBoxVisible(true);
    };

    const increase = () => {
        setMaterialCantidad(materialCantidad + 1);
        setIsBoxVisible(true);
    };

    const handleClick = () => {
        updateMaterialCantidad(materialCantidad, material.id)
        handleToast()
        setIsBoxVisible(false)
        //toast("Cambios hechos satisfactoriamente")
    }

    return (
        <>
            <tr className="border-b">
                <td className="p-3 text-lg text-gray-800">
                    {material.descripcion}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {material.codigo}
                </td>
                <td className="p-2 text-lg text-gray-800 flex justify-around items-center">
                    <button id='restar-cantidad'
                        aria-label='Restar cantidad de material'
                        onClick={() => decrease()}
                        className="bg-green-400 rounded-full hover:bg-green-600 p-2 h-10 w-10  flex justify-center items-center"><FontAwesomeIcon icon={faMinus} color='white' /></button>
                    <div className="text-center">
                        {materialCantidad}
                    </div>
                    <button id='sumar-cantidad'
                        aria-label='Aumentar cantidad de material'
                        onClick={() => increase()}
                        className="bg-green-400 rounded-full hover:bg-green-600 p-2 h-10 w-10  flex justify-center items-center"><FontAwesomeIcon icon={faPlus} color='white' /></button>
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    {material.costo}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    {material.categoriaMaterial.nombre}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    {material.marca.nombre}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    {material.proveedores.map(materia =>
                        materia.nombre
                    )}
                </td>
            </tr>


            {isBoxRendered && (
                <tr>
                    <td colSpan={7} className={`h-14 bg-slate-50 ${animationClass}`}>
                        <div className="flex justify-end slide-down-box">
                            <input
                                id='confirmar-cantidad'
                                type='submit'
                                className='bg-green-400 rounded-md p-2 text-white hover:bg-green-500 cursor-pointer'
                                value="Aceptar Cambio"
                                onClick={() => {
                                    handleClick()
                                }}
                            />
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}

export default ProductDetails
