import {SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form"

type TInputProps={
    name: string;
    label: string;
    type: string;
    size?: "small" | "medium";
    fullWidth: boolean;
    sx?: SxProps;
    placeholder?: string;
    required?: boolean;
}

const PHInput=({name, label, type="text", size, fullWidth, sx,placeholder,required}: TInputProps)=>{
    const {control} = useFormContext();
  return (
    <Controller
        control={control}
        name={name}
        render={({ field, fieldState:{error} }) => (
          <TextField
          {...field}
            label={label}
            variant="outlined"
            type={type}
            size={size}
            sx={{...sx}}
            placeholder={label}
            fullWidth={fullWidth}
            error={!!error?.message}
            helperText={error?.message}
          />
        )}
      />
  )
}

export default PHInput