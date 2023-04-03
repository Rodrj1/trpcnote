import { RouterOutputs } from "~/utils/api";

type Topic = RouterOutputs["topic"]["getAll"][0];

interface Props {
  topic: Topic;
  selectedTopic: Topic | null;
  setSelectedTopic: React.Dispatch<React.SetStateAction<Topic | null>>;
  onDelete: () => void;
}

export const Topic = ({
  topic,
  selectedTopic,
  setSelectedTopic,
  onDelete,
}: Props) => {
  return (
    <article
      onClick={(e) => {
        e.preventDefault();
        setSelectedTopic(topic);
      }}
      className={`w-12/12 flex flex-col rounded-lg bg-gray-700 bg-opacity-50 p-2 ${
        selectedTopic === topic && "bg-slate-600"
      }`}
    >
      <h2 className="text-lg text-red-500 my-2">{topic.title}</h2>

      <p className="mb-2">
        <span className="text-purple-500">Created: </span>
        {topic.createdAt.toString()}
      </p>

      <p className="mb-2">
        <span className="text-purple-500">Updated: </span>
        {topic.updatedAt.toString()}
      </p>
      <button className="btn-warning btn-sm btn" onClick={onDelete}>
        Delete (Must not have any task)
      </button>
    </article>
  );
}
