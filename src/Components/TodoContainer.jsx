import { useState } from "react"
import FormContainer from "./AddTodoForm"
import ListAct from "./ListAllAct"

function TodoContainer() {
    const [activitylist, setActivityList] = useState([
        {
            id: 1,
            activity: "Wake up at 4 am"
        },
        {
            id: 2,
            activity: "Revise Syllabus"
        }
    ])

    return (
        <>
            <div className="flex flex-wrap gap-5 items-center">
                <FormContainer activitylist={activitylist} setActivityList={setActivityList}/>
                <ListAct activitylist={activitylist} setActivityList={setActivityList} />
            </div>

        </>
    )
}
export default TodoContainer