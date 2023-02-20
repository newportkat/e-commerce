import React, { useEffect, useState } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Socials from "./components/Socials"
import Checkout from "./pages/Checkout"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Products from "./pages/Products"

const Layout = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }
    const toggleMenu = () => {
        setShowMobileMenu((prev) => !prev)
        scrollUp()
    }

    //disable scrolling
    if (showMobileMenu) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "visible"
    }

    const toggleCart = () => {
        setShowCart((prev) => !prev)
        scrollUp()
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar
                showMenu={showMobileMenu}
                toggleMenu={toggleMenu}
                showCart={showCart}
                toggleCart={toggleCart}
            />
            <div
                className={`flex flex-grow flex-col justify-center ${
                    showMobileMenu
                        ? `before:absolute before:h-full before:w-full before:brightness-50 before:backdrop-blur-sm before:content-['']`
                        : ""
                }`}
            >
                <Outlet />
            </div>
            <div
                className={`${
                    showMobileMenu
                        ? `before:absolute before:h-full before:w-full before:brightness-50 before:backdrop-blur-sm before:content-['']`
                        : ""
                }`}
            >
                <Socials />
                <Footer />
            </div>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products/:id",
                element: <Products />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ],
    },
])

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
