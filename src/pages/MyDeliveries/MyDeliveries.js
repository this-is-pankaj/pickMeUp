import MyDeliveriesForBiker from '../../components/MyDeliveries/MyDeliveriesForBiker/MyDeliveriesForBiker';
import MyOrdersForCustomer from '../../components/MyDeliveries/MyOrdersForCustomer/MyOrdersForCustomers';
import { useAuth } from '../../contexts/use-auth';
const MyDeliveries = () => {
  const auth = useAuth(); 
  const { id, role, user } = auth.user;
  
  return (
    role==='delivery'
      ? <MyDeliveriesForBiker userId={id}/>
      : <MyOrdersForCustomer userId={id}/>
  );
};

export default MyDeliveries;