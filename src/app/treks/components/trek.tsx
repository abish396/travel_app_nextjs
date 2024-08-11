import * as React from "react"

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

export function Trek(props:any) {

    const trekName = props.trek.name;
    const trekDescription = props.trek.description;

    return (
        <div className="m-6">
            <Card>
                <CardContent>

                </CardContent>
                <CardFooter className="flex justify-between">
                    <CardTitle>{trekName}</CardTitle>
                    <CardDescription>{trekDescription}</CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}
