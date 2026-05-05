export default function ListToDoComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth() , today.getDay())

    const todos = [
        {id: 1 , description : 'Succession' ,done: true , targetdate: targetDate },
        {id: 2 , description : 'SuperNatural' ,done: true , targetdate: targetDate}
    ]
    return(
        <div className="ListToDoComponent">
            <h1>Things You Want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>{
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetdate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
