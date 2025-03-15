import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import Signup from "./pages/signup"
import Landing from "./pages/landing"
import { useState } from "react"

function App() {

    // username,password array
    const [logindatas, setlogindatas] = useState(
        [
            {
                uname: "us",
                password: "123"
            }
        ]
    )
    console.log(logindatas)
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login logindatas={logindatas} setlogindatas={setlogindatas} />}></Route>
                    <Route path='/signup' element={<Signup logindatas={logindatas} setlogindatas={setlogindatas} />}></Route>
                    <Route path="/landing" element={<Landing />} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App