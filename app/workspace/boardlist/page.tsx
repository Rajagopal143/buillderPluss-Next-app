"use client"
import React, { useEffect, useState } from 'react'
import BoardCard from './(components)/BoardCard';

const page: React.FC = () => {
  const [recommened, setrecommened] = useState<any>([]);
  const [trending, settrending] = useState<any>([]);
  const [recent, setrecent] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const responses = await Promise.all([
         fetch("http://23.20.122.223:4000/api/board/"),
         fetch("http://23.20.122.223:4000/api/board/"),
         fetch("http://23.20.122.223:4000/api/board/"),
       ]);

       responses.forEach((response) => {
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
       });

       const results = await Promise.all(
         responses.map((response) => response.json())
       );

       console.log(results);

       setrecommened(results[0]);
       settrending(results[1]);
       setrecent(results[2]);
     } catch (error:any) {
       setError(error.message);
     } finally {
       setLoading(false);
     }
   };

   fetchData();
 }, []);
    
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full h-full overflow-scroll ">
      <h1 className="mt-10 ml-5 text-2xl font-bold">Recommended Boards</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 overflow-scroll  place-items-center pb-5">
        {recommened.map((board: any, index: any) => (
          <BoardCard
            key={index}
            img1={board["laminates"].itemImage}
            img2={board["wallpaper"].itemImage}
            img3={board["tiles"].itemImage}
          />
        ))}
      </div>
      <h1 className="mt-10 ml-5 text-2xl font-bold">Trending Boards</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 overflow-scroll  place-items-center pb-5">
        {trending.map((board: any, index: any) => (
          <BoardCard
            key={index}
            img1={board["laminates"].itemImage}
            img2={board["wallpaper"].itemImage}
            img3={board["tiles"].itemImage}
          />
        ))}
      </div>
      <h1 className="mt-10 ml-5 text-2xl font-bold">Recent Boards</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 overflow-scroll  place-items-center pb-5">
        {recent.map((board: any, index: any) => (
          <BoardCard
            key={index}
            img1={board["laminates"].itemImage}
            img2={board["wallpaper"].itemImage}
            img3={board["tiles"].itemImage}
          />
        ))}
      </div>
    </div>
  );
};

export default page
