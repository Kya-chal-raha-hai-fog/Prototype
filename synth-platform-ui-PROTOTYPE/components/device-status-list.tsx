"use client"

import { useState } from "react"
import { Cpu, Smartphone, Wifi, MoreVertical, Battery, BatteryCharging } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

// Mock data for device status
const mockDevices = [
  {
    id: "device-001",
    name: "Edge Node Alpha",
    type: "edge",
    status: "online",
    load: 78,
    battery: 65,
    lastSeen: "Just now",
    location: "Building A, Floor 2",
  },
  {
    id: "device-002",
    name: "Sensor Hub Beta",
    type: "sensor",
    status: "online",
    load: 42,
    battery: 89,
    lastSeen: "2 min ago",
    location: "Building A, Floor 1",
  },
  {
    id: "device-003",
    name: "Compute Node Gamma",
    type: "compute",
    status: "online",
    load: 91,
    battery: 32,
    lastSeen: "Just now",
    location: "Building B, Floor 3",
  },
  {
    id: "device-004",
    name: "IoT Gateway Delta",
    type: "gateway",
    status: "offline",
    load: 0,
    battery: 0,
    lastSeen: "1 hour ago",
    location: "Building C, Floor 1",
  },
]

export default function DeviceStatusList() {
  const [devices, setDevices] = useState(mockDevices)

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "edge":
        return <Cpu className="h-4 w-4" />
      case "sensor":
        return <Smartphone className="h-4 w-4" />
      case "compute":
        return <Cpu className="h-4 w-4" />
      case "gateway":
        return <Wifi className="h-4 w-4" />
      default:
        return <Cpu className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    if (status === "online") {
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Online
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
        Offline
      </Badge>
    )
  }

  return (
    <div className="space-y-4">
      {devices.map((device) => (
        <div key={device.id} className="flex items-center justify-between p-2 rounded-lg border">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${device.status === "online" ? "bg-green-100" : "bg-gray-100"}`}>
              {getDeviceIcon(device.type)}
            </div>
            <div>
              <div className="font-medium">{device.name}</div>
              <div className="text-xs text-muted-foreground">{device.location}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="text-xs text-muted-foreground mb-1">Computation Load</div>
              <div className="flex items-center gap-2">
                <Progress value={device.load} className="h-2 w-24" />
                <span className="text-xs">{device.load}%</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {device.battery > 20 ? (
                <Battery className="h-4 w-4 text-green-600" />
              ) : (
                <BatteryCharging className="h-4 w-4 text-amber-600" />
              )}
              <span className="text-xs">{device.battery}%</span>
            </div>

            <div className="flex items-center gap-2">
              {getStatusBadge(device.status)}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Assign Tasks</DropdownMenuItem>
                  <DropdownMenuItem>Configure</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    {device.status === "online" ? "Disconnect" : "Reconnect"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

