import "./pagenotfound.scss";

import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="pagenotfound">
      <div className="box">
        <h1 className="heading-1">
          The page you are looking for could not be found 😢
        </h1>
        <button onClick={moveBack}>&larr; Go back</button>
      </div>
    </main>
  );
}

export default PageNotFound;
