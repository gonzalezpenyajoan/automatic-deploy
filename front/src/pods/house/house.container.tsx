import React from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbarContext } from '#common/components';
import * as api from './api';
import { House, createEmptyHouse } from './house.vm';
import { HouseComponent } from './house.component';
import { mapHouseFromApiToVM, mapHouseFromVMToApi } from './house.mappers';

interface Props {
  className?: string;
}

interface Params extends Record<string, string> {
  id: string;
}

export const HouseContainer: React.FunctionComponent<Props> = (props) => {
  const { className } = props;
  const { id } = useParams<Params>();
  const isEditMode = Boolean(id);
  const [house, setHouse] = React.useState<House>(createEmptyHouse());
  const { showMessage } = useSnackbarContext();

  const handleLoadHouse = async () => {
    const apiHouse = await api.getHouse(id);
    setHouse(mapHouseFromApiToVM(apiHouse));
  };

  React.useEffect(() => {
    if (isEditMode) {
      handleLoadHouse();
    }
  }, [isEditMode]);

  const handleSave = async (newHouse: House) => {
    try {
      const apiHouse = mapHouseFromVMToApi(newHouse);
      console.log({ apiHouse });
      const response = await api.saveHouse(apiHouse);
      if (response) {
        setHouse(mapHouseFromApiToVM(response));
      }
      showMessage('Libro guardado correctamente', 'success');
    } catch {
      showMessage('No se ha podido guardar el libro', 'error');
    }
  };

  return (
    <HouseComponent className={className} house={house} onSave={handleSave} />
  );
};
