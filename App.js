import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {I18nextProvider} from 'react-i18next';

import configureStore from './redux/configureStore';

import i18n, {i18nInit} from './i18n';
import NavigateScreen from './screens/navigation';
const {persistor, store} = configureStore();

const RenderContent = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigateScreen />
    </I18nextProvider>
  );
};
const onBeforeLift = async () => {
  await i18nInit();
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <RenderContent />
      </PersistGate>
    </Provider>
  );
};

export default App;
