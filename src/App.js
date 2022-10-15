import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import GetStarted from "./Pages/GetStarted";
import RegisterAsUser from "./Pages/RegisterAsUser";
import RegisterAsDoctor from "./Pages/RegisterAsPharmacy";
import RegisterAsPharmacy from "./Pages/RegisterAsDoctor";
import Login from "./Pages/Login";
import NewsFeed from "./Pages/NewsFeed";
import Appointments from "./Pages/Appointments";
import Doctor_Profile from "./Pages/Doctor_Profile";
import Stories from "./Components/Stories";
import Feed from "./Components/Feed";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/get_started" component={GetStarted} />
        <Route path="/register_as_user" component={RegisterAsUser} />
        <Route path="/register_as_doctor" component={RegisterAsDoctor} />
        <Route path="/register_as_pharmacy" component={RegisterAsPharmacy} />
        <Route path="/login" component={Login} />
        <NewsFeed>
            <Switch>
              <Route
                path="/news_feed"
                component={() => (
                  <div className="feed_wrapper">
                    <Stories />
                    <Feed />
                  </div>
                )}
              />
              <Route path="/doctor_profile" render={Doctor_Profile} />
              <Route path="/appointments" render={Appointments} />
              <Route path="/pharmacies" />
              <Route path="/upload_item" />
              <Route path="/settings" />
              <Route path="/orders" />
            </Switch>
        </NewsFeed>
      </Switch>
    </Router>
  );
}

export default App;
