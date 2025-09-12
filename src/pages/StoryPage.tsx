import { useEffect, useState } from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Link from "../components/Link";
import StoryList from "../components/StoryList";
import { useStories } from "../hooks/story";

function StoryPage() {
  const { data, isLoading, isError } = useStories();
  const [dDay, setDDay] = useState("");
  const [profileImg, setProfileImg] = useState("");
  useEffect(() => {
    const dDayData = async () => {
      try {
        fetch("http://localhost:8080/api/member/d-day", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setDDay(data);
            console.log(data);
          });
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    dDayData();
    const profileImgData = async () => {
      try {
        fetch("http://localhost:8080/api/member/profile-img", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
          .then((res) => res.text())
          .then((data) => {
            setProfileImg(data);
            console.log(data);
          });
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    profileImgData();
  }, []);
  return (
    <div className="flex h-[100vh] flex-col items-center text-center">
      <div className="mb-5 h-30 w-full bg-red-100">
        <div className="mt-5 text-2xl">사랑한지 {dDay} 일째</div>
      </div>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="flex flex-col items-center">
          <Link href="/member/profile" className="fixed">
            <img src={profileImg} className="mb-5 w-30 rounded-full" />
            <Button>profile</Button>
          </Link>
        </div>
        <Box className="mx-auto h-full overflow-y-auto">
          {isError ? (
            <Box className="h-[200vh] bg-yellow-100 text-red-600">에러!!</Box>
          ) : (
            <StoryList values={data} isLoading={isLoading} />
          )}
        </Box>
        <div className="flex flex-col items-center">
          <Link href="/member/newStory" className="fixed">
            <Button>새로운 글쓰기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StoryPage;
