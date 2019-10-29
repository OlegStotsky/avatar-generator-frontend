import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UploadPicPage from "../UploadPicPage";

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
