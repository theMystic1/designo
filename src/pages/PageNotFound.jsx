import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError();

  const navigate = useNavigate();
  return (
    <div className="px-10 py-12">
      <h1 className="text-2xl">Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button
        onClick={() => navigate(-1)}
        className="p-4 border border-black-300 rounded-md"
      >
        Go back
      </button>
    </div>
  );
}

export default PageNotFound;
