import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import CardEditProfile from "components/Cards/CardEditProfile";

// views
import ProfilEntreprise from "views/admin-entreprise/ProfilEntreprise.js";
import Statistiques from "views/admin-entreprise/Statistiques.js"
import AllContenu from "views/admin-entreprise/AllContenu.js";
import AddContenu from "views/admin-entreprise/AddContenu.js";

export default function AdminEntreprise() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-200">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/adminEntreprise/Statistiques" exact component={Statistiques} />
            <Route path="/adminEntreprise/AllContenu" exact component={AllContenu} />
            <Route path="/adminEntreprise/AddContenu" exact component={AddContenu} />
            <Route path="/adminEntreprise/ProfilEntreprise" exact component={ProfilEntreprise} />
            <Route path="/adminEntreprise/CardEditProfile" exact component={CardEditProfile} />
            <Redirect from="/adminEntreprise" to="/adminEntreprise/ProfilEntreprise" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
