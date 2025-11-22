"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function StockHistory() {
  //   const stockTransfers = [
  //     /* same data */
  //   ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Stock Transfer History</h2>
        <p className="text-muted-foreground mt-1">Track stock movement</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transfer Records</CardTitle>

          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
            <Input placeholder="Search..." className="pl-10" />
          </div>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transfer ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* {stockTransfers.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{t.id}</TableCell>
                  <TableCell>{t.product}</TableCell>
                  <TableCell>{t.fromLocation}</TableCell>
                  <TableCell>{t.toLocation}</TableCell>
                  <TableCell>{t.quantity}</TableCell>
                  <TableCell>{t.date}</TableCell>
                  <TableCell>{t.status}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
