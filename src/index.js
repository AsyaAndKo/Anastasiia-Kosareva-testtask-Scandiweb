import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export const client = new ApolloClient({
  uri: "http://192.168.0.112:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
