import React from 'react';
import {
  setupIonicReact, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonToggle,
} from '@ionic/react';

import { useRouter } from 'next/router';
import LocaleIcon from './LocaleIcon';

setupIonicReact({});

// eslint-disable-next-line react/prop-types
function Home({ posts }) {
  const router = useRouter();
  const [checked, setChecked] = React.useState(router.locale === 'uk');
  const availableLocales = router.locales?.find((loc) => loc !== router.locale);
  console.log(posts);
  const services = [
    {
      title: checked ? 'Послуга 1' : 'Service 1',
      description: checked ? 'послуга 1 опис' : 'service 1 description',
      content: checked
        ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Магнам, рацион.'
        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ratione.',
    },
    {
      title: checked ? 'Послуга 2' : 'Service 2',
      description: checked ? 'послуга 2 опис' : 'service 2 description',
      content: checked
        ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Магнам, рацион.'
        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ratione.',
    },
    {
      title: checked ? 'Послуга 3' : 'Service 3',
      description: checked ? 'послуга 3 опис' : 'service 3 description',
      content: checked
        ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Магнам, рацион.'
        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ratione.',
    },
    {
      title: checked ? 'Послуга 4' : 'Service 4',
      description: checked ? 'послуга 4 опис' : 'service 4 description',
      content: checked
        ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Магнам, рацион.'
        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ratione.',
    },
    {
      title: checked ? 'Послуга 5' : 'Service 5',
      description: checked ? 'послуга 5 опис' : 'service 5 description',
      content: checked
        ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Магнам, рацион.'
        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ratione.',
    },
    {
      title: checked ? 'Послуга 6' : 'Service 6',
      description: checked ? 'послуга 6 опис' : 'service 6 description',
      content: checked
        ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Магнам, рацион.'
        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ratione.',
    },
  ];

  return (

    <div>
      <div className="bg-gray-100 ">
        <div className="container mx-auto">

          <div className="p-2.5 locale_block_wrapper text-black bg-white border rounded-md flex items-center  shadow">
            <LocaleIcon />
            <IonToggle
              className="px-5 py-2.5"
              color="success"
              labelPlacement="end"
              enableOnOffLabels
              checked={checked}
              onIonChange={() => {
                setChecked(!checked);
                router.push(
                  router.asPath,
                  router.asPath,
                  { locale: availableLocales },
                );
              }}
            >
              {checked ? 'UK' : 'EN'}
            </IonToggle>

          </div>

        </div>

      </div>

      <div className="container mx-auto">

        <div>
          <h1 className="uppercase text-black p-5 text-3xl font-bold">
            {
                checked ? 'Послуги' : 'Services'
              }
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
            {
                services.map((service) => (
                  <IonCard
                    className="p-3"
                    key={service.title}
                  >
                    <IonCardHeader>
                      <IonCardTitle>{service.title}</IonCardTitle>
                      <IonCardSubtitle>{service.description}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      {service.content}
                    </IonCardContent>
                  </IonCard>
                ))
              }

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;

export const getServerSideProps = async () => {
  const posts = [];
  return {
    props: posts,
  };
};
