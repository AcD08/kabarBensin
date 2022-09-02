import React from 'react';
import hargaJson from '../data/harga.json';

const TabelHarga = () => {
  const filteredData = hargaJson.data.content.filter(item => {
    return item.namaWilyah === 'Jabodetabek';
  });
  console.log(
    filteredData.map(item => {
      return item.listData.filter(data => data.typeSPBU === 'Pertamina');
    })
  );
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
              *Catatan: SPBU Vivo, British Petroleum, dan Shell hanya ada di
              beberapa wilayah di Indonesia.
            </span>
          </div>
        </div>
        <div className="flex justify-around flex-wrap">
          <select
            id="daerah"
            className="bg-gray-50 border w-full mx-5 md:w-[18%] ml-[5%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            defaultValue="Pilih Wilayah..."
          >
            <option>Pilih Wilayah...</option>
            <option>Daerah Nganu</option>
          </select>
          <p className="mt-3 md:mr-[5%]">
            Last Update:{' '}
            <span className="text-red-600">{hargaJson.data.lastUpdate}</span>
          </p>
        </div>
        <div className="overflow-y-auto relative sm:rounded-lg flex justify-center mt-5">
          <table className="text-sm text-left text-white table-auto w-full md:w-3/5">
            <thead className="text-xs text-white uppercase bg-blue-600">
              <tr>
                <th scope="col" className="py-5 px-6">
                  RON
                </th>
                <th scope="col" className="py-5 px-6">
                  Pertamina
                </th>
                <th scope="col" className="py-5 px-6">
                  Shell
                </th>
                <th scope="col" className="py-5 px-6">
                  Vivo
                </th>
                <th scope="col" className="py-5 px-6">
                  British Petroleum
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700 border-b border-gray-700">
                <th
                  scope="row"
                  className="py-5 px-6 font-bold text-white whitespace-nowrap"
                >
                  90
                </th>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 19.000</td>
                <td className="py-5 px-6">Rp. 20.000</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-800">
                <th
                  scope="row"
                  className="py-5 px-6 font-bold text-white whitespace-nowrap"
                >
                  92
                </th>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 19.000</td>
                <td className="py-5 px-6">Rp. 20.000</td>
              </tr>
              <tr className="bg-gray-700 border-b border-gray-700">
                <th
                  scope="row"
                  className="py-5 px-6 font-bold text-white whitespace-nowrap"
                >
                  95
                </th>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 19.000</td>
                <td className="py-5 px-6">Rp. 20.000</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-800">
                <th
                  scope="row"
                  className="py-5 px-6 font-bold text-white whitespace-nowrap"
                >
                  98
                </th>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 19.000</td>
                <td className="py-5 px-6">Rp. 20.000</td>
              </tr>
            </tbody>
          </table>
        </div>
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
              <li>Pertamina (DexLite CN 51, Dex CN 53).</li>
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

        <div className="overflow-x-auto relative sm:rounded-lg flex justify-center mt-5">
          <table className="text-sm text-left text-white w-full md:w-3/5 table-auto">
            <thead className="text-xs text-white uppercase bg-green-600">
              <tr>
                <th scope="col" className="py-5 px-6">
                  CN
                </th>
                <th scope="col" className="py-5 px-6">
                  Pertamina
                </th>
                <th scope="col" className="py-5 px-6">
                  Shell
                </th>
                <th scope="col" className="py-5 px-6">
                  British Petroleum
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700 border-b border-gray-700">
                <th
                  scope="row"
                  className="py-5 px-6 font-bold text-white whitespace-nowrap"
                >
                  48
                </th>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 19.000</td>
              </tr>
              <tr className="bg-gray-800 border-b border-gray-800">
                <th
                  scope="row"
                  className="py-5 px-6 font-bold text-white whitespace-nowrap"
                >
                  51
                </th>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 19.000</td>
              </tr>
              <tr className="bg-gray-700 border-b border-gray-700">
                <th
                  scope="row"
                  className="py-5 px-6 font-bold text-white whitespace-nowrap"
                >
                  53
                </th>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 17.000</td>
                <td className="py-5 px-6">Rp. 19.000</td>
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
