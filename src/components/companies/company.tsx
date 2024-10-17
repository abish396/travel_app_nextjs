import React, { Component } from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function Company({ company }) {
    return <div>
        <Card className='rounded-xl-0 border-0 bg-card text-card-foreground shadow-0'>
            <CardContent className='p-0'>
                <Image
                    src="/company.jpg"
                    width={800}
                    height={700}
                    alt="Company"
                />
            </CardContent>
            <CardFooter className='flow-root p-0 mt-6'>
                <CardTitle className="w-full">{company.name}</CardTitle>
                <CardDescription className="w-full">{company.description}</CardDescription>
            </CardFooter>
        </Card>
    </div>
}