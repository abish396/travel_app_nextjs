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
} from "@/components/ui/tabs";
import TrekList from '../../../components/treks/treklist';

export default function CompanyDetails() {
  return (
    <Tabs defaultValue="treks" className="container w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="treks">Treks</TabsTrigger>
        <TabsTrigger value="homestays">Homestays</TabsTrigger>
        <TabsTrigger value="adventure">Adventure</TabsTrigger>
        <TabsTrigger value="expedition">Expedition</TabsTrigger>
      </TabsList>
      <TabsContent value="treks">
        <TrekList />
      </TabsContent>
      <TabsContent value="homestays">
      </TabsContent>
    </Tabs>
  )
}

