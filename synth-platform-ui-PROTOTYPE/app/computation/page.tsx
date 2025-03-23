import { Play, Pause, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ComputationPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Computation Management</h1>
            <p className="text-muted-foreground">Monitor and manage computational tasks across your fog network</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Rebalance Load
            </Button>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Deploy New Task
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Network Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Cloud Offloading</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12%</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="active">Active Tasks</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>

            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="active" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Computation Tasks</CardTitle>
                <CardDescription>Currently running tasks across your fog network</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Started</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">TASK-4872</TableCell>
                      <TableCell>Data Processing</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                          High
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={75} className="h-2 w-24" />
                          <span className="text-xs">75%</span>
                        </div>
                      </TableCell>
                      <TableCell>Edge Node Alpha</TableCell>
                      <TableCell>2 min ago</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pause className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TASK-4871</TableCell>
                      <TableCell>Image Analysis</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">
                          Medium
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={32} className="h-2 w-24" />
                          <span className="text-xs">32%</span>
                        </div>
                      </TableCell>
                      <TableCell>Compute Node Gamma</TableCell>
                      <TableCell>5 min ago</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pause className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TASK-4870</TableCell>
                      <TableCell>Sensor Data Fusion</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                          Low
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={91} className="h-2 w-24" />
                          <span className="text-xs">91%</span>
                        </div>
                      </TableCell>
                      <TableCell>Sensor Hub Beta</TableCell>
                      <TableCell>8 min ago</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pause className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TASK-4869</TableCell>
                      <TableCell>ML Inference</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                          High
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={45} className="h-2 w-24" />
                          <span className="text-xs">45%</span>
                        </div>
                      </TableCell>
                      <TableCell>Edge Node Alpha</TableCell>
                      <TableCell>12 min ago</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pause className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Tasks</CardTitle>
                <CardDescription>Tasks scheduled to run in the future</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6 text-muted-foreground">
                  Scheduled tasks will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Tasks</CardTitle>
                <CardDescription>Successfully completed computation tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6 text-muted-foreground">
                  Completed tasks will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="failed" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Failed Tasks</CardTitle>
                <CardDescription>Tasks that failed to complete</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-6 text-muted-foreground">
                  Failed tasks will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

