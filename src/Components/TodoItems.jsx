function TodoItems(props) {
    const setActivityList = props.setActivityList
    const activitylist = props.activitylist

    function handledlt(removeid) {
        var tempArr = activitylist.filter(
            function (data) {
                if (data.id === removeid) {
                    return false
                }
                else {
                    return true
                }

            }
        )

        setActivityList(tempArr)

    }

    return (

        <>
            <div className="flex justify-between">
                <p>{props.index + 1}.  {props.activitys}</p>
                <button className="text-red-500" onClick={() => { handledlt(props.id) }}>Delete</button>
            </div>
        </>
    )
}
export default TodoItems