import { useNavigate } from "react-router-dom";
import Headings from "../../ui/Headings";
import { BackGroundImage } from "../home/LinkBg";

function DesignLink({ path, header, bgimg }) {
  const navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }
  return (
    <div className="flex items-center flex-col w-full gap-8  lg:flex-row">
      <BackGroundImage
        bgimage={bgimg[0]}
        onClick={() => handleNavigate(path[0])}
      >
        <Headings className=" text-white-0"> {header[0]}</Headings>
        <Headings as="h3" className="uppercase text-white-0">
          View Projects
        </Headings>
      </BackGroundImage>
      <BackGroundImage
        bgimage={bgimg[1]}
        onClick={() => handleNavigate(path[1])}
      >
        <Headings className="uppercase text-white-0">{header[1]}</Headings>
        <Headings as="h3" className="uppercase text-white-0">
          {" "}
          View Projects
        </Headings>
      </BackGroundImage>
    </div>
  );
}

export default DesignLink;
