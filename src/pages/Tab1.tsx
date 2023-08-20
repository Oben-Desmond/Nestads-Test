import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nestads</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <h2>About Nestads</h2>
        <p >
          NESTADS is committed to building a better future for the people of Cameroon. Our mission is to provide high-quality services that meet the ever-changing needs of our customers.
          We are dedicated to excellence, innovation, and sustainability, and we strive to exceed our customers’ expectations in everything we do. At NESTADS, we believe that by building strong relationships with our customers, employees, and communities, we can create a brighter future for all.
        </p>
        <img src="https://nestadsgroup.com/wp-content/uploads/2023/06/pexels-ono-kosuki-5647611-2048x1365.jpg" alt="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
