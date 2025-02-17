import React from 'react';
import { AppLayout } from '#layouts';
import { HouseListContainer } from '#pods/house-list';

export const HouseListScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      {({ className }) => <HouseListContainer className={className} />}
    </AppLayout>
  );
};
