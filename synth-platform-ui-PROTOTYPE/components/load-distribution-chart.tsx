"use client"
import { Chart, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieArcSeries, PieValueLabel } from "@/components/ui/chart"

export default function LoadDistributionChart() {
  const data = [
    { name: "Fog Devices", value: 68, color: "hsl(var(--primary))" },
    { name: "Edge Devices", value: 20, color: "hsl(var(--amber-500))" },
    { name: "Cloud Offload", value: 12, color: "hsl(var(--muted-foreground))" },
  ]

  return (
    <ChartContainer className="h-full">
      <Chart
        series={
          <PieArcSeries
            data={data}
            valueAccessor={(d) => d.value}
            colorAccessor={(d) => d.color}
            arcWidth={30}
            cornerRadius={4}
            paddingAngle={2}
          >
            <PieValueLabel className="fill-foreground text-xs font-medium" valueAccessor={(d) => `${d.value}%`} />
          </PieArcSeries>
        }
        tooltip={
          <ChartTooltip>
            <ChartTooltipContent
              content={({ datum }) => {
                return (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: datum.color }} />
                      <span>{datum.name}</span>
                    </div>
                    <div className="font-bold">{datum.value}%</div>
                  </div>
                )
              }}
            />
          </ChartTooltip>
        }
      />
      <ChartLegend
        className="mt-4 justify-center gap-4"
        items={data.map((item) => ({
          name: item.name,
          color: item.color,
          shape: "circle",
        }))}
      />
    </ChartContainer>
  )
}

