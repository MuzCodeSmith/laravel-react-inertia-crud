import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";

export interface product {
  id?: number,
  name?: string,
  price?: number,
  description?: string,
}

export const getProductColumns = (handleEdit:(product:product)=>void, handleDelete:(id:any,name:any)=>void):ColumnDef<product>[] =>[
  {accessorKey:'id', header:'#'},
  {accessorKey:'name', header:'Name'},
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const item = row.original
      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleEdit(item)}
          >
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => handleDelete(item.id, item.name )}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      )
    },
  }
]