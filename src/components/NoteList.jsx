import React from "react";

const NoteList = (props) =>{
    const {notes = [], onEdit, onDelete} = props;

    return(
        <div>
            {notes.length > 0 ? (
                <div>
                    {notes.map((note) =>(
                        <div 
                            key={note._id} 
                            className="list-group-item d-flex justify-content-between align-items-start border border-secondary rounded p-3 mb-3"
                        >
                            <div>
                                <h5 className="mb-1">{note.title}</h5>
                                <p className="mb-1">{note.description}</p>
                                <span className="text-muted">{note.date}</span>
                            </div>
                            <div>
                                <button className="btn btn-sm btn-primary m-1" onClick={() => onEdit(note)}>Edit</button>
                                <button className="btn btn-sm btn-danger" onClick={() => onDelete(note._id)}>Delete</button>
                            </div>
                        </div>

                    ))
                    }
                </div>
        ) :
        (
            <p className="text-center">No notes avilable</p>
        )
        }
         </div>
    )
}

export default NoteList