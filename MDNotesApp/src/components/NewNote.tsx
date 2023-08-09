import NoteForm from "./NoteForm";
import { NoteData } from "../types/NoteData.type";

type NewNoteProps = {
    onSubmit:(data:NoteData)=>void
}
export function NewNote({onSubmit}:NewNoteProps) {
  return (
    <>
      <h1>New Note</h1>
      <NoteForm onSubmit={onSubmit}/>
    </>
  );
}
