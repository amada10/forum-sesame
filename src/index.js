import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// private
import AdminRoute from "views/private/AdminRoute";
import EntrepriseRoute from "views/private/EntrepriseRoute";

// layouts
import Admin from "layouts/Admin.js";
import AdminEntreprise from "layouts/AdminEntreprise.js";

// views without layouts
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      
      {/* add routes with layouts */}
      <AdminRoute exact component={Admin} path="/admin/TablesEntreprises" />
      <EntrepriseRoute exact component={AdminEntreprise} path="/adminEntreprise/ProfilEntreprise"/>
      
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
