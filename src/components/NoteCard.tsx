import { useState } from "react";
import { RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

interface Props {
  note: Note;
  onDelete: () => void;
}

export const NoteCard = ({ note, onDelete }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded((current) => !current)}
      className={`collapse-arrow my-3 w-[100%] rounded-md bg-gray-700 bg-opacity-50 p-3 text-white md:w-[515px] ${
        isExpanded ? "collapse-open" : ""
      } collapse`}
    >
      <h2 className="font-bold my-3 text-purple-500">
        <span className=" mr-3 text-red-500">T</span>
        {note.title.toUpperCase()}
      </h2>

      <p className="mb-3 prose">
        <span className="mr-3 font-bold text-red-500">C</span>
        {note.content}
      </p>

      <button className="btn-secondary btn-sm btn px-5" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
