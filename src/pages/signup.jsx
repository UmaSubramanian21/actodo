import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup(props) {
    // store useNavaigate function to variable
    var navigate = useNavigate()

    // get the array values from app component in index.js
    var logindatas = props.logindatas
    var setlogindatas = props.setlogindatas

    var [Susername, setSusername] = useState()
    var [Spassword, setSpassword] = useState()

    function handleSusername(evt) {
        setSusername(evt.target.value)
    }
    function handleSpassword(evt) {
        setSpassword(evt.target.value)
    }
    function signUpBtn() {
        setlogindatas([...logindatas, {
            uname: Susername,
            password: Spassword
        }])
        console.log("successfully added")
        navigate('/')
    }
    return (
        <>
            <div className="bg-black p-10 ">
                <div className="bg-[#EFEFEF] p-10 rounded-md ">
                    <h1 className="text-3xl font-medium">Hey hi</h1>
                    <p className="my-2">Sign up here :)</p>
                    <div className="flex flex-col gap-2 my-2">
                        <input
                            type="text"
                            onChange={handleSusername}
                            placeholder="Username"
                            className="w-52 border outline-yellow-500 border-black rounded p-1 bg-transparent">
                        </input>
                        <input
                            type="text"
                            onChange={handleSpassword}
                            placeholder="Password"
                            className="w-52 border outline-yellow-500 border-black rounded p-1 bg-transparent">
                        </input>
                        <input
                            type="text"
                            placeholder="Confirm Password"
                            className="w-52 border outline-yellow-500 border-black rounded p-1 bg-transparent">
                        </input>
                    </div>
                    <button
                        onClick={signUpBtn}
                        className="bg-yellow-500 rounded-md px-4 py-2 my-2">Sign Up</button>
                    <p>Already have an account ?  <Link to={'/'} className='underline'>Login</Link> </p>
                </div>
            </div>
        </>
    )
}
export default Signup