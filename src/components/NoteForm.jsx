import React, {useState, useEffect} from "react";


const NoteForm = (props) =>{
    const {onSubmit, editingNote} = props;
    const [note, setNote]= useState({
        title: "",
        description: "",
        category: "Others"
    });

    useEffect(() =>{
        if(editingNote){
            setNote(editingNote);
        }else{
            setNote({title: "", description: "", category: "Others" });
        }
    }, [editingNote]);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setNote((prevNote) => ({...prevNote, [name]: value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(note);
        setNote({title: "", description: "", category: "Others"});
    }

    return(
        <form onSubmit={handleSubmit} className="mb-4 row">
            <div className="mb-3 col-md-6">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter title"
                    value={note.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3 col-md-6">
                <label htmlFor="description" className="form-label">Description</label>
                <input 
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Enter description"
                    value={note.description}
                    onChange={handleChange}
                    required
                 />
            </div>
            <div className="mb-3 col-md-6">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={note.category}
                    onChange={handleChange}
                    required
                >
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">
                    {editingNote? "Update Note" : "Add Note"}
                </button>
            </div>
        </form>
    )
}

export default NoteForm