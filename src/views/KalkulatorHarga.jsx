import React from 'react';
import { useState } from 'react';
const Header = React.lazy(() => import('../shared/Header'));

const KalkulatorHarga = () => {
  let [statusPage, setStatusPage] = useState(true);
  return (
    <>
      <Header />
      {statusPage && (
        <>
          <div
            class="flex justify-center p-4 m-5 w-auto text-sm text-red-700 bg-red-100 rounded-lg "
            role="alert"
          >
            <span class="font-medium">On Development</span>
          </div>
        </>
      )}
      {!statusPage && 'form kalkulator in here'}
    </>
  );
};

export default KalkulatorHarga;
