import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {format} from "date-fns";

const NoteList = (props) =>{
    const {notes = [], onEdit, onDelete, loading} = props;

    const noteListStatus = loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ClipLoader color="#3963ed" size={40} data-testid="loader" />
        </div>
      ) : (
        <p className="text-center">No notes available</p>
      );
    
    return(
        <div>
            {notes.length > 0 ? (
                <div>
                    {notes.map((note) =>(
                        <div 
                            key={note._id} 
                            className="list-group-item d-flex justify-content-between align-items-start border border-secondary rounded p-2 mb-3"
                        >
                            <div className="col-8">
                                <h6 className="mb-1">{note.title} <span className="text-muted small" style={{fontSize: "0.8rem"}}>({format(new Date(note.createdAt), ("dd-MM-yyyy"))})</span></h6>
                                <p className="mb-1">{note.description}</p>
                                {/* <span className="text-muted">{format(new Date(note.createdAt), ("yyyy-MM-dd HH:mm:ss"))}</span> */}
                            </div>
                            <div className="col-4 text-end">
                                <button className="btn btn-sm btn-primary m-1" onClick={() => onEdit(note)}>Edit</button>
                                <button className="btn btn-sm btn-danger" onClick={() => onDelete(note._id)}>Delete</button>
                                <div>
                                    <span className="text-muted small fw-semibold" style={{fontSize: "0.8rem"}}>({format(new Date(note.updatedAt), ("dd-MM-yyyy"))})</span>
                                </div>
                            </div>
                        </div>

                    ))
                    }
                </div>
        ) :
        (
            noteListStatus
        )
        }
         </div>
    )
}

export default NoteList