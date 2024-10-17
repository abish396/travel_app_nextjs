"use client"
import React, { useEffect, useState, createContext } from 'react';
import Image from 'next/image';
import TreksApi from "./trekservice";
import TrekList from '../../components/treks/treklist';
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
      <TrekList />
    </main>
  )
}
