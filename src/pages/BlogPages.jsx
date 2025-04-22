import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Comment } from "../components/Comment";
import blogData from "../data/blog.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StoryPage = () =>{
    const { id } = useParams();
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        let selectedBlog = blogData.filter((data) => (data.id == id));
        setBlog(selectedBlog)
    }, [id])

    return(
        <div className="bg-[#1c1c1c] text-[#ffffff] flex flex-col gap-4">
            <NavBarComp />
            {blog && <>
            <h2 className="text-[50px] text-center font-chango mt-4">{blog[0].title}</h2>
            <div className="flex flex-col justify-center gap-12 text-center py-4">
                {blog[0].content.map((data, index) => {
                    return data === 'ruller' ? 
                    <img className="w-1/2 mx-auto" src="/assets/icons/ruller.svg" alt="ruller" /> 
                    :
                    <p key={index} className="font-[cinzel]">{data}</p>    
                })}
            </div>
            <Comment />
            </>}
            <FooterComp/>
        </div>
    )
}

export default StoryPage;