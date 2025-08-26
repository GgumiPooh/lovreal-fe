import { useEffect, useRef, useState, type JSX } from "react";
import Box from "../components/Box";

type PreviewItem = {
  id: string;   // name+size+lastModified
  file: File;
  url: string;  // URL.createObjectURL
};

const MAX_FILES = 4;

export default function NewStoryPage(): JSX.Element {
  const [previews, setPreviews] = useState<PreviewItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const previewsRef = useRef<PreviewItem[]>([]);
  useEffect(() => { previewsRef.current = previews; }, [previews]);

  function makeId(file: File) {
    return `${file.name}_${file.size}_${file.lastModified}`;
  }

  function appendFiles(files: File[]) {
    setErrorMessage(null);
    const images = files.filter((f) => f.type.startsWith("image/"));
    if (images.length === 0) { setErrorMessage("Images only."); return; }

    setPreviews((current) => {
      const remaining = MAX_FILES - current.length;
      if (remaining <= 0) { setErrorMessage(`Up to ${MAX_FILES} images.`); return current; }

      const existing = new Set(current.map((p) => p.id));
      const add = images.filter((f) => !existing.has(makeId(f))).slice(0, remaining);
      if (add.length === 0) { setErrorMessage("No new images to add."); return current; }

      const appended = add.map((file) => ({ id: makeId(file), file, url: URL.createObjectURL(file) }));
      return [...current, ...appended];
    });
  }

  function removeOne(id: string) {
    setPreviews((curr) => {
      const t = curr.find((p) => p.id === id);
      if (t) URL.revokeObjectURL(t.url);
      return curr.filter((p) => p.id !== id);
    });
  }

  function clearAll() {
    previews.forEach((p) => URL.revokeObjectURL(p.url));
    setPreviews([]);
    setErrorMessage(null);
  }

  useEffect(() => {
    return () => { previewsRef.current.forEach((p) => URL.revokeObjectURL(p.url)); };
  }, []);

  const slots = Array.from({ length: MAX_FILES }, (_, i) => i);

  return (
    <div className="flex h-full items-center justify-center p-4">
      <Box className="w-full max-w-md">
        {/* 에러 영역: 높이 고정으로 레이아웃 흔들림 방지 */}
        <div className="min-h-[20px]">
          {errorMessage && (
            <p role="alert" className="text-sm text-red-600">{errorMessage}</p>
          )}
        </div>

        {/* 4칸 고정 그리드: 이미지가 없을 때도 같은 높이 유지 */}
        <div className="grid grid-cols-2 gap-3">
          {slots.map((slotIndex) => {
            const item = previews[slotIndex];

            if (item) {
              const { id, url, file } = item;
              return (
                <figure key={id} className="relative rounded-xl p-2 shadow bg-gray-100">
                  {/* 이미지 영역: 항상 정사각형 공간을 선점 */}
                  <div className="w-full aspect-square overflow-hidden rounded-lg">
                    <img
                      src={url}
                      alt={`Preview ${slotIndex + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* 캡션 영역: 높이 고정 */}
                  <div className="mt-1 h-5">
                    <figcaption className="truncate text-xs text-gray-600">
                      {file.name} ({Math.round(file.size / 1024)} KB)
                    </figcaption>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeOne(id)}
                    className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white"
                    aria-label={`Remove image ${slotIndex + 1}`}
                  >
                    ×
                  </button>
                </figure>
              );
            }

            // 빈 슬롯: 회색 배경 플레이스홀더 (이미지 영역+캡션 영역 높이 동일)
            return (
              <label
                key={`placeholder-${slotIndex}`}
                htmlFor="img"
                className="flex items-center justify-center rounded-xl p-2 shadow bg-gray-100 cursor-pointer"
                aria-label={`Add image in slot ${slotIndex + 1}`}
              >
                <div className="flex w-full items-center justify-center aspect-square rounded-lg border-2 border-dashed border-gray-300 text-gray-400">
                  + Add image
                </div>
                <div className="mt-1 h-5" />
              </label>
            );
          })}
        </div>

        {/* 액션 행: 항상 같은 높이 유지 (버튼이 없어도 invisible 로 자리 유지) */}
        <div className="mt-3 flex h-9 items-center gap-2">
          <label
            htmlFor="img"
            className="cursor-pointer rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
          >
            이미지선택
          </label>

          <button
            type="button"
            onClick={clearAll}
            className={`rounded-md border px-3 py-1 text-sm hover:bg-gray-50 ${previews.length === 0 ? "invisible" : ""}`}
          >
            Clear all
          </button>
        </div>

        {/* 숨긴 파일 입력 */}
        <input
          id="img"
          className="sr-only"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            const files = Array.from(e.currentTarget.files ?? []);
            appendFiles(files);
            e.currentTarget.value = ""; // 동일 파일 재선택 허용
          }}
        />
      </Box>
    </div>
  );
}
