import { useFonts } from "expo-font";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import LoadingOverlay from "./components/LoadingOverlay";
import InApp from "./InApp";

export default function App() {
  const [fontsLoaded] = useFonts({
    KoPubWorldDotum500: require("./assets/fonts/KoPubWorld-Dotum-Medium.ttf"),
    KoPubWorldDotum700: require("./assets/fonts/KoPubWorld-Dotum-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }

  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingOverlay />}>
        <InApp />
      </Suspense>
    </RecoilRoot>
  );
}
