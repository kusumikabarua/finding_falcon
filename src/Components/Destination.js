
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export default function Destination({
  destination,
  updateDestination,
  planets,
  index,
}) {
  return (
    <>
      <InputLabel id={`destination${index}-select-label`}>
        Destination {index+1}
      </InputLabel>
      <Select
        labelId={`destination${index}-select-label`}
        name={`destination${index}`}
        value={destination}
        onChange={(e)=>{updateDestination(e,index)}}
        label={`destination${index}`}
        fullWidth
      >
        {planets.map((item) => {
          return <MenuItem value={item.name}>{item.name}</MenuItem>;
        })}
      </Select>
    </>
  );
}
