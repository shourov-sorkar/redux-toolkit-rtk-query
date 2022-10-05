import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfileInfo from "./features/profile/ProfileInfo";

function App() {
  return (
    <div className="container">
      <div className="row">
        <ProfileInfo />
      </div>
    </div>
  );
}
export default App;
