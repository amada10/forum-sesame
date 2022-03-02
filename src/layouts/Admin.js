import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import AddEntreprise from "views/admin/AddEntreprise.js";
import TablesEntreprises from "views/admin/TablesEntreprises.js";
import AddFicheMetier from "views/admin/AddFicheMetier.js";

export default function Admin() {
  const compte = "admin";
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats type={compte}/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/AddEntreprise" exact component={AddEntreprise} />
            <Route path="/admin/AddFicheMetier" exact component={AddFicheMetier} />
            <Route path="/admin/TablesEntreprises" exact component={TablesEntreprises} />
            <Redirect from="/admin" to="/admin/TablesEntreprises" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
