import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, Cloud, Cpu, Layers, Network, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import NetworkOverview from "@/components/network-overview"
import ComputationStats from "@/components/computation-stats"
import DeviceStatusList from "@/components/device-status-list"
import LoadDistributionChart from "@/components/load-distribution-chart"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Network className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">synth</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/devices" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Devices
            </Link>
            <Link href="/computation" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Computation
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Analytics
            </Link>
            <Link href="/settings" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button size="sm">
              Deploy Task
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <section>
            <h1 className="text-3xl font-bold mb-2">Fog Network Dashboard</h1>
            <p className="text-muted-foreground mb-6">
              Monitor and manage your decentralized fog-based IoT computation network
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
                  <Cpu className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+4 from last hour</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Computation Load</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <p className="text-xs text-muted-foreground">Distributed across fog network</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cloud Offloading</CardTitle>
                  <Cloud className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12%</div>
                  <p className="text-xs text-muted-foreground">-8% from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                  <Layers className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-muted-foreground">24 high priority</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Network Overview</CardTitle>
                <CardDescription>Visualization of your fog network topology</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <Suspense
                  fallback={
                    <div className="h-full flex items-center justify-center">Loading network visualization...</div>
                  }
                >
                  <NetworkOverview />
                </Suspense>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Detailed Topology
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Computation Distribution</CardTitle>
                <CardDescription>How computational load is balanced across devices</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <Suspense
                  fallback={<div className="h-full flex items-center justify-center">Loading computation data...</div>}
                >
                  <LoadDistributionChart />
                </Suspense>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Optimize Distribution
                </Button>
              </CardFooter>
            </Card>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Device Status</CardTitle>
                <CardDescription>Status of devices in your fog network</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense
                  fallback={<div className="h-[200px] flex items-center justify-center">Loading device status...</div>}
                >
                  <DeviceStatusList />
                </Suspense>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View All Devices
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Computation Stats</CardTitle>
                <CardDescription>Performance metrics of your fog network</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div className="h-[200px] flex items-center justify-center">Loading stats...</div>}>
                  <ComputationStats />
                </Suspense>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Detailed Analytics
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
      <footer className="border-t py-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">synth</span>
          </div>
          <p className="text-sm text-muted-foreground">Decentralized Fog-Based IoT Computation Platform</p>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary">
              Documentation
            </Link>
            <Link href="/api" className="text-sm text-muted-foreground hover:text-primary">
              API
            </Link>
            <Link href="/support" className="text-sm text-muted-foreground hover:text-primary">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

