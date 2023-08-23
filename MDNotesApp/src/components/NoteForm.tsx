import { FormEvent, useRef, useState } from "react";
import { Col, Form, Row, Stack, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { NoteData, Tag } from "../types/NoteData.type";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export default function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const nav = useNavigate()
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: bodyRef.current!.value,
      tags: selectedTags,
    });

    nav("..")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect
                isMulti
                value={selectedTags.map(({ label, id }) => {
                  return { label, value: id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  const allTags = tags.map(({ label, value }) => {
                    return { label, id: value };
                  });
                  setSelectedTags(allTags);
                }}
                onCreateOption={(label) => {
                  const newTag = { id: crypto.randomUUID(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={15} ref={bodyRef} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit">Save</Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancle
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
