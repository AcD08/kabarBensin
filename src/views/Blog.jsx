import React, { useEffect, useState } from 'react';
import Moment from 'moment';

const Blog = () => {
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    fetch('https://api-berita-indonesia.vercel.app/cnn/ekonomi')
      .then(response => response.json())
      .then(data => setDataBerita(data));
  }, []);

  let filteredData =
    dataBerita.length !== 0 &&
    dataBerita.data.posts.filter(item => {
      return item.description.includes('BBM');
    });

  console.log(filteredData);

  return (
    <>
      <div className="flex justify-center mt-10 flex-wrap ">
        <h2 className="text-4xl font-bold uppercase w-full text-center">
          Berita Terkini Terkait BBM
        </h2>
        <p className="text-sm w-full text-center">by CNN News.</p>
        {dataBerita.length === 0 ? 'loading data...' : ''}
        {dataBerita.length !== 0 &&
          filteredData.map((item, index) => {
            return (
              <div className="listBerita mx-2 my-2" key={index}>
                <a
                  target="_blank"
                  href={item.link}
                  className="block p-3 max-w-md bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700"
                  rel="noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {item.title}
                  </h5>
                  <p className="font-normal text-gray-400 ">
                    {Moment(item.pubDate).format('MMMM Do YYYY, h:mm a')}
                  </p>
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blog;
