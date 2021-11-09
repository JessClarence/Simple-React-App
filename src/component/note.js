import AddNotes from "../addNote";
import CreateNote from "./createNote";


function add(create){
    return(
    <CreateNote 
        value = {create.value}
        placeholder = {create.placeholder}
    />)
}

function Note(){
    return(
        <div>
            {AddNotes.map(add)}   
        </div>
    )
}


export default Note;