import React from "react";
import { InputAdornment, TextField, Container, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./filterField.module.scss";

interface Props {
  result?: number
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterField: React.FC<Props> = ({ result, onChange, value }) => {
  return (
    <Container component={"header"} classes={{ root: styles.wrapper }}>
      <Typography align="left">Filter by keywords</Typography>
      <TextField
        classes={{ root: styles.field }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          size: "small",
          onChange: onChange,
          value: value
        }}
        sx={{ minWidth: 1 / 3, marginBottom: 2, marginTop: 1, boxShadow: 2 }}
      />

      <Typography align="left">Result: {result ? result : 0}</Typography>
    </Container>
  )
}
