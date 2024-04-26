import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-2xl"> Invalid url</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default PageNotFound;
