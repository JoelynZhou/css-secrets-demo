// @flow
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoxModel from "./views/CSSDemo/BoxModel";
import FlexBox from "./views/CSSDemo/FlexBox";
import CSSDemo from "./views/CSSDemo/Index";
import Home from "./views/Home";

function App() {
	return (
		<Router>
			<Route exact={true} path="/" component={Home} />
			<Route path="/css-demo" component={CSSDemo} />
			<Route path="/box-model" component={BoxModel} />
			<Route path="/flex-box" component={FlexBox} />
		</Router>
	);
}

export default App;
