"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Suppliers() {
  const [open, setOpen] = useState(false);

  const suppliers = [
    /* same data */
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-bold">Suppliers</h2>
          <p className="text-muted-foreground">Manage suppliers</p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Supplier
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Supplier</DialogTitle>
            </DialogHeader>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input placeholder="Supplier Name" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input placeholder="Email" type="email" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input placeholder="Phone number" />
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Add Supplier</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Products</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* {suppliers.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" /> {s.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="h-3 w-3" /> {s.phone}
                  </span>
                </div>
              </TableCell>
              <TableCell>{s.products}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
}
