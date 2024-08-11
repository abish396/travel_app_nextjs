"use client"
import React, { useEffect, useState, createContext } from 'react';
import Image from 'next/image';
import TreksApi from "./trekservice";
import { Trek } from './components/trek';
import Link from 'next/link';

export default function Treks() {
  const [trekList, setTrekList] = useState([])

  let getAllTreks = async () => {
    try {
      const result = await TreksApi.getAllTreks();
      if (result.status === 200) {
        setTrekList(result.data);
      }
    } catch (err) {

    }
  }

  useEffect(() => {
    getAllTreks();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>List of All Treks</div> */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            trekList.map((trek:any, index) => {
              return <Link key={index} href={`/treks/detail/${trek.id}`} passHref>
                 <Trek trek={trek} />
              </Link>
            })
          }
        </div>
      </div>
    </main>
  )
}
