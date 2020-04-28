import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            
            <IonAvatar class="ion-float-right">
              <img src="https://lh3.googleusercontent.com/Kiqt-P8b-3bwCBgieTcuwq8evVy7UWzvxj3MLyFJQ59dfEzp1MdcFyUpDDwfqv-zwPJA" />
            </IonAvatar>

          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
       
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
