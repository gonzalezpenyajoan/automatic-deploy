import React from 'react';
import { TableContainer } from '#common/components';
import { House } from './house-list.vm';
import { HouseRowComponent } from './components';

interface Props {
  houseList: House[];
  onCreate: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  className?: string;
}

export const HouseListComponent: React.FunctionComponent<Props> = (props) => {
  const { className, houseList, onCreate, onEdit, onDelete } = props;
  return (
    <TableContainer
      className={className}
      columns={[
        'Titulo',
        'Descripción',
        'Camas',
        { label: 'Comandos', align: 'center' },
      ]}
      rows={houseList}
      rowRenderer={HouseRowComponent}
      labels={{
        createButton: 'Añadir casa',
        deleteConfirmationDialog: {
          title: 'Borrar casa',
          content: ({itemName}) => (
            <p>
              ¿Está seguro de borrar <strong>{itemName}</strong>?
            </p>
          ),
          closeButton: 'Cancelar',
          acceptButton: 'Aceptar',
        },
      }}
      onCreate={onCreate}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};
