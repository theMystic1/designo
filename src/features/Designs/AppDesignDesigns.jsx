import { appDesigns } from "../../services/objects";
import Design from "./Design";
import StyledGrid from "./DesignsDesign";

function AppDesignDesigns() {
  const designs = appDesigns;
  return (
    <StyledGrid>
      {designs.map((design) => (
        <Design design={design} key={design.name} />
      ))}
    </StyledGrid>
  );
}

export default AppDesignDesigns;
