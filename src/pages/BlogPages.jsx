import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Comment } from "../components/Comment";
import blogData from "../data/blog.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StoryPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    let selectedBlog = blogData.filter((data) => data.id == id);
    setBlog(selectedBlog);
  }, [id]);

  return (
    <div className="bg-[#1c1c1c] text-[#ffffff] flex flex-col gap-4">
      <NavBarComp />
      {blog && (
        <>
          <h2 className="text-[40px] lg:text-[50px] md:text-center font-chango lg:mt-4 px-2">
            {blog[0].title}
          </h2>
          <div className="flex flex-col lg:justify-center gap-8 lg:gap-12 md:text-center py-4 px-2">
            {blog[0].content.map((data, index) => {
              return data === "ruller" ? (
                <img
                  className="lg:w-1/2 w-full mx-auto"
                  src="/assets/icons/ruller.svg"
                  alt="ruller"
                />
              ) : (
                <p key={index} className="font-glacial">
                  {data}
                </p>
              );
            })}
          </div>
          <Comment />
        </>
      )}
      <FooterComp />
    </div>
  );
};

export default StoryPage;
