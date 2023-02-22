import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import LoadingOverlay from "../components/LoadingOverlay";
import {
  advertisementIdState,
  advertisementState,
  archiveIdState,
  archiveState,
  challengeIdState,
  challengeLogIdState,
  challengeLogState,
  challengeState,
  couponIdState,
  couponLogIdState,
  couponLogState,
  couponState,
  helpIdState,
  helpState,
  loadingState,
  shortIdState,
  shortState,
  userIdState,
  userState,
  valueIdState,
  valueState,
} from "../data/atom";
import { fetchDatas, fetchIds } from "../util/executeFetch";

function AfterLoginFetchScreen() {
  const setIsLoading = useSetRecoilState(loadingState);
  const setUserIds = useSetRecoilState(userIdState);
  const setChallengeIds = useSetRecoilState(challengeIdState);
  const setChallengeLogIds = useSetRecoilState(challengeLogIdState);
  const setValueIds = useSetRecoilState(valueIdState);
  const setCouponIds = useSetRecoilState(couponIdState);
  const setCouponLogIds = useSetRecoilState(couponLogIdState);
  const setArchiveIds = useSetRecoilState(archiveIdState);
  const setShortIds = useSetRecoilState(shortIdState);
  const setAdvertisementIds = useSetRecoilState(advertisementIdState);
  const setHelpIds = useSetRecoilState(helpIdState);
  const setUsers = useSetRecoilState(userState);
  const setChallenges = useSetRecoilState(challengeState);
  const setChallengeLogs = useSetRecoilState(challengeLogState);
  const setValues = useSetRecoilState(valueState);
  const setCoupons = useSetRecoilState(couponState);
  const setCouponLogs = useSetRecoilState(couponLogState);
  const setArchives = useSetRecoilState(archiveState);
  const setShorts = useSetRecoilState(shortState);
  const setAdvertisements = useSetRecoilState(advertisementState);
  const setHelps = useSetRecoilState(helpState);

  useEffect(() => {
    async function fetchData() {
      await fetchIds("users", setUserIds);
      await fetchIds("challenges", setChallengeIds);
      await fetchIds("challengeLogs", setChallengeLogIds);
      await fetchIds("values", setValueIds);
      await fetchIds("coupons", setCouponIds);
      await fetchIds("couponLogs", setCouponLogIds);
      await fetchIds("archives", setArchiveIds);
      await fetchIds("shorts", setShortIds);
      await fetchIds("advertisements", setAdvertisementIds);
      await fetchIds("helps", setHelpIds);
      await fetchDatas("users", setUsers);
      await fetchDatas("challenges", setChallenges);
      await fetchDatas("challengeLogs", setChallengeLogs);
      await fetchDatas("values", setValues);
      await fetchDatas("coupons", setCoupons);
      await fetchDatas("couponLogs", setCouponLogs);
      await fetchDatas("archives", setArchives);
      await fetchDatas("shorts", setShorts);
      await fetchDatas("advertisements", setAdvertisements);
      await fetchDatas("helps", setHelps);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return <LoadingOverlay />;
}

export default AfterLoginFetchScreen;
