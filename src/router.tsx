import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Materiales, { loader as materialesLoader } from "./views/Materiales";
import NewMaterial from "./views/NewMaterial";
import Inventario from "./views/Inventario";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Materiales />,
                loader: materialesLoader
            },
            {
                path: "materiales/nuevo",
                element: <NewMaterial />
            }
        ]
    },
    {
        path: '/inv',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inventario />
            }
        ]
    }
])