import { graphicsDesigns } from "../../services/objects";
import Design from "./Design";
import StyledGrid from "./DesignsDesign";

function GraphicDesignDesign() {
  const designs = graphicsDesigns;
  return (
    <StyledGrid>
      {designs.map((design) => (
        <Design design={design} key={design.name} />
      ))}
    </StyledGrid>
  );
}

export default GraphicDesignDesign;
