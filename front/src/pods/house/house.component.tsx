import React from 'react';
import { cx } from '@emotion/css';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { House } from './house.vm';
import * as classes from './house.styles';

interface Props {
  house: House;
  onSave: (house: House) => void;
  className?: string;
}

export const HouseComponent: React.FunctionComponent<Props> = (props) => {
  const { className, house, onSave } = props;
  const { handleSubmit, control, reset } = useForm({
    defaultValues: house,
  });

  React.useEffect(() => {
    reset(house);
  }, [house]);

  return (
    <form
      className={cx(classes.root, className)}
      onSubmit={handleSubmit(onSave)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            className={classes.title}
            inputProps={{ ...field }}
            label="Titulo"
            fullWidth={true}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            className={classes.releaseDate}
            inputProps={{ ...field }}
            label="Fecha publicación"
            fullWidth={true}
            placeholder="dd/mm/aaaa"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      <Controller
        name="beds"
        control={control}
        render={({ field }) => (
          <TextField
            className={classes.author}
            inputProps={{ ...field }}
            label="Autor"
            fullWidth={true}
          />
        )}
      />
      <Button
        className={classes.submit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Guardar
      </Button>
    </form>
  );
};
