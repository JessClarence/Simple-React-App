
export default function createNote(props){
    return(
        <div className="card">
            <div className="container">
                <h1>{props.value}</h1>
                <p>{props.placeholder} ... <a href="#">Read More</a></p>
            </div>
        </div>
    )
}
