import { useState } from "react"

function FormContainer(props) {
    const activitylist = props.activitylist
    const setActivityList = props.setActivityList

    // store user's activity
    const [userActivity, setUserActivity] = useState("")

    function userAct(evt) {
        setUserActivity(evt.target.value)
        console.log(userActivity)
    }

    // 
    function addAct() {
        setActivityList([...activitylist, {
            id: activitylist.length + 1,
            activity: userActivity
        }])
        setUserActivity()
    }
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Manage Activities</h1>
                <div>
                    <input type="text" className="border border-black p-1 outline-none bg-transparent" placeholder="Next Activity ? " onChange={userAct}></input>
                    <button className="text-white bg-black p-1 border border-black" onClick={addAct}>Add</button>
                </div>
            </div>
        </>
    )
}
export default FormContainer