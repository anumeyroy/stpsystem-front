import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TankerRegistration from "./pages/TankerRegistration";
import OrderTanker from "./pages/OrderTanker";
import AdminPage from "./pages/dashboards/Admin";
import Stp from "./pages/dashboards/Stp";
import TankerVender from "./pages/dashboards/TankerVender";
import ReceiptPage from "./pages/ReceiptPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/tanker-registration" element={<TankerRegistration />} />
				<Route path="/order-tanker" element={<OrderTanker />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/stp" element={<Stp />} />
				<Route path="/tanker" element={<TankerVender />} />
				<Route path="/order-tanker/receipt" element={<ReceiptPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
