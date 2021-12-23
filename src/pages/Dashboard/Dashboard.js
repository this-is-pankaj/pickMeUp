import Card from "../../components/Dashboard/Card/Card";
import { cardsForRole } from "../../utils/static";
import Classes from './Dashboard.module.css';

const Dashboard = () => {
  const role = 'customer';
  const cards = [...cardsForRole[role]];
  return (
    <div className={Classes.dashboard}>
      <div className={Classes['cards-container']}>
        {
          cards.map(({icon, text, link}, idx) => {
            return (
              <Card
                icon={icon}
                text={text}
                link={link}
                key={`card-${idx}`}
              />
            );
          })
        }
      </div>
    </div>
  )
};

export default Dashboard;