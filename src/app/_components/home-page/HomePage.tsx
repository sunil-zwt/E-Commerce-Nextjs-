'use client';
import React, { useEffect, useState } from 'react';
import { getEvents } from '@/api/_request';
import dynamic from 'next/dynamic';

// const UpcomingEvents = dynamic(() => import('./homeComponents/UpcomingEvents'));
const PopularEvents = dynamic(() => import('./homeComponents/PopularEvents'));
const PopularCategories = dynamic(
  () => import('./homeComponents/PopularCategories')
);
const HomePage = () => {
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    getEvents({}).then((response: any) => {
      if (response?.statusCode === 200) {
        const result = response?.data;
        setState(result);
      }
    });
  }, []);

  return (
    <main>
      <PopularEvents events={state} />
      {/* <UpcomingEvents /> */}
      <PopularCategories />
    </main>
  );
};

export default HomePage;
