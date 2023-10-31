
import axios from "axios";
export const BACKEND_ENDPOINT="https://findfalcone.geektrust.com";

export  async function loadPlanets() {
    try {
      let response = await axios.get(
        `${BACKEND_ENDPOINT}/planets`
      );
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }
  export async function loadVehicles() {
    try {
      let response = await axios.get(
        `${BACKEND_ENDPOINT}/vehicles`
      );
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }
  export async function findToken() {
    console.log("findFalcon");
    try {
      const { data } = await axios.post(
        `${BACKEND_ENDPOINT}/token`,{},
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }
      );
      console.log(data.token);
      return data.token;
    } catch (err) {
      console.log(err.message);
    }
  }
  export async function find(token,selectedPlanets,selectedVehicles) {
    console.log("findFalcon");
    try {
        const postData = JSON.stringify({
            token: token,
            planet_names: selectedPlanets,
            vehicle_names: selectedVehicles
          });
          console.log(postData);
          const {data} = await axios.post(
            "https://findfalcone.geektrust.com/find",postData,
            {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            }
          );
         return data;
    } catch (err) {
      console.log(err.message);
    }
  }

  