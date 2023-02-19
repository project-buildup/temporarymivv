import axios from "axios";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

const BACKEND_URL =
  "https://react-native-course-6fe6d-default-rtdb.firebaseio.com";

async function fetchKeyData(type) {
  const response = await axios.get(BACKEND_URL + "/" + type + ".json");
  const keys = [];

  for (const key in response.data) {
    keys.push(key);
  }

  return keys;
}

async function fetchData(type) {
  const response = await axios.get(BACKEND_URL + "/" + type + ".json");

  return response.data;
}

export async function fetchUsers(type, state) {
  const setter = useSetRecoilState(state);
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState();

  useEffect(() => {
    async function getKeys(type) {
      setIsLoading(true);
      try {
        const response = await fetchData(type + "/" + keys[0]);
        setter(response);
      } catch (error) {
        console.log("Could not fetch keys!");
      }
      setIsLoading(false);
    }
    getKeys(type);
  }, []);
}
