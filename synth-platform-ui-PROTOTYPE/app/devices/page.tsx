import { Suspense } from "react"
import { Plus, RefreshCw, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DeviceStatusList from "@/components/device-status-list"

export default function DevicesPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Devices</h1>
            <p className="text-muted-foreground">Manage and monitor your fog network devices</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Device
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Offline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Load</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Device Management</CardTitle>
            <CardDescription>View and manage all devices in your fog network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search devices..." className="w-full pl-9" />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="edge">Edge Nodes</SelectItem>
                      <SelectItem value="sensor">Sensor Hubs</SelectItem>
                      <SelectItem value="compute">Compute Nodes</SelectItem>
                      <SelectItem value="gateway">IoT Gateways</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading devices...</div>}>
                <DeviceStatusList />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

