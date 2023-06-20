import { useState } from "react"

export default () => {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(['ლექციაა გადასაღები', 'ალგორითმია დასამატებელი'])

    const onChange = (e) => {
        setTask(e.target.value)
    }

    const onAdd = () => {
        setTasks([...tasks, task])
        setTask('')
    }

    return (
        <div>
            <input type="text" 
                    value={task}
                    onChange={onChange}
            />
            <button onClick={onAdd}>დამატება</button>
            <ul>
                {
                    tasks.map(task => <li>{task}</li>)
                }
            </ul>
        </div>
    )
}