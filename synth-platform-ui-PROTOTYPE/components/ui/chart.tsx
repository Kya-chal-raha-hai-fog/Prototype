import type * as React from "react"

const ChartContainer = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={className}>{children}</div>
}

type ChartProps = {
  series: React.ReactNode
  xAxis?: React.ReactNode
  yAxis?: React.ReactNode
  tooltip?: React.ReactNode
}

const Chart = ({ series, xAxis, yAxis, tooltip }: ChartProps) => {
  return (
    <div>
      {series}
      {xAxis}
      {yAxis}
      {tooltip}
    </div>
  )
}

type AreaSeriesProps = {
  data: any[]
  xAccessor: (d: any) => string | number
  yAccessor: (d: any) => number
  fillColor: string
  strokeColor: string
}

const AreaSeries = ({ data, xAccessor, yAccessor, fillColor, strokeColor }: AreaSeriesProps) => {
  return null
}

type LineSeriesProps = {
  data: any[]
  xAccessor: (d: any) => string | number
  yAccessor: (d: any) => number
  strokeColor: string
  strokeWidth?: number
  strokeDasharray?: string
}

const LineSeries = ({ data, xAccessor, yAccessor, strokeColor, strokeWidth, strokeDasharray }: LineSeriesProps) => {
  return null
}

type BarSeriesProps = {
  data: any[]
  xAccessor: (d: any) => string | number
  yAccessor: (d: any) => number
  colorAccessor: (d: any) => string
}

const BarSeries = ({ data, xAccessor, yAccessor, colorAccessor }: BarSeriesProps) => {
  return null
}

type XAxisProps = {
  tickCount?: number
  tickFormat?: (value: string | number) => string | number
  tickLabelProps?: any
}

const XAxis = ({ tickCount, tickFormat, tickLabelProps }: XAxisProps) => {
  return null
}

type YAxisProps = {
  tickCount?: number
  tickFormat?: (value: string | number) => string | number
  tickLabelProps?: any
}

const YAxis = ({ tickCount, tickFormat, tickLabelProps }: YAxisProps) => {
  return null
}

type PieArcSeriesProps = {
  data: any[]
  valueAccessor: (d: any) => number
  colorAccessor: (d: any) => string
  arcWidth: number
  cornerRadius?: number
  paddingAngle?: number
  children?: React.ReactNode
}

const PieArcSeries = ({
  data,
  valueAccessor,
  colorAccessor,
  arcWidth,
  cornerRadius,
  paddingAngle,
  children,
}: PieArcSeriesProps) => {
  return null
}

type PieValueLabelProps = {
  className?: string
  valueAccessor: (d: any) => string
}

const PieValueLabel = ({ className, valueAccessor }: PieValueLabelProps) => {
  return null
}

type ChartTooltipProps = {
  children: React.ReactNode
}

const ChartTooltip = ({ children }: ChartTooltipProps) => {
  return null
}

type ChartTooltipContentProps = {
  content: ({ datum }: { datum: any }) => React.ReactNode
}

const ChartTooltipContent = ({ content }: ChartTooltipContentProps) => {
  return null
}

type ChartLegendItemProps = {
  name: string
  color: string
  shape?: "circle" | "square" | "line"
}

type ChartLegendProps = {
  className?: string
  items: ChartLegendItemProps[]
}

const ChartLegend = ({ className, items }: ChartLegendProps) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className || ""}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.shape === "line" ? (
            <div className="h-0.5 w-4" style={{ backgroundColor: item.color }} />
          ) : (
            <div
              className={`h-3 w-3 ${item.shape === "square" ? "" : "rounded-full"}`}
              style={{ backgroundColor: item.color }}
            />
          )}
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export {
  Chart,
  ChartContainer,
  AreaSeries,
  LineSeries,
  XAxis,
  YAxis,
  PieArcSeries,
  PieValueLabel,
  BarSeries,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
}

