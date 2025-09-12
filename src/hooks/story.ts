import { useEffect, useState } from "react";

export type Story = {
  id: number;
  content: string;
  storyImgs: StoryImg[];
};

export type StoryImg = {
  imgId: number;
  src: string;
};

export const useStories = () => {
  const [data, setData] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<boolean | null>(false);

  // localStorage.setItem("data", JSON.stringify(data));

  useEffect(() => {
    fetch("http://localhost:8080/api/member/board", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, isError };
};
