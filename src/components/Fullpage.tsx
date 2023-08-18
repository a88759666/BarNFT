import ReactFullpage from '@fullpage/react-fullpage';
import { Children } from "react";

interface Props {children: React.ReactNode}

const Fullpage:React.FC<Props> = ({children}) => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1800} /* Options here */
    fitToSection = {true}
    css3 = {true}
    
    anchors = {["MainPage", "StoryPage", "MintPage", "PlanPage", "CombinePage", "RoadmapPage", "TeamPage", "FAQPage", "Footer"]}
    autoScrolling = {true}
    verticalCentered = {false}
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination , direction })
      // console.log(destination.anchor)
      localStorage.setItem('currentPage', destination.anchor as string)

    }}
    
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {children}
        </ReactFullpage.Wrapper>
      );
    }}
  />
)

export default Fullpage