import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head,Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create A New Product',
        href: '/products/create',
    },
];

export default function Create() {

    const {data,setData,post,processing,errors} = useForm({
        name:'',
        price:'',
        description:'',
    });

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        post(route('produts.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="gap-1.5">
                        <Label htmlFor="productName">Name</Label>
                        <Input id='productName' value={data.name} onChange={(e)=>setData('name',e.target.value)} placeholder='Enter Product Name'></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="productPrice">Price</Label>
                        <Input id='productPrice' value={data.price} onChange={(e)=>setData('price',e.target.value)}  placeholder='Enter Product Price'></Input>
                    </div> 
                    <div className="gap-1.5">
                        <Label htmlFor="productDescription">Description</Label>
                        <Textarea id='productDescription' value={data.description} onChange={(e)=>setData('description',e.target.value)} placeholder='description' />
                    </div>
                    <Button>Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
