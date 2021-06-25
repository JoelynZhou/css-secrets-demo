// @flow
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import BoxModel from "./views/CSSDemo/BoxModel";
import FlexBox from "./views/CSSDemo/FlexBox";
import CSSDemo from "./views/CSSDemo/Index";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/css-demo" component={CSSDemo} />
			<Route path="/box-model" component={BoxModel} />
			<Route path="/flex-box" component={FlexBox} />
		</Router>
	);
}

export default App;
