import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";

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
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const product = row.original
      return (
        <div className='flex gap-2'>
          <Button variant="outline" size="sm">
            <Pencil className='h-4 v-4 mr-1'></Pencil>
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className='h-4 v-4 mr-1'></Trash2>
            Delete
          </Button>
        </div>
      )
    }
  },
];

