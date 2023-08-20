import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonSelect, IonSelectOption, IonSpinner, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [carType, setCarType] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    // Perform any necessary validation or API calls here
    if (!location || !destination || !carType) {
      return;
    }

    setLoading(true)
    // Show toast
    setTimeout(() => {
      setShowToast(true);
      setLoading(false)
    }, 6000);

    // Reset form fields
    setLocation('');
    setDestination('');
    setCarType('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Request a Ride</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonInput
          placeholder="Location"
          value={location}
          onIonChange={(e) => setLocation(e.detail.value!)}
        />
        <IonInput
          placeholder="Destination"
          value={destination}
          onIonChange={(e) => setDestination(e.detail.value!)}
        />
        <IonSelect
          placeholder="Car Type"
          value={carType}
          onIonChange={(e) => setCarType(e.detail.value)}
        >
          <IonSelectOption value="taxi">Taxi</IonSelectOption>
          <IonSelectOption value="sedan">Sedan</IonSelectOption>
          <IonSelectOption value="suv">SUV</IonSelectOption>
        </IonSelect>
        <IonButton expand="full" onClick={handleSubmit}>{loading ? <IonSpinner /> : "Submit"}</IonButton>
        <IonToast
          isOpen={showToast}
          message="Ride on its way"
          duration={3000}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
