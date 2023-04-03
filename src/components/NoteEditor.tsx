import { useState } from "react";

interface Props {
  onSave: (note: { title: string; content: string }) => void;
}

export default function NoteEditor({ onSave }: Props) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleOnSave = () => {
    onSave({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="prose flex w-full flex-col gap-2  rounded-lg  bg-gray-800 bg-opacity-75 p-4 md:w-[515px]">
      <h2 className="text-center text-base font-bold">
        Add Note (Select Topic First)
      </h2>

      <input
        type="text"
        placeholder="Note Title"
        className="input-bordered input input-md w-full font-bold"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />

      <input
        type="text"
        placeholder="Content"
        className="input-bordered input input-md font-bold"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />

      <button
        className="btn-primary btn transition-colors"
        onClick={handleOnSave}
      >
        Save
      </button>
    </div>
  );
}
