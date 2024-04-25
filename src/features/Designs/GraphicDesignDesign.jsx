import { useInview } from "../../hooks/useInview";
import { graphicsDesigns } from "../../services/objects";
import Design from "./Design";
import StyledGrid from "./DesignsDesign";

function GraphicDesignDesign() {
  const designs = graphicsDesigns;
  const { ref, style } = useInview();

  return (
    <StyledGrid ref={ref} style={style}>
      {designs.map((design) => (
        <Design design={design} key={design.name} />
      ))}
    </StyledGrid>
  );
}

export default GraphicDesignDesign;
