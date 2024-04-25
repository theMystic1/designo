import { useInview } from "../../hooks/useInview";
import { appDesigns } from "../../services/objects";
import Design from "./Design";
import StyledGrid from "./DesignsDesign";

function AppDesignDesigns() {
  const { ref, style } = useInview();

  const designs = appDesigns;
  return (
    <StyledGrid ref={ref} style={style}>
      {designs.map((design) => (
        <Design design={design} key={design.name} />
      ))}
    </StyledGrid>
  );
}

export default AppDesignDesigns;
