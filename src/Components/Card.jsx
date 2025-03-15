function Card(props) {
    return (
        <>
            <div style={{ backgroundColor: props.bgcolor }} className=" text-center px-10 py-5 rounded-md font-bold flex-grow">
                <h1 className=" text-2xl" >{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        </>
    )
}
export default Card