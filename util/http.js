/*

import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-6fe6d-default-rtdb.firebaseio.com";

export async function storeData(type, data) {
  const response = await axios.post(BACKEND_URL + "/" + type + ".json", data);
  const id = response.data.name;

  return id;
}

export async function fetchData(type) {
  const response = await axios.get(BACKEND_URL + "/" + type + ".json");

  return response.data;
}
export async function fetchKeyData(type) {
  const response = await axios.get(BACKEND_URL + "/" + type + ".json");
  const keys = [];

  //type의 key값들을 불러와서 keys에 push
  for (const key in response.data) {
    keys.push(key);
    // console.log(response.data[key].price.thisMonth.price);
  }

  // 아래 주석은 expense예제에서 data를 패치했던 방식임.
  // const datas = [];

  // for (const key in response.data) {
  //   const data = {
  //     id: key,
  //     amount: response.data[key].amount,
  //     date: response.data[key].date,
  //     description: response.data[key].description,
  //   };
  //   datas.push(data);
  // }
  return keys;
}
// type에 해당하는 데이터 불러와서 키 값들을 콘솔에 출력하는 로직.
// fetchHandler("users");

// async function fetchHandler(type) {
//   const users = await fetchData(type);
//   console.log(users);
// }

export function updateData(type, id, data) {
  return axios.put(BACKEND_URL + `/${type}/${id}.json`, data);
}

export function deleteData(type, id) {
  return axios.delete(BACKEND_URL + `/${type}/${id}.json`);
}

*/
