import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Features</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>

        <ul>
          <li>Taxi</li>
          <li>Logistics</li>
          <li>Delivery</li>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
