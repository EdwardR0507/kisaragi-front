import { useRouter } from 'next/router';

import { MainLayout } from '@/layouts';
import { CartContext, StoreContext } from '@/stateManagement/context';
import { AddressForm, FormAddress } from '@/views/store/components/FormAddress';
import { useContext } from 'react';

const AddressPage = () => {
  const router = useRouter();
  const {
    query: { storeId },
  } = router;
  const { shippingAddress, updateAddress } = useContext(CartContext);
  const { store } = useContext(StoreContext);

  const onSubmitAddress = (data: AddressForm) => {
    updateAddress(data);
    router.push(`/store/${storeId || store?.store_data.id}/checkout/summary`);
  };
  return (
    <MainLayout title="Address" pageDescription="Set destination address">
      <FormAddress
        onSubmitAddress={onSubmitAddress}
        defaultValues={shippingAddress}
      />
    </MainLayout>
  );
};

export default AddressPage;
