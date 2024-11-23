import React, {useState, useEffect} from "react";

import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import { fetchNotes, createNote, updateNote, deleteNote } from "./services/api";

const App = () =>{
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const loadNotes = async (filters = {}) =>{
    try{
      const {data} = await fetchNotes(filters);
      console.log(data);
      setNotes(data);
    }catch(error){
      console.error(error);
      setNotes([])
    }
  }

  const handleCreateOrUpdate = async (note) =>{
    if(editingNote){
      await updateNote(editingNote._id, note);
    }else{
      await createNote(note);
    }
    setEditingNote(null);
    loadNotes();
  }

  const handleDelete = async(id) =>{
    await deleteNote(id);
    loadNotes();
  }

  useEffect(() =>{
    loadNotes();
  }, [])

  return(
    <div className="container mt-4">
      <h1 className="text-center mb-4">Personal Notes Manager</h1>
      <SearchBar onSearch={loadNotes} />
      <NoteForm onSubmit={handleCreateOrUpdate} editingNote={editingNote} />
      <NoteList notes={notes} onEdit={setEditingNote} onDelete={handleDelete} />
    </div>
  )
}

export default App