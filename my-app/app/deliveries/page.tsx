import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Delivery {
  id: number;
  orderId: string;
  supplier: string;
  status: "pending" | "in-transit" | "delivered";
  date: string;
  items: number;
}

const deliveries: Delivery[] = [
  {
    id: 1,
    orderId: "ORD-001",
    supplier: "Tech Supplies Co.",
    status: "delivered",
    date: "2025-11-20",
    items: 15,
  },
  {
    id: 2,
    orderId: "ORD-002",
    supplier: "Global Electronics",
    status: "in-transit",
    date: "2025-11-22",
    items: 8,
  },
  {
    id: 3,
    orderId: "ORD-003",
    supplier: "Hardware Direct",
    status: "pending",
    date: "2025-11-23",
    items: 12,
  },
];

export default function Deliveries() {
  const getStatusBadge = (status: Delivery["status"]) => {
    const variants = {
      pending: "bg-muted text-muted-foreground",
      "in-transit": "bg-accent/20 text-accent",
      delivered: "bg-primary/20 text-primary",
    };
    return variants[status];
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">
          Delivery Tracking
        </h2>
        <p className="text-muted-foreground mt-1">Monitor incoming shipments</p>
      </div>

      <div className="border border-primary/30 rounded-lg overflow-hidden bg-card shadow-glow">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-primary/30 hover:bg-transparent">
              <TableHead>Order ID</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {deliveries.map((delivery) => (
              <TableRow key={delivery.id}>
                <TableCell>{delivery.orderId}</TableCell>
                <TableCell>{delivery.supplier}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-sm ${getStatusBadge(
                      delivery.status
                    )}`}
                  >
                    {delivery.status.replace("-", " ")}
                  </span>
                </TableCell>
                <TableCell>{delivery.date}</TableCell>
                <TableCell>{delivery.items}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
