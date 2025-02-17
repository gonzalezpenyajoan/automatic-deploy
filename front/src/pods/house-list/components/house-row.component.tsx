import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from '#common/components';
import { House } from '../house-list.vm';

type Props = RowRendererProps<House>;

export const HouseRowComponent: React.FunctionComponent<Props> = (props) => {
  const { row, onEdit, onDelete } = props;
  return (
    <RowComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.description}</CellComponent>
      <CellComponent>{row.beds.toString()}</CellComponent>
      <CellComponent align="center">
        <IconButton onClick={() => onEdit(row.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete({ id: row.id, name: row.name })}>
          <DeleteIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
