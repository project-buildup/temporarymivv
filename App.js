import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import LoadingOverlay from "./components/LoadingOverlay";
import InApp from "./InApp";

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingOverlay />}>
        <InApp />
      </Suspense>
    </RecoilRoot>
  );
}
