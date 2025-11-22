// import { DashboardPage } from "../components/dashboard";

// export default function Dashboard() {
// 	return <DashboardPage />;
// }

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  id: number;
  productName: string;
  sku: string;
  quantity: number;
  price: number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    productName: "Laptop Pro",
    sku: "LPT-001",
    quantity: 45,
    price: 1299.99,
  },
  {
    id: 2,
    productName: "Wireless Mouse",
    sku: "WMS-102",
    quantity: 150,
    price: 29.99,
  },
  {
    id: 3,
    productName: "USB-C Cable",
    sku: "USB-203",
    quantity: 300,
    price: 12.99,
  },
  {
    id: 4,
    productName: 'Monitor 27"',
    sku: "MON-304",
    quantity: 28,
    price: 399.99,
  },
  {
    id: 5,
    productName: "Keyboard Mechanical",
    sku: "KBD-405",
    quantity: 67,
    price: 89.99,
  },
];

export default function Dashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Stock Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor and manage your inventory
          </p>
        </div>

        <Button className="bg-primary text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or SKU"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <div className="border rounded-lg bg-card shadow-glow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredProducts.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.productName}</TableCell>
                <TableCell>{p.sku}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      p.quantity < 50
                        ? "bg-destructive/20 text-destructive"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {p.quantity}
                  </span>
                </TableCell>
                <TableCell>${p.price.toFixed(2)}</TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card border p-6 rounded-lg">
          <div className="text-sm text-muted-foreground">Total Products</div>
          <div className="text-3xl font-bold">{products.length}</div>
        </div>
        <div className="bg-card border p-6 rounded-lg">
          <div className="text-sm text-muted-foreground">Low Stock</div>
          <div className="text-3xl font-bold text-destructive">
            {products.filter((p) => p.quantity < 50).length}
          </div>
        </div>
        <div className="bg-card border p-6 rounded-lg">
          <div className="text-sm text-muted-foreground">Total Value</div>
          <div className="text-3xl font-bold">
            ${products.reduce((s, p) => s + p.price * p.quantity, 0).toFixed(2)}
          </div>
        </div>

        <div className="bg-card border p-6 rounded-lg">
          <div className="text-sm text-muted-foreground">Total Items</div>
          <div className="text-3xl font-bold">
            {products.reduce((s, p) => s + p.quantity, 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
