interface HashtagFilterProps {
    hashtags: string[];
    selectedHashtag: string | null;
    onSelectHashtag: (tag: string) => void;
    onClearFilter: () => void;
  }
  
  export default function HashtagFilter({ hashtags, selectedHashtag, onSelectHashtag, onClearFilter }: HashtagFilterProps) {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {hashtags.map((tag, index) => (
          <button
            key={index}
            onClick={() => onSelectHashtag(tag)}
            className={`px-2 py-1 rounded-full text-sm cursor-pointer transition ${
              selectedHashtag === tag ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'
            }`}
          >
            #{tag}
          </button>
        ))}
        {selectedHashtag && (
          <button
            onClick={onClearFilter}
            className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-sm ml-2"
          >
            Clear Filter
          </button>
        )}
      </div>
    );
  } 
  