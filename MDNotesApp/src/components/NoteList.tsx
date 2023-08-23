import NoteCard from "./NoteCard";
import { NoteItem } from "../types/NoteItem.type";
import { Stack } from "react-bootstrap";

type NoteListType = {
  notes: NoteItem[];
};
export default function NoteList({ notes }: NoteListType) {
  return (
    <Stack>
      <Stack
        direction="horizontal"
        className="justify-content-center flex-wrap"
        gap={4}
      >
        {notes.map(({ id, tags, title }) => {
          return <NoteCard key={id} id={id} tags={tags} title={title} />;
        })}
      </Stack>
    </Stack>
  );
}
