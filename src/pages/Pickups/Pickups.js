import ForBiker from '../../components/Pickups/ForBiker/ForBiker';
import ForCustomer from '../../components/Pickups/ForCustomer/ForCustomer';
import { useAuth } from '../../contexts/use-auth';

const Pickups = () => {
  const auth = useAuth();
  const { id, role, user } = auth.user;
  
  return (
    role==='delivery'
      ? <ForBiker userId={id}/>
      : <ForCustomer userId={id}/>
  );
};

export default Pickups;