import { webDesigns } from "../../services/objects";
import Design from "./Design";
import StyledGrid from "./DesignsDesign";

function webDesignDesigns() {
  const designs = webDesigns;
  return (
    <StyledGrid>
      {designs.map((design) => (
        <Design design={design} key={design.name} />
      ))}
    </StyledGrid>
  );
}

export default webDesignDesigns;
