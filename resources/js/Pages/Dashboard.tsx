import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Task } from '@/types';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DataTable } from '@/components/ui/dataTable';
import { columns } from '@/components/ui/columns';

export default function Dashboard({ auth, tasks }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tasks</h2>}
        >
        <Head title="Dashboard" />
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={tasks as Task[]} />
        </div>
        
            
        </AuthenticatedLayout>
    );
}
