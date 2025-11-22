"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Warehouses() {
  const [open, setOpen] = useState(false);

  const warehouses = [
    /* same data */
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-bold">Warehouse Management</h2>
          <p className="text-muted-foreground">Manage warehouse locations</p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Warehouse
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Warehouse</DialogTitle>
            </DialogHeader>

            <form className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input placeholder="Warehouse name" />
              </div>
              <div className="space-y-2">
                <Label>ID</Label>
                <Input placeholder="Warehouse ID" />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input placeholder="Location" />
              </div>

              <div className="col-span-2 flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Add Warehouse</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Warehouse List</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* {warehouses.map((w) => (
                <TableRow key={w.id}>
                  <TableCell>{w.id}</TableCell>
                  <TableCell>{w.name}</TableCell>
                  <TableCell>{w.location}</TableCell>
                  <TableCell>{w.status}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
