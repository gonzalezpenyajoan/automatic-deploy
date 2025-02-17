import { generatePath } from './routes.helpers';

interface BaseRoutes {
  root: string;
  houseList: string;
  createHouse: string;
  editHouse: string;
  user: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  houseList: '/house-list',
  createHouse: '/house-list/create',
  editHouse: '/house-list/:id',
  user: '/user',
};

type SwitchRoutes = BaseRoutes;

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes,
};

type EditParams = {
  id: string;
};

interface LinkRoutes extends Omit<BaseRoutes, 'editHouse'> {
  editHouse: (editParams: EditParams) => string;
}

export const linkRoutes: LinkRoutes = {
  ...baseRoutes,
  editHouse: (params) => generatePath(baseRoutes.editHouse, { ...params }),
};
