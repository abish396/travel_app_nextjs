"use client"
import React, { useEffect, useState, createContext } from 'react';
import Image from 'next/image';
import { CompanyApi } from "../../services";
import { Company } from './company';
import Link from 'next/link';

export default function Companies() {
    const [companyList, setCompanyList] = useState([])

    let getAllCompanies = async () => {
        try {
            const result = await CompanyApi.getAllCompanies({});
            if (result.status === 200) {
                setCompanyList(result.data);
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        getAllCompanies();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <div>List of All Companies</div> */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        companyList.map((company: any, index) => {
                            return <Link key={index} href={`/company/${company.id}`} passHref>
                                <Company company={company} />
                            </Link>
                        })
                    }
                </div>
            </div>
        </main>
    )
}
