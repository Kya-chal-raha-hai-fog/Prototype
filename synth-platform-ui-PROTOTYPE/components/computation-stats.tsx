"use client"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaSeries, LineSeries } from "@/components/ui/chart"
import { XAxis, YAxis } from "@/components/ui/chart"

export default function ComputationStats() {
  // Mock data for computation stats
  const data = [
    { time: "00:00", fogLoad: 45, cloudOffload: 15 },
    { time: "04:00", fogLoad: 42, cloudOffload: 18 },
    { time: "08:00", fogLoad: 55, cloudOffload: 12 },
    { time: "12:00", fogLoad: 78, cloudOffload: 8 },
    { time: "16:00", fogLoad: 82, cloudOffload: 5 },
    { time: "20:00", fogLoad: 68, cloudOffload: 12 },
    { time: "24:00", fogLoad: 52, cloudOffload: 14 },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 rounded-lg border">
          <div className="text-xs text-muted-foreground">Avg. Latency</div>
          <div className="text-xl font-bold">12ms</div>
          <div className="text-xs text-green-600">-8ms from cloud</div>
        </div>
        <div className="p-2 rounded-lg border">
          <div className="text-xs text-muted-foreground">Energy Saved</div>
          <div className="text-xl font-bold">42%</div>
          <div className="text-xs text-green-600">vs. cloud-only</div>
        </div>
      </div>

      <ChartContainer className="h-[150px]">
        <Chart
          series={
            <>
              <AreaSeries
                data={data}
                xAccessor={(d) => d.time}
                yAccessor={(d) => d.fogLoad}
                fillColor="hsl(var(--primary) / 0.2)"
                strokeColor="hsl(var(--primary))"
              />
              <LineSeries
                data={data}
                xAccessor={(d) => d.time}
                yAccessor={(d) => d.cloudOffload}
                strokeColor="hsl(var(--muted-foreground))"
                strokeDasharray="4,4"
              />
            </>
          }
          xAxis={
            <XAxis
              tickCount={3}
              tickFormat={(value) => value}
              tickLabelProps={{
                className: "text-xs text-muted-foreground",
              }}
            />
          }
          yAxis={
            <YAxis
              tickCount={3}
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
                      <div className="text-xs font-bold">{datum.time}</div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-xs">Fog Load: {datum.fogLoad}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                        <span className="text-xs">Cloud Offload: {datum.cloudOffload}%</span>
                      </div>
                    </div>
                  )
                }}
              />
            </ChartTooltip>
          }
        />
      </ChartContainer>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <span>Fog Load</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
          <span>Cloud Offload</span>
        </div>
      </div>
    </div>
  )
}

