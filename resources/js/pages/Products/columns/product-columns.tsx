import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from "lucide-react";

export interface product {
  id?: number,
  name?: string,
  price?: number,
  description?: string,
}

export const productColumns: ColumnDef<product>[] = [
  { accessorKey: "id", header: "#" },
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  { accessorKey: "description", header: "Description" },
  { accessorKey: "action", header: "Action" },
];

