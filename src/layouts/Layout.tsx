import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <header className="bg-green-400">
                <div className="py-5">
                    <h1 className="text-2xl font-bold text-black px-4">Sistema</h1>
                </div>

            </header>
            <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
