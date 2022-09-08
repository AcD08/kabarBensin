/* eslint-disable eqeqeq */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import hargaJson from '../data/harga.json';

const TabelHarga = () => {
  const [wilayah, setWilayah] = useState('Jabodetabek');
  const [dataHarga, setDataHarga] = useState([]);

  const selectWilayah = e => {
    if (e.target.value !== null) {
      setWilayah(e.target.value);
    }
  };

  useEffect(() => {
    const filteredWilayah = hargaJson.data.content.find(
      item => item.namaWilyah === wilayah
    );

    if (filteredWilayah) {
      for (const data in filteredWilayah) {
        setDataHarga(filteredWilayah[data]);
      }
      // filteredWilayah.map(item => setDataHarga(item.listData));
      // setDataHarga(filteredWilayah[0].listData);
    } else {
      console.log('tidak ada');
    }

    // console.log(filteredWilayah, wilayah);
  }, [wilayah]);

  // filteredWilayah.map(item => setDataHarga(item));

  // console.log(
  //   filteredWilayah.map(item => {
  //     return item.listData.filter(data => data.typeSPBU === 'Pertamina');
  //   })
  // );

  return (
    <>
      <>
        <div className="flex justify-center w-auto p-5 mt-5">
          <div className="p-5 text-3xl font-semibold text-left text-blue-900 bg-blue-100 rounded-lg mb-5">
            TABEL HARGA BENSIN UMUM
            <p className="mt-2 text-sm font-normal">
              Berikut adalah tabel perbandingan harga bensin yang dijual pada
              empat SPBU yang ada di Indonesia. <br />
              Antara lain adalah:
            </p>
            <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
              <li>
                Pertamina (Pertalite RON 90, Pertamax RON 92, Pertamax Turbo RON
                98).
              </li>
            </ul>
            <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
              <li>
                Shell (Super RON 92, V-Power RON 95, V-Power Nitro+ RON 98)
              </li>
            </ul>
            <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
              <li>Vivo (Revvo89 RON 89, Revvo92 RON 92, Revvo95 RON 95)</li>
            </ul>
            <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
              <li>British Petroleum (BP 90, BP 92, BP 95)</li>
            </ul>
            <span className="text-sm font-normal text-red-500">
              *SPBU Swasta Vivo, British Petroleum, dan Shell hanya ada di
              beberapa wilayah di Indonesia.
            </span>
          </div>
        </div>
        <div className="flex justify-around flex-wrap">
          <select
            id="daerah"
            className="bg-gray-50 border w-full mx-5 md:w-[18%] ml-[5%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            onChange={e => selectWilayah(e)}
          >
            <option value="Jabodetabek">Wilayah Jabodetabek</option>
            <option value="Jawa">Wilayah Jawa</option>
            <option value="Sumatra">Wilayah Sumatra</option>
            <option value="Kalimantan">Wilayah Kalimantan</option>
            <option value="NusaTenggara">Wilayah Nusa Tenggara</option>
            <option value="Batam">Wilayah Batam</option>
            <option value="BangkaBelitung">Wilayah Bangka Belitung</option>
            <option value="Papua">Wilayah Papua</option>
            <option value="Maluku">Wilayah Maluku</option>
          </select>
          <p className="mt-3 md:mr-[5%]">
            Last Update:{' '}
            <span className="text-red-600">{hargaJson.data.lastUpdate}</span>
          </p>
        </div>
        {dataHarga.length === 0 && <p>Loading data...</p>}
        {dataHarga.length !== 0 && (
          <div className="overflow-x-auto relative sm:rounded-lg md:flex md:justify-center mt-5 ">
            <table className="text-sm text-left text-white w-5 md:w-3/5">
              <thead className="text-xs text-white uppercase bg-blue-600">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    RON
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Pertamina
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Shell
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Vivo
                  </th>
                  <th scope="col" className="py-3 px-6">
                    British Petroleum
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-700 border-b border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-bold text-white whitespace-nowrap"
                  >
                    90
                  </th>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      dataHarga[0].dataBensinUmum[0]?.harga}
                  </td>
                  <td className="py-4 px-6">N/A</td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah !== 'Jabodetabek' &&
                      'N/A'}
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[6]?.harga}
                  </td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[9]?.harga}
                    {dataHarga.length !== 0 &&
                      wilayah != 'Jabodetabek' &&
                      'N/A'}
                  </td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-800">
                  <th
                    scope="row"
                    className="py-4 px-6 font-bold text-white whitespace-nowrap"
                  >
                    92
                  </th>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 && (
                      <>
                        <span>{dataHarga[0].dataBensinUmum[1]?.harga}</span>
                        <br />
                        <span>
                          {dataHarga[0].dataBensinUmum[1]?.catatanKhusus}
                        </span>
                      </>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[3]?.harga}
                    {dataHarga.length !== 0 && wilayah === 'Sumatra' && (
                      <>
                        <span>{dataHarga[0].dataBensinUmum[3]?.harga}</span>
                        <br />
                        <span>
                          {dataHarga[0].dataBensinUmum[3]?.catatanKhusus}
                        </span>
                      </>
                    )}
                    {dataHarga.length !== 0 && wilayah === 'Jawa' && (
                      <>
                        <span>{dataHarga[0].dataBensinUmum[3]?.harga}</span>
                        <br />
                        <span>
                          {dataHarga[0].dataBensinUmum[3]?.catatanKhusus}
                        </span>
                      </>
                    )}
                    {dataHarga.length !== 0 &&
                      wilayah === 'Kalimantan' &&
                      'N/A'}
                    {dataHarga.length !== 0 &&
                      wilayah === 'NusaTenggara' &&
                      'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Batam' && 'N/A'}
                    {dataHarga.length !== 0 &&
                      wilayah === 'BangkaBelitung' &&
                      'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Papua' && 'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Maluku' && 'N/A'}
                  </td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[7]?.harga}
                    {dataHarga.length !== 0 &&
                      wilayah != 'Jabodetabek' &&
                      'N/A'}
                  </td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[10]?.harga}
                    {dataHarga.length !== 0 &&
                      wilayah != 'Jabodetabek' &&
                      'N/A'}
                  </td>
                </tr>
                <tr className="bg-gray-700 border-b border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-bold text-white whitespace-nowrap"
                  >
                    95
                  </th>
                  <td className="py-4 px-6">N/A</td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[4]?.harga}
                    {dataHarga.length !== 0 && wilayah === 'Sumatra' && (
                      <>
                        <span>{dataHarga[0].dataBensinUmum[4]?.harga}</span>
                        <br />
                        <span>
                          {dataHarga[0].dataBensinUmum[4]?.catatanKhusus}
                        </span>
                      </>
                    )}
                    {dataHarga.length !== 0 && wilayah === 'Jawa' && (
                      <>
                        <span>{dataHarga[0].dataBensinUmum[4]?.harga}</span>
                        <br />
                        <span>
                          {dataHarga[0].dataBensinUmum[4]?.catatanKhusus}
                        </span>
                      </>
                    )}
                    {dataHarga.length !== 0 &&
                      wilayah === 'Kalimantan' &&
                      'N/A'}
                    {dataHarga.length !== 0 &&
                      wilayah === 'NusaTenggara' &&
                      'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Batam' && 'N/A'}
                    {dataHarga.length !== 0 &&
                      wilayah === 'BangkaBelitung' &&
                      'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Papua' && 'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Maluku' && 'N/A'}
                  </td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[8]?.harga}
                    {dataHarga.length !== 0 &&
                      wilayah != 'Jabodetabek' &&
                      'N/A'}
                  </td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[11]?.harga}
                    {dataHarga.length !== 0 &&
                      wilayah != 'Jabodetabek' &&
                      'N/A'}
                  </td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-800">
                  <th
                    scope="row"
                    className="py-4 px-6 font-bold text-white whitespace-nowrap"
                  >
                    98
                  </th>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 && (
                      <>
                        <span>{dataHarga[0].dataBensinUmum[2]?.harga}</span>
                        <br />
                        <span>
                          {dataHarga[0].dataBensinUmum[2]?.catatanKhusus}
                        </span>
                      </>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {dataHarga.length !== 0 &&
                      wilayah === 'Jabodetabek' &&
                      dataHarga[0].dataBensinUmum[5]?.harga}
                    {dataHarga.length !== 0 &&
                      wilayah === 'Sumatra' &&
                      dataHarga[0].dataBensinUmum[5]?.harga}
                    {dataHarga.length !== 0 && wilayah === 'Jawa' && (
                      <>
                        <span>{dataHarga[0].dataBensinUmum[5]?.harga}</span>
                        <br />
                        <span>
                          {dataHarga[0].dataBensinUmum[5]?.catatanKhusus}
                        </span>
                      </>
                    )}
                    {dataHarga.length !== 0 &&
                      wilayah === 'Kalimantan' &&
                      'N/A'}
                    {dataHarga.length !== 0 &&
                      wilayah === 'NusaTenggara' &&
                      'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Batam' && 'N/A'}
                    {dataHarga.length !== 0 &&
                      wilayah === 'BangkaBelitung' &&
                      'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Papua' && 'N/A'}
                    {dataHarga.length !== 0 && wilayah === 'Maluku' && 'N/A'}
                  </td>
                  <td className="py-4 px-6">N/A</td>
                  <td className="py-4 px-6">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </>
      <>
        <div className="flex justify-center w-auto p-5 mt-5">
          <div className="p-5 text-3xl font-semibold text-left text-green-900 bg-green-100 rounded-lg mb-5">
            TABEL HARGA DIESEL
            <p className="mt-2 text-sm font-normal">
              Berikut adalah tabel perbandingan harga diesel yang dijual pada
              SPBU yang ada di Indonesia. <br />
              Antara lain adalah:
            </p>
            <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
              <li>Pertamina (Biosolar CN 48, DexLite CN 51, Dex CN 53).</li>
            </ul>
            <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
              <li>Shell (V-Power Diesel CN 51, Shell Diesel Extra CN 53)</li>
            </ul>
            <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
              <li>British Petroleum (BP Diesel CN 48)</li>
            </ul>
            <span className="text-sm font-normal text-red-500">
              *Catatan: SPBU British Petroleum, dan Shell hanya ada di beberapa
              wilayah di Indonesia.
            </span>
          </div>
        </div>

        <div className="overflow-x-auto relative sm:rounded-lg md:flex md:justify-center mt-5">
          <table className="text-sm text-left text-white w-full md:w-3/5 table-auto">
            <thead className="text-xs text-white uppercase bg-green-600">
              <tr>
                <th scope="col" className="py-3 px-6">
                  CN
                </th>
                <th scope="col" className="py-3 px-6">
                  Pertamina
                </th>
                <th scope="col" className="py-3 px-6">
                  Shell
                </th>
                <th scope="col" className="py-3 px-6">
                  British Petroleum
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700 border-b border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-bold text-white whitespace-nowrap"
                >
                  48
                </th>
                <td className="py-4 px-6">
                  {dataHarga.length !== 0 &&
                    wilayah === 'Jabodetabek' &&
                    dataHarga[0].dataBensinDiesel[5]?.harga}
                  {dataHarga.length !== 0 &&
                    wilayah === 'Jawa' &&
                    dataHarga[0].dataBensinDiesel[4]?.harga}
                  {dataHarga.length !== 0 &&
                    wilayah === 'Sumatra' &&
                    dataHarga[0].dataBensinDiesel[4]?.harga}
                  {dataHarga.length !== 0 &&
                    wilayah !== 'Jabodetabek' &&
                    wilayah !== 'Jawa' &&
                    wilayah !== 'Sumatra' &&
                    dataHarga[0].dataBensinDiesel[2]?.harga}
                </td>
                <td className="py-4 px-6">N/A</td>
                <td className="py-4 px-6">
                  {dataHarga.length !== 0 &&
                    wilayah === 'Jabodetabek' &&
                    dataHarga[0].dataBensinDiesel[4]?.harga}
                  {dataHarga.length !== 0 && wilayah != 'Jabodetabek' && 'N/A'}
                </td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-bold text-white whitespace-nowrap"
                >
                  51
                </th>
                <td className="py-4 px-6">
                  {dataHarga.length !== 0 && (
                    <>
                      <span>{dataHarga[0].dataBensinDiesel[1]?.harga}</span>
                      <br />
                      <span>
                        {dataHarga[0].dataBensinDiesel[1]?.catatanKhusus}
                      </span>
                    </>
                  )}
                </td>
                <td className="py-4 px-6">
                  {dataHarga.length !== 0 &&
                    wilayah === 'Jabodetabek' &&
                    dataHarga[0].dataBensinDiesel[2]?.harga}
                  {dataHarga.length !== 0 && wilayah === 'Jawa' && (
                    <>
                      <span>{dataHarga[0].dataBensinDiesel[2]?.harga}</span>
                      <br />
                      <span>
                        {dataHarga[0].dataBensinDiesel[2]?.catatanKhusus}
                      </span>
                    </>
                  )}
                  {dataHarga.length !== 0 && wilayah === 'Sumatra' && (
                    <>
                      <span>{dataHarga[0].dataBensinDiesel[2]?.harga}</span>
                      <br />
                      <span>
                        {dataHarga[0].dataBensinDiesel[2]?.catatanKhusus}
                      </span>
                    </>
                  )}
                  {dataHarga.length !== 0 &&
                    wilayah !== 'Jabodetabek' &&
                    wilayah !== 'Jawa' &&
                    wilayah !== 'Sumatra' &&
                    'N/A'}
                </td>
                <td className="py-4 px-6">N/A</td>
              </tr>
              <tr className="bg-gray-700 border-b border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-bold text-white whitespace-nowrap"
                >
                  53
                </th>
                <td className="py-4 px-6">
                  {dataHarga.length !== 0 && (
                    <>
                      <span>{dataHarga[0].dataBensinDiesel[0]?.harga}</span>
                      <br />
                      <span>
                        {dataHarga[0].dataBensinDiesel[0]?.catatanKhusus}
                      </span>
                    </>
                  )}
                </td>
                <td className="py-4 px-6">
                  {dataHarga.length !== 0 &&
                    wilayah === 'Jabodetabek' &&
                    dataHarga[0].dataBensinDiesel[3]?.harga}
                  {dataHarga.length !== 0 && wilayah === 'Jawa' && (
                    <>
                      <span>{dataHarga[0].dataBensinDiesel[3]?.harga}</span>
                      <br />
                      <span>
                        {dataHarga[0].dataBensinDiesel[3]?.catatanKhusus}
                      </span>
                    </>
                  )}
                  {dataHarga.length !== 0 && wilayah === 'Sumatra' && (
                    <>
                      <span>{dataHarga[0].dataBensinDiesel[3]?.harga}</span>
                      <br />
                      <span>
                        {dataHarga[0].dataBensinDiesel[3]?.catatanKhusus}
                      </span>
                    </>
                  )}
                  {dataHarga.length !== 0 &&
                    wilayah !== 'Jabodetabek' &&
                    wilayah !== 'Jawa' &&
                    wilayah !== 'Sumatra' &&
                    'N/A'}
                </td>
                <td className="py-4 px-6">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
      <div className="ml-[10%] md:ml-[20%] mt-5">
        <h2 className="mb-2 text-lg font-semibold text-black">
          Daftar Referensi Harga
        </h2>
        <ul className="space-y-1 max-w list-disc list-inside">
          <li>
            <a
              href="https://mypertamina.id/fuels-harga"
              className="hover:text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              Situs Web Resmi Pertamina
            </a>
          </li>
          <li>
            <a
              href="https://www.shell.co.id/in_id/pengendara-bermotor/bahan-bakar-shell/how-shell-price-fuel.html"
              className="hover:text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              Situs Web Resmi Shell
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TabelHarga;
