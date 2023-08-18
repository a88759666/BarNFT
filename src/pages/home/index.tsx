
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Fullpage from "@/components/Fullpage";
import HeaderBar from "@/components/HeaderBar";
import { useEffect, useState } from "react";
import CombinePage from "./CombinePage";
import FAQPage from "./FAQPage";
import MainPage from "./MainPage";
import MintPage from "./MintPage";
import PlanPage from "./PlanPage";
import RoadmapPage from "./RoadmapPage";
import StoryPage from "./StoryPage";
import TeamPage from "./TeamPage";



const Home:React.FC = () => {
  const [currentPage, setCurrentPage] = useState('')
  
  useEffect(() => {
    setCurrentPage(localStorage.getItem('currentPage') as string)
  }, [localStorage])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setLoading(false)
    } 
  }, [loading]);
  
  
  return <>
  <div className="w-screen h-screen">
    <Container>
      <header className="sticky top-0 z-40">
        <HeaderBar />
      </header>
      <main>
      <div style={{ height: '100vh' }}>
        <Fullpage>
          <div id="main" className="mb-[120px] section" data-anchor="MainPage">
            <MainPage />
          </div>
          <div id="story" className="mb-[120px] section" data-anchor="StoryPage">
            <StoryPage currentPage={currentPage}/>
          </div>
          <div id="mint" className="mb-[120px] section" data-anchor="MintPage">
            <MintPage currentPage={currentPage}/>
          </div>
          <div id="plan" className="mb-[120px] section" data-anchor="PlanPage">
            <PlanPage />
          </div>
          <div id="combine" className="mb-[120px] section" data-anchor="CombinePage">
            <CombinePage />
          </div>
          <div id="roadmap" className="mb-[120px] section" data-anchor="RoadmapPage">
            <RoadmapPage />
          </div>
          <div id="team" className="mb-[120px] section" data-anchor="TeamPage">
            <TeamPage />
          </div>
          <div id="faq" className="mb-[120px] section" data-anchor="FAQPage">
            <FAQPage />
          </div>
          <div className="section fp-auto-height h-[600px]" data-anchor="Footer">
            <Footer />
          </div>
        </Fullpage>
      </div>
      </main>
    </Container>
  </div>
   
  </>
};
  
export default Home;