import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../types/NoteData.type";

type NewNoteProps = {
    onSubmit:(data:NoteData)=>void,
    onAddTag:(tag:Tag)=>void,
    availableTags:Tag[]
}
export function NewNote({onSubmit,onAddTag,availableTags}:NewNoteProps) {
  return (
    <>
      <h1>New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  );
}
