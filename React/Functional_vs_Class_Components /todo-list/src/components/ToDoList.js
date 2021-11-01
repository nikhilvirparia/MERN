import React, {useState} from 'react'

const ToDoList = () => {

    let[formInfo, setFormInfo] = useState({
        listTask: "",
        listItem: "",
        complete: false
    })

    let [listofItem, setlistofItem] = useState([])

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault() //this will prevent the form submission from reloading the page
        setlistofItem([...listofItem, formInfo])
    }

    const deleteItem = (e,idx)=>{
        let newList = listofItem.filter((item,i)=>{
            return i !== idx
        })
        setlistofItem(newList)
    }

    const completedTask = (e,task) => {
       task.complete
           ? task.complete = false
           : task.complete = true
        setlistofItem([...listofItem])
    }

    let line = {textDecoration: "line-through"}
    let none = {textDecoration: "none"}

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange= {changeHandler} type="text" name="name" id="" className="form-control" />

                    <input type="submit" value="Add Task" className="btn btn-success mt-3" />

                </form>
            </div>

            {
                listofItem.map((item,i)=>{
                    return <div>
                        <p style={item.complete ? line : none}>{item.name}</p>
                        <input type="checkbox" onClick={(e) => completedTask(e,item)}/>
                    <button onClick = {(e)=>deleteItem(e,i)} className="btn btn-danger">Delete</button>
                    <hr />

                    </div>
                })
            }
        </>
    )
}

export default ToDoList