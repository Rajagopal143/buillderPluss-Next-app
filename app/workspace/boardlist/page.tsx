"use client"
import BoardCard from '@/components/BoardCard';
import React, { useEffect, useState } from 'react'

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
         fetch(`${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/board/`),
         fetch(`${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/board/`),
         fetch(`${process.env.NEXT_PUBLIC_IP_ADDRESS}:4000/api/board/`)
         
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
    <div className="w-full h-full overflow-scroll pb-10">
      <h1 className="mt-10 ml-5 text-2xl font-bold">Recommended Boards</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1   place-items-center pb-5">
        {recommened.map((board: any, index: any) => (
          <BoardCard
            key={index}
            img1={board["laminates"].itemImage}
            img2={board["wallpaper"].itemImage}
            img3={board["tiles"].itemImage}
          />
        ))}
      </div>
      <hr />
      <h1 className="mt-10 ml-5 text-2xl font-bold">Trending Boards</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1   place-items-center pb-5">
        {trending.map((board: any, index: any) => (
          <BoardCard
            key={index}
            img1={board["laminates"].itemImage}
            img2={board["wallpaper"].itemImage}
            img3={board["tiles"].itemImage}
          />
        ))}
      </div>
      <hr />
      <h1 className="mt-10 ml-5 text-2xl font-bold">Recent Boards</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1   place-items-center pb-5">
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
