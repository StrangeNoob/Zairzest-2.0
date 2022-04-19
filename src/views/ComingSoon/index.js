import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useWindowDimensions from "../../CustomHooks/windowDimension";
import "../../styles/comingSoon.css";
const ComingSoon = () => {
  const { height, width } = useWindowDimensions();
  const [isSidebar, setIsSidebar] = useState    (false);

  return isSidebar ? (
    <Sidebar
      handleSidebar={() => {
        setIsSidebar(false);
      }}
      aboutUs={false}
    />
  ) : (
    <>
      <Navbar aboutUs={false} handleSidebar={() => setIsSidebar(true)} />
      <div className="coming-soon-container">
        <h1>Coming Soon</h1>
      </div>
    </>
  );
};

export default ComingSoon;
