"use client"
import NoteForm from "@/components/NoteForm";
import {useEffect} from 'react'
import { useNotes } from "@/context/NoteContext";
import NoteCard from "@/components/NoteCard";


function HomePage() {
  const {notes, loadNotes} = useNotes()

  useEffect(() => {
    loadNotes()
  },[])
  console.log(notes)
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NoteForm />

        {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
