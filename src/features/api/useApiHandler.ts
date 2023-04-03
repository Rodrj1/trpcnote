import { useSession } from "next-auth/react";
import { useState } from "react";
import { RouterOutputs, api } from "~/utils/api";

type Topic = RouterOutputs["topic"]["getAll"][0];

export const useApiHandler = () => {
  const { data: sessionData } = useSession();

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const { data: topics, refetch: refechtTopics } = api.topic.getAll.useQuery(
    undefined,
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => setSelectedTopic(selectedTopic ?? data[0] ?? null),
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refechtTopics();
    },
  });

  const deleteTopic = api.topic.delete.useMutation({
    onSuccess: () => {
      void refechtTopics();
    },
  });

  const { data: notes, refetch: refecthNotes } = api.note.getAll.useQuery(
    {
      topicId: selectedTopic?.id ?? "",
    },
    {
      enabled: sessionData?.user !== undefined && selectedTopic !== null,
    }
  );

  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refecthNotes();
    },
  });

  const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refecthNotes();
    },
  });

  return {
    topics,
    createTopic,
    deleteTopic,
    notes,
    createNote,
    deleteNote,
    selectedTopic,
    setSelectedTopic,
  };
};
