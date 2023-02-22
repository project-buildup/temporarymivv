import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL =
  "https://react-native-course-6fe6d-default-rtdb.firebaseio.com";

export async function fetchIds(type, setter) {
  const response = await axios.get(BACKEND_URL + "/" + type + ".json");
  const keys = [];

  for (const key in response.data) {
    keys.push(key);
  }

  setter(keys);
}

export async function fetchDatas(type, setter) {
  const response = await axios.get(BACKEND_URL + "/" + type + ".json");

  setter(response.data);
}

export function fetchState(type, setter) {
  async function fetchHandler(type) {
    try {
      const keys = await fetchKeyData(type);
      const object = {};
      for (const key of keys) {
        const response = await fetchData(type + "/" + key);
        object[key] = response;
        console.log(object);
        setter((oldData) => ({ ...oldData, ...object }));
      }
    } catch (error) {
      console.log("Could not fetch!");
    }
  }
  fetchHandler(type);
}

export function useFetchState(type) {
  //from chatGPT
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const keys = await fetchKeyData(type);
        const newData = {};
        for (const key of keys) {
          const response = await fetchData(type + "/" + key);
          newData[key] = response;
        }
        setData((oldData) => ({ ...oldData, ...newData }));
      } catch (error) {
        console.log("Could not fetch!");
      }
    }
    fetchData();
  }, [type]);

  return data;
}
