import {
  Stack,
  TextField,
  Autocomplete,
  InputAdornment,
  Box,
} from "@mui/material";
import { timeZone } from "../Services/countryData";
import { useForm } from "react-hook-form";
import useCountries, { Country } from "../Custom hooks/useCountries";

interface Props {
  onSelectCountry: (country: Country | null) => void;
  selectedCountry: Country | null;
  onSelectTimezone: (timeZone: string | null) => void;
  onCopyPhone: (event: string) => void;
}

const CountryPhoneTimezone = ({
  onSelectCountry,
  selectedCountry,
  onSelectTimezone,
  onCopyPhone,
}: Props) => {
  const {
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { countries } = useCountries();

 

  return (
    <div>
      <Stack spacing={4}>
        <Stack direction={"row"} spacing={2}>
          <Autocomplete
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "20px",
              },
            }}
            id="country"
            {...register("country", { required: true })}
            options={countries}
            value={selectedCountry}
            onChange={(event, newValue) => onSelectCountry(newValue)}
            getOptionLabel={(option) => option.name.common}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{
                  "& > img": { mr: 2, flexShrink: 0 },
                }}
                {...props}
              >
                {option.flag} ({option.name.common}) {option.idd.root}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                error={errors.country?.type === "required"}
                helperText={
                  errors.timeZone?.type === "required" ? "Choose a Country" : ""
                }
                fullWidth
                label="Country"
              />
            )}
            fullWidth
          />

          <TextField
            id="phone"
            {...register("phone", { required: true })}
            error={errors.phone?.type === "required"}
            helperText={
              errors.phone?.type === "required" ? "Phone cannot be empty" : ""
            }
            fullWidth
            label="phone"
            onChange={(event) => onCopyPhone(event.target.value)}
            InputProps={{
              type: "phone",
              startAdornment: (
                <InputAdornment position="start">
                  {selectedCountry?.flag} {selectedCountry?.idd.root}
                  {selectedCountry?.idd.suffixes.slice(0, 3)}
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Autocomplete
          id="timeZone"
          {...register("timeZone", { required: true })}
          options={timeZone}
          onChange={(event, newValue) => onSelectTimezone(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              error={errors.timeZone?.type === "required"}
              helperText={
                errors.timeZone?.type === "required" ? "Choose a Time Zone" : ""
              }
              fullWidth
              label="Time Zone"
            />
          )}
          fullWidth
        />
      </Stack>
    </div>
  );
};

export default CountryPhoneTimezone;
