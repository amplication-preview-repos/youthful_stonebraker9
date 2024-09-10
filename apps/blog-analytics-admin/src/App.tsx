import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ShareList } from "./share/ShareList";
import { ShareCreate } from "./share/ShareCreate";
import { ShareEdit } from "./share/ShareEdit";
import { ShareShow } from "./share/ShareShow";
import { ViewList } from "./view/ViewList";
import { ViewCreate } from "./view/ViewCreate";
import { ViewEdit } from "./view/ViewEdit";
import { ViewShow } from "./view/ViewShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogAnalytics"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Share"
          list={ShareList}
          edit={ShareEdit}
          create={ShareCreate}
          show={ShareShow}
        />
        <Resource
          name="View"
          list={ViewList}
          edit={ViewEdit}
          create={ViewCreate}
          show={ViewShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
