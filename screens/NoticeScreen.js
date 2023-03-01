import { useState } from "react";
import Notice_000 from "./Notice/Notice_000";
import Notice_001 from "./Notice/Notice_001";

function NoticeScreen({ navigation }) {
  const [isEvent, setIsEvent] = useState(true);

  if (isEvent) {
    return <Notice_000 setIsEvent={setIsEvent} navigation={navigation} />;
  } else {
    return <Notice_001 setIsEvent={setIsEvent} navigation={navigation} />;
  }
}

export default NoticeScreen;
