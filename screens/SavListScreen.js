import { useState } from "react";
import SavList_000 from "./SavList/SavList_000";
import SavList_001 from "./SavList/SavList_001";

function SavListScreen({ navigation }) {
  const [isMonth, setIsMonth] = useState(true);

  if (isMonth) {
    return <SavList_000 setIsMonth={setIsMonth} navigation={navigation} />;
  } else {
    return <SavList_001 setIsMonth={setIsMonth} navigation={navigation} />;
  }
}

export default SavListScreen;
