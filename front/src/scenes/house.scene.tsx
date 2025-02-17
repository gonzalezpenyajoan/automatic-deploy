import React from 'react';
import { AppLayout } from '#layouts';
import { HouseContainer } from '#pods/house';

export const HouseScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      {({ className }) => <HouseContainer className={className} />}
    </AppLayout>
  );
};
