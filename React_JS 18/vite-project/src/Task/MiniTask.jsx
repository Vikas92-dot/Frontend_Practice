import React, { Suspense } from "react";
import Search from "./Search";
const LazyComponent = React.lazy(() => import("./LazyComponent"));

function MiniTask() {
  return (
    <div>
      <h1>React 18 Live Search Example</h1>
      <Search />

      <Suspense fallback={<p>Loading more content...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default MiniTask;