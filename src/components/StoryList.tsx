import type { Story } from "../hooks/story";
import Box from "./Box";

type StoryListProps = {
  values: Story[];
  isLoading: boolean;
  className?: string;
};

function StoryList({ values, isLoading, className }: StoryListProps) {
  return (
    <div className={className}>
      {isLoading ? (
        <Box>불러오는 중…</Box>
      ) : (
        values.map((story, index) => (
          <Box key={index} className="mb-6 flex max-w-2xl flex-row gap-10">
            <div className="grid grid-cols-2 gap-3">
              {story.imgForms.map((imgForms, index) => (
                <figure
                  key={index}
                  className="relative rounded-xl bg-gray-100 p-1 shadow"
                >
                  {/* 이미지 영역: 항상 정사각형 공간을 선점 */}
                  <div className="aspect-square w-45 w-full overflow-hidden rounded-lg">
                    <img
                      key={imgForms.imgId}
                      src={imgForms.src}
                      alt="story"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </figure>
              ))}
              <div>{story.content}</div>
            </div>
          </Box>
        ))
      )}
    </div>
  );
}

export default StoryList;
