import Map from "./components/pages/Map";
import './style/style.css'
import DeliveryTable from "./components/pages/DeliveryTable";


function App() {
    return (
        <div className="container">
            <DeliveryTable/>
            <Map/>
        </div>
    );
}

export default App;
