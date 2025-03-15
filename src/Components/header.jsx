import { useLocation } from "react-router-dom"

function Header() {
    const data = useLocation()
    console.log(data.state.user)
    return (
        <>
            <h1 className=" text-3xl font-bold">Hello ,{data.state.user} 👋! </h1>
            <p>I help you manage your activities :)</p>
        </>
    )
}

export default Header