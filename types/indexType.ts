type Title = {
    title: string;
};

type TopicIndex = Title & {
    folderType: "topic";
    topics: { folder: string; title: string }[];
};

// Need 3 versions of a card name: file/anchor, markdown, sidebar
type CardIndex = Title & {
    folderType: "card";
    cards: string[];
};

export type IndexType = TopicIndex | CardIndex;
