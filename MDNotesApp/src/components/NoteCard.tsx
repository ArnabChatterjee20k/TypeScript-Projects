import { Card, Stack, Button } from "react-bootstrap";
import { NoteItem } from "../types/NoteItem.type";

export default function NoteCard({ id, tags, title }: NoteItem) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            {tags.map(({ id, label }) => {
              return <Button key={id}>{label}</Button>;
            })}
          </Stack>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}
