import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    var navigate = useNavigate()
    // get the array values from app component in index.js

    var logindatas = props.logindatas

    // use state for error msg
    const [suggestion, setSuggestion] = useState(true)
    const [Eusername, setEusername] = useState()
    const [Epassword, setEpassword] = useState()

    function handleEuname(evt) {
        setEusername(evt.target.value)
    }
    function handleEpwd(evt) {
        setEpassword(evt.target.value)
    }

    // login button function
    function loginbtn() {

        var userFound = false
        logindatas.forEach(
            function (item) {
                if (item.uname === Eusername && item.password === Epassword) {
                    console.log("login success")
                    userFound = true
                    navigate('/landing', { state: { user: Eusername } })
                }
            }
        )
        if (userFound === false) {
            console.log("Login failed")
            setSuggestion(false)
        }
    }
    return (
        <>
            <div>
                <div className="bg-black p-10">
                    <div className="bg-[#EFEFEF] p-10 rounded">
                        <h1 className="text-3xl font-medium">Hey Hi</h1>
                        <p className="my-3">
                            {suggestion ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">First signup please</p>}</p>
                        <div className="flex flex-col gap-3">
                            <input type="text"
                                onChange={handleEuname}
                                placeholder="Username"
                                className="w-52 p-1 bg-transparent border border-black rounded-md outline-purple-500"></input>
                            <input type="text"
                                onChange={handleEpwd}
                                placeholder="Password"
                                className="w-52 p-1 bg-transparent border border-black rounded-md outline-purple-500"></input>
                        </div>
                        <button
                            onClick={loginbtn}
                            className="bg-purple-500 py-2 px-4 my-2 rounded-md text-white">Login</button>
                        <p> Don't have an account ? <Link to={'/signup'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login