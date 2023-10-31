import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import Destination from "./Destination";
import Vehicle from "./Vehicle";
import { useNavigate } from 'react-router-dom';
import {loadPlanets,loadVehicles,findToken,find} from "../api/api"

export default function FindingFalcon() {
  const noOfSearches = 4;
  let [search, setSearch] = useState(
    Array(noOfSearches).fill({ destination: "", vehicle: "" })
  );

  let [planets, setPlanets] = useState([]);
  let [vehicles, setVehicles] = useState([]);
  let [timeTaken, settimeTaken] = useState(0);

  const navigate = useNavigate();
  const handleChange = (event, index) => {
    console.log("event.target.value", event.target.value);
    console.log("index", index);
    let newSearch = [...search];
    if (event.target.name.includes("destination")) {
      newSearch[index] = {
        destination: event.target.value,
        vehicle: search[index].vehicle,
      };
    } else {
      newSearch[index] = {
        destination: search[index].destination,
        vehicle: event.target.value,
      };
    }
    calculateTime(newSearch);
    console.log("newSearch", newSearch);
    setSearch(newSearch);
  };
  function calculateTime(newSearch) {
    let newtime = 0;
    newSearch.forEach((element) => {
      if (element.destination && element.vehicle) {
        let vehicle = vehicles.find((item) => item.name === element.vehicle);
        let destination = planets.find(
          (item) => item.name === element.destination
        );
        newtime += destination.distance / vehicle.speed;
      }
    });
    settimeTaken(newtime);
  }

 

  async function findFalcon() {
    console.log("findFalcon");
    
    try {
    let selectedVehicles = search.map((item)=>item.vehicle);
    console.log(selectedVehicles)
    let selectedPlanets = search.map((item)=>item.destination);
    console.log(selectedPlanets)
      let token = await findToken();
      
     
      const  data  = await find(token,selectedPlanets,selectedVehicles);
      console.log(data);
      navigate('/success',data);
     
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    (async () => {
      let allPlanets = await loadPlanets();
      setPlanets(allPlanets);
      let allVehicles = await loadVehicles();
      setVehicles(allVehicles);
    })();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <Grid container spacing={2}>
          {search.map((data, index) => {
            return (
              <Grid item>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl sx={{ m: 2, minWidth: 120 }}>
                    <Destination
                      destination={data.destination}
                      planets={planets}
                      index={index}
                      updateDestination={handleChange}
                    />
                    {search[index].destination && (
                      <Vehicle
                        vehicle={data.vehicle}
                        index={index}
                        vehicles={vehicles}
                        updateVehicle={handleChange}
                      />
                    )}
                  </FormControl>
                </Box>
              </Grid>
            );
          })}

          <Grid item>
            <FormControl sx={{ m: 2, minWidth: 120 }}>
              <Typography>Time Taken:{timeTaken}</Typography>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div>
        <Button
          sx={{ m: 2 }}
          onClick={() => {
            (async () => findFalcon())();
          }}
          variant="contained"
        >
          Find Falcon
        </Button>
      </div>
      <Footer />
    </div>
  );
}
