import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

const StoryPage = () =>{
    return(
        <div className="bg-[#1c1c1c] text-[#ffffff]">
            <NavBarComp />
            <h2 className="text-[50px] text-center font-[chango] mb-2">Unsupported</h2>
            <div className="text-center p-10">
                <p className="font-[cinzel] mb-6">If you throw support behind me, for example, when I release content, and then you begin to release content only for you to get no reasonable amount of support/promotion from me, perhaps, you should take a good look at your work. It just might be that yours lacks the culture of excellence that time has afforded me the opportunity to refine mine with</p>    
                <p className="font-[cinzel] mb-6">I write hella good and I know it. I put out calls every moment I get for creators to collaborate with me to create a new, progressive, more refreshing form of art. I get a lot of requests, but I politely turn a few down. As long as I’d love to support, I also cannot afford to hurt my brand with content that I know could use hell of a lot of growth and refinement.</p>
                <p className="font-[cinzel] mb-6">Maybe that’s why your friends (in the same industry as you) don’t (openly) support you.</p>
                <p className="font-[cinzel] mb-6">Another angle to this point is us understanding that people naturally love to be aligned with things, content and people with a potential for excellence. People want to take pics with the trim girl with a fat ass. They want to be the first to say “Hey, I support this guy” when they sense his sound is just right and likely to be popular. They want to promote that new director’s lil movie that’s shot with sharp cameras and great graphics.</p>
                <p className="font-[cinzel] mb-6">Now, while it’s true that we all agree that everyone needs to start from somewhere and that we all need to give everyone a chance to grow, it just happens also that this kind of talk falls into the category of those truths that everyone agrees on but never quiet give any bit of realistic fuck about.</p>
                <p className="font-[cinzel] mb-6">Truth is, people are typically vultures who hover and won’t give a fuck how much work you’re putting in if they don’t sense or feel a measure of potential excellence to it</p>
                <p className="font-[cinzel] mb-6">It’s just the way I wouldn’t share a badly written story with a great plot until it’s written well. It’s just the way you’d likely not share the pic of your obese neighbor with a good character until she trims down.</p>
            </div>
            
            <FooterComp/>
        </div>
    )
}

export default StoryPage;