import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Screen from "./screen";

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Screen);
