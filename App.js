import { useFonts } from "expo-font";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import LoadingOverlay from "./components/LoadingOverlay";
import InApp from "./InApp";

export default function App() {
  const [fontsLoaded] = useFonts({
    KoPubWorldDotum500: require("./assets/fonts/KoPubWorld-Dotum-Medium.ttf"),
    KoPubWorldDotum700: require("./assets/fonts/KoPubWorld-Dotum-Bold.ttf"),
    Inter400: require("./assets/fonts/Inter-Regular.ttf"),
    Inter500: require("./assets/fonts/Inter-Medium.ttf"),
    Inter600: require("./assets/fonts/Inter-SemiBold.ttf"),
    Inter700: require("./assets/fonts/Inter-Bold.ttf"),
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
