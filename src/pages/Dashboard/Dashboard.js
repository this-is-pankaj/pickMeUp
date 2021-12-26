import Card from "../../components/Dashboard/Card/Card";
import ActiveContainer from "../../components/Dashboard/ActiveContainer";
import { cardsForRole } from "../../utils/static";
import Classes from './Dashboard.module.css';
import { useAuth } from "../../contexts/use-auth";
import { useEffect, useState } from "react";
import { handleReq } from "../../utils/requests";

const Dashboard = () => {
  const auth = useAuth();
  const { id, role, user } = auth.user;
  const cards = [...cardsForRole[role]];
  
  return (
    <div className={Classes.dashboard}>
      <div className={Classes['active-container-wrapper']}>
        <ActiveContainer
          userId={id}
          role={role}
          user={user}
        />
      </div>
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