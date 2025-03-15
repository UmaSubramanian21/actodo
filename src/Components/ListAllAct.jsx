import TodoItems from "./TodoItems"


function ListAct(props) {
    const activitylist = props.activitylist
    const setActivityList = props.setActivityList

    return (
        <>
            <div className="bg-[#BDB4EA] p-5 flex-grow rounded-md">
                <h1 className="text-2xl font-bold">Today's Activity</h1>
                {activitylist.length === 0 ? <p>You haven't added any activity yet</p> : ""}


                {
                    activitylist.map(function (item, index) {
                        return <TodoItems activitylist={activitylist} setActivityList={setActivityList} id={item.id} activitys={item.activity} index={index} />
                    })
                }

            </div>
        </>
    )
}
export default ListAct