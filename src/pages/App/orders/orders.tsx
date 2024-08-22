import { Helmet } from 'react-helmet-async';

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { OrderTableFilter } from './order-table-filter';
import { OrderTableRow } from './order-table-row';
import { Pagination } from '@/components/pagination';

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderTableFilter />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[3%]"></TableHead>
                  <TableHead className="w-[8%]">Identificador</TableHead>
                  <TableHead className="w-[10%]">Realizado há</TableHead>
                  <TableHead className="w-[8%]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[8%]">Total do pedido</TableHead>
                  <TableHead className="w-[9%]"></TableHead>
                  <TableHead className="w-[7%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />;
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  );
}
