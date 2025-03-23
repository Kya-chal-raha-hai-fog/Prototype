import { Calendar, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaSeries, LineSeries, BarSeries } from "@/components/ui/chart"
import { XAxis, YAxis } from "@/components/ui/chart"

export default function AnalyticsPage() {
  // Mock data for analytics
  const performanceData = [
    { date: "Jan", fogLatency: 15, cloudLatency: 85 },
    { date: "Feb", fogLatency: 14, cloudLatency: 88 },
    { date: "Mar", fogLatency: 12, cloudLatency: 89 },
    { date: "Apr", fogLatency: 11, cloudLatency: 90 },
    { date: "May", fogLatency: 10, cloudLatency: 92 },
    { date: "Jun", fogLatency: 9, cloudLatency: 95 },
    { date: "Jul", fogLatency: 8, cloudLatency: 98 },
  ]

  const energyData = [
    { date: "Jan", fogEnergy: 65, cloudEnergy: 100 },
    { date: "Feb", fogEnergy: 62, cloudEnergy: 100 },
    { date: "Mar", fogEnergy: 58, cloudEnergy: 100 },
    { date: "Apr", fogEnergy: 55, cloudEnergy: 100 },
    { date: "May", fogEnergy: 52, cloudEnergy: 100 },
    { date: "Jun", fogEnergy: 48, cloudEnergy: 100 },
    { date: "Jul", fogEnergy: 42, cloudEnergy: 100 },
  ]

  const taskDistributionData = [
    { type: "Data Processing", count: 42 },
    { type: "ML Inference", count: 28 },
    { type: "Sensor Fusion", count: 18 },
    { type: "Image Analysis", count: 12 },
    { type: "Other", count: 8 },
  ]

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Performance metrics and insights for your fog network</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Latency Reduction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">vs. cloud-only</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Energy Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">58%</div>
              <p className="text-xs text-muted-foreground">vs. cloud-only</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Network Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72%</div>
              <p className="text-xs text-muted-foreground">optimal distribution</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Tasks Processed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,458</div>
              <p className="text-xs text-muted-foreground">this month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="energy">Energy Efficiency</TabsTrigger>
            <TabsTrigger value="distribution">Task Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Latency Comparison</CardTitle>
                <CardDescription>Fog computing vs. cloud-only latency (in milliseconds)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]">
                  <Chart
                    series={
                      <>
                        <LineSeries
                          data={performanceData}
                          xAccessor={(d) => d.date}
                          yAccessor={(d) => d.fogLatency}
                          strokeColor="hsl(var(--primary))"
                          strokeWidth={2}
                        />
                        <LineSeries
                          data={performanceData}
                          xAccessor={(d) => d.date}
                          yAccessor={(d) => d.cloudLatency}
                          strokeColor="hsl(var(--muted-foreground))"
                          strokeWidth={2}
                          strokeDasharray="4,4"
                        />
                      </>
                    }
                    xAxis={
                      <XAxis
                        tickCount={7}
                        tickFormat={(value) => value}
                        tickLabelProps={{
                          className: "text-xs text-muted-foreground",
                        }}
                      />
                    }
                    yAxis={
                      <YAxis
                        tickCount={5}
                        tickFormat={(value) => `${value}ms`}
                        tickLabelProps={{
                          className: "text-xs text-muted-foreground",
                        }}
                      />
                    }
                    tooltip={
                      <ChartTooltip>
                        <ChartTooltipContent
                          content={({ datum }) => {
                            return (
                              <div className="flex flex-col gap-2">
                                <div className="text-xs font-bold">{datum.date}</div>
                                <div className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                                  <span className="text-xs">Fog: {datum.fogLatency}ms</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                                  <span className="text-xs">Cloud: {datum.cloudLatency}ms</span>
                                </div>
                              </div>
                            )
                          }}
                        />
                      </ChartTooltip>
                    }
                  />
                </ChartContainer>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Fog Computing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                    <span className="text-sm">Cloud-only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="energy" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Energy Consumption</CardTitle>
                <CardDescription>Fog computing vs. cloud-only energy usage (normalized %)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]">
                  <Chart
                    series={
                      <>
                        <AreaSeries
                          data={energyData}
                          xAccessor={(d) => d.date}
                          yAccessor={(d) => d.fogEnergy}
                          fillColor="hsl(var(--primary) / 0.2)"
                          strokeColor="hsl(var(--primary))"
                        />
                        <LineSeries
                          data={energyData}
                          xAccessor={(d) => d.date}
                          yAccessor={(d) => d.cloudEnergy}
                          strokeColor="hsl(var(--muted-foreground))"
                          strokeWidth={2}
                          strokeDasharray="4,4"
                        />
                      </>
                    }
                    xAxis={
                      <XAxis
                        tickCount={7}
                        tickFormat={(value) => value}
                        tickLabelProps={{
                          className: "text-xs text-muted-foreground",
                        }}
                      />
                    }
                    yAxis={
                      <YAxis
                        tickCount={5}
                        tickFormat={(value) => `${value}%`}
                        tickLabelProps={{
                          className: "text-xs text-muted-foreground",
                        }}
                      />
                    }
                    tooltip={
                      <ChartTooltip>
                        <ChartTooltipContent
                          content={({ datum }) => {
                            return (
                              <div className="flex flex-col gap-2">
                                <div className="text-xs font-bold">{datum.date}</div>
                                <div className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                                  <span className="text-xs">Fog: {datum.fogEnergy}%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                                  <span className="text-xs">Cloud: {datum.cloudEnergy}%</span>
                                </div>
                              </div>
                            )
                          }}
                        />
                      </ChartTooltip>
                    }
                  />
                </ChartContainer>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Fog Computing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                    <span className="text-sm">Cloud-only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Task Type Distribution</CardTitle>
                <CardDescription>Breakdown of computation tasks by type</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]">
                  <Chart
                    series={
                      <BarSeries
                        data={taskDistributionData}
                        xAccessor={(d) => d.type}
                        yAccessor={(d) => d.count}
                        colorAccessor={() => "hsl(var(--primary))"}
                      />
                    }
                    xAxis={
                      <XAxis
                        tickFormat={(value) => value}
                        tickLabelProps={{
                          className: "text-xs text-muted-foreground",
                        }}
                      />
                    }
                    yAxis={
                      <YAxis
                        tickFormat={(value) => `${value}`}
                        tickLabelProps={{
                          className: "text-xs text-muted-foreground",
                        }}
                      />
                    }
                    tooltip={
                      <ChartTooltip>
                        <ChartTooltipContent
                          content={({ datum }) => {
                            return (
                              <div className="flex flex-col gap-2">
                                <div className="text-xs font-bold">{datum.type}</div>
                                <div className="text-xs">Count: {datum.count}</div>
                              </div>
                            )
                          }}
                        />
                      </ChartTooltip>
                    }
                  />
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

