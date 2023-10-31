import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function Vehicle({vehicle,index,updateVehicle,vehicles}){
    return( <>
        <FormLabel id="vehicle-buttons-group-label">
          Vehicle
        </FormLabel>
        <RadioGroup
          aria-labelledby="vehicle-buttons-group-label"
          name={`vehicle${index}`}
          value={vehicle.name}
          
        >
          {vehicles.map((item) => {
            return (
              <FormControlLabel
                value={item.name}
                control={<Radio />}
                label={item.name + "(" + item.total_no + ")"}
                onClick={(e) => {
                  updateVehicle(e,index);
                }}
              />
            );
          })}
        </RadioGroup>
      </>)
}