import { kisaragi_core } from '@/config';
import { IOrderResponse } from '@/interfaces';
import { MainLayout } from '@/layouts';
import { StoreContext } from '@/stateManagement/context';
import { Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'storeName',
    headerName: 'Nombre de la tienda',
    width: 200,
    sortable: false,
  },
  {
    field: 'productName',
    headerName: 'Productos',
    width: 300,
    sortable: false,
  },

  { field: 'address', headerName: 'Dirección', width: 200, sortable: false },
  {
    field: 'state',
    headerName: 'Estado',
    width: 150,
    sortable: false,
  },
];

interface HistoryPageProps {
  orders: IOrderResponse[];
}

const parseState = (state: string) => {
  switch (state) {
    case 'NOTIFICADA':
      return 'Notificada';
    case 'EN_CAMINO':
      return 'En camino';
    case 'ENTREGADA':
      return 'Entregada';
    default:
      return 'Notificada';
  }
};

const HistoryPage: NextPage<HistoryPageProps> = ({ orders }) => {
  const router = useRouter();
  const { store } = useContext(StoreContext);
  const {
    query: { storeId },
  } = router;

  const rows = orders.map((order, index) => ({
    id: index + 1,
    storeName: order.store_name,
    productName: order.products
      .map((product) => product.product_name)
      .join(', '),
    address: order.address,
    state: parseState(order.state),
    orderId: order.tracking,
    storeId: storeId || store?.store_data.id,
  }));

  return (
    <MainLayout
      title="Historial de Ordenes"
      pageDescription="Historial de Ordenes"
    >
      <Typography variant="h1" component="h1">
        Historial de Órdenes
      </Typography>
      <Grid container className="fadeIn">
        <Grid
          item
          xs={12}
          sm={9}
          marginY={2}
          sx={{ height: 450, width: '100%' }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  const { data: orders }: { data: any } = await kisaragi_core.post(
    '/orders/by_user',
    {
      userId: session.user.user_id,
    }
  );

  return {
    props: {
      orders,
    },
  };
};

export default HistoryPage;
