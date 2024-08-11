"use client"
import React, { useEffect, useState, createContext } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';

const mockData = {
    images: [
        '/images/trek1.jpg',
        '/images/trek2.jpg',
        '/images/trek3.jpg',
        '/images/trek4.jpg',
    ],
    title: 'Mount Everest Base Camp Trek',
    description: 'A thrilling adventure to the base camp of the world\'s highest peak.',
    difficulty: 'High',
    duration: '14 days',
    elevation: '5,364m',
    region: 'Nepal',
    price: "35000"
};

export default function TrekDetails() {
    return (
        <div className="md:container md:mx-auto">
            <div className="mx-20">
                <div className="text-2xl">{mockData.title}</div>
                <div className="h-40">Images will render</div>
                <div className="flex justify-between">
                    <div>
                        <div className="h-32 text-base">HOSTED BY</div>
                        <div className="h-32 text-base">HIGHLIGHTS</div>
                        <div className="text-base">{mockData.description}</div>
                        <div className="text-base mt-6">
                            <ul>
                                <li><span className="font-black">Difficulty</span>:{mockData.difficulty}</li>
                                <li><span className="font-black">Duration</span>:{mockData.duration}</li>
                                <li><span className="font-black">Elevation</span>:{mockData.elevation}</li>
                            </ul>
                        </div>
                        <div className="h-32 mt-5text-base">AMENITIES</div>
                    </div>
                    <div className='fixed' style={{left: "65%"}}>
                        <Card className="w-[350px]">
                            <CardHeader>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <div><span className="font-black">Price</span>:{mockData.price}</div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button className="w-full">Book</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
}
