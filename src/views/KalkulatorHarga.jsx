import React from 'react';
const Header = React.lazy(() => import('../shared/Header'));

const KalkulatorHarga = () => {
  return (
    <>
      <Header />
      <div
        class="flex justify-center p-4 m-5 w-auto text-sm text-red-700 bg-red-100 rounded-lg "
        role="alert"
      >
        <span class="font-medium">On Development</span>
      </div>
    </>
  );
};

export default KalkulatorHarga;
