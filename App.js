import React from "react"
import Header from "./components/Header"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Header />
            <Interests />
            <Footer />
        </div>
    )
}