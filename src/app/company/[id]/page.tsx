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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function CompanyDetails() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="treks">Treks</TabsTrigger>
        <TabsTrigger value="homestays">Homestays</TabsTrigger>
      </TabsList>
      <TabsContent value="treks">
      </TabsContent>
      <TabsContent value="homestays">
      </TabsContent>
    </Tabs>
  )
}

