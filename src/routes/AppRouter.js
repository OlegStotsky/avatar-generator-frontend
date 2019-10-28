import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UploadPicPage from "../UploadPicPage";
import DisplayResultPage from "../DisplayResultPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" render={() => <UploadPicPage />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;