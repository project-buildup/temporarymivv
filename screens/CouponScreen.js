import { useState } from "react";
import Coupon_000 from "./Coupon/Coupon_000";
import Coupon_001 from "./Coupon/Coupon_001";

function CouponScreen({ navigation }) {
  const [isPossible, setIsPossible] = useState(true);

  if (isPossible) {
    return <Coupon_000 setIsPossible={setIsPossible} navigation={navigation} />;
  } else {
    return <Coupon_001 setIsPossible={setIsPossible} navigation={navigation} />;
  }
}

export default CouponScreen;
