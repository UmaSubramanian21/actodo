import Header from "../Components/header"
import Card from "../Components/Card"
import TodoContainer from "../Components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing() {
    // time
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    console.log(currentTime); // Output: e.g., "3:00:00 PM"
    


    const data = useLocation()
    console.log(data.state.user)
    return (
        <>
            <div className="bg-black p-16">
                {/* white screen div */}
                <div className="bg-[#EFEFEF] p-10 rounded-md">
                    <Header />
                    {/* card section */}
                    <div className="flex justify-between flex-wrap gap-7 m-3">
                        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                        <Card bgcolor={"#FD6663"} title={"December"} subtitle={currentTime} />
                        <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                    </div>
                    {/* todo activity sections */}
                    <div>
                        {/* user's todo activity entry form */}
                        {/* list all the activity section */}
                        <div>
                            <TodoContainer />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Landing
