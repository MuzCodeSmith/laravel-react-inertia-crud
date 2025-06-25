import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {Megaphone } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';
import {product, getProductColumns } from './columns/product-columns';
import { type BreadcrumbItem } from '@/types';

interface PageProps {
  flash: {
    message?: string,
    products?: product[],
  };
}
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Products', href: '/products' },
];

export default function Index() {

  const { processing, delete: destroy } = useForm();

  const { flash, products = [] } = usePage<PageProps>().props;

  const handleEdit = (product: product) => {
    console.log("Editing", product)
  }

  const handleDelete = (id?: number, name?:string) => {
    if(confirm(`do yo really want to delete this product:${id}, ${name}`)){
      destroy(route('produts.destroy',id));
    }
  }

  const columns = getProductColumns(handleEdit, handleDelete)

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Products" />

      <div className="flex flex-col gap-4 p-4 overflow-x-auto">
        <Link href={route('products.create')}>
          <Button>Create Product</Button>
        </Link>

        {flash.message && (
          <Alert>
            <Megaphone className="h-4 w-4" />
            <AlertTitle>Notification</AlertTitle>
            <AlertDescription>{flash.message}</AlertDescription>
          </Alert>
        )}

        <DataTable columns={columns} data={products} />
      </div>
    </AppLayout>
  );
}
