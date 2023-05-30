import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error.statusText);
  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>
        {error.status} : {error.statusText}
      </p>
    </div>
  );
}
