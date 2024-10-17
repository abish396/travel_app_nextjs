import * as React from "react"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function Trek(props: any) {

    const trekName = props.trek.name;
    const trekDescription = props.trek.description;

    return (
        <div className="mt-6 mr-3 h-full">
            <Card className="h-full">
                <CardContent>
                    <Image
                        src="/trek.jpg"
                        width={800}
                        height={700}
                        alt="Company"
                        className='mt-6'
                    />
                </CardContent>
                <CardFooter className="flow-root">
                    <CardTitle>{trekName}</CardTitle>
                    <CardDescription>{trekDescription}</CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}
