"use client"
import React, { useEffect, useState, createContext } from 'react';
import Image from 'next/image';
import TreksApi from "../../services/treks";
import { Trek } from './trek';
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
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    trekList.map((trek: any, index) => {
                        return <Link key={index} href={`/treks/${trek.id}`} passHref>
                            <Trek trek={trek} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
