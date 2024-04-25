import { useInview } from "../../hooks/useInview";
import { webDesigns } from "../../services/objects";
import Design from "./Design";
import StyledGrid from "./DesignsDesign";

function WebDesignDesigns() {
  const designs = webDesigns;
  const { ref, style } = useInview();

  return (
    <StyledGrid ref={ref} style={style}>
      {designs.map((design) => (
        <Design design={design} key={design.name} />
      ))}
    </StyledGrid>
  );
}

export default WebDesignDesigns;
