import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useSnackbarContext } from '#common/components';
import { linkRoutes } from '#core/router';
import * as api from './api';
import { HouseListComponent } from './house-list.component';
import { House } from './house-list.vm';
import { mapHouseListFromApiToVM } from './house-list.mappers';

interface Props {
  className?: string;
}

export const HouseListContainer: React.FunctionComponent<Props> = (props) => {
  const { className } = props;
  const [houseList, setHouseList] = React.useState<House[]>([]);
  const { showMessage } = useSnackbarContext();
  const navigate = useNavigate();

  const handleError = (error) => {
    const { response } = error as AxiosError;
    if (response.status === 403 || response.status === 401) {
      navigate(linkRoutes.root);
      showMessage('Introduzca credenciales apropiados', 'error');
    }
  };

  const handleLoad = async () => {
    try {
      const apiHouseList = await api.getHouseList();
      setHouseList(mapHouseListFromApiToVM(apiHouseList));
    } catch (error) {
      handleError(error);
    }
  };
  React.useEffect(() => {
    handleLoad();
  }, []);

  const handleCreate = () => {
    navigate(linkRoutes.createHouse);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editHouse({ id }));
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteHouse(id);
      await handleLoad();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <HouseListComponent
      className={className}
      houseList={houseList}
      onCreate={handleCreate}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
