import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePage from "./homePage";
import { getProducts } from "./actions";
import { makeSelectProductsList } from "./selector";

const mapStateToProps = createStructuredSelector({
	productsList: makeSelectProductsList(),
});

const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => dispatch(getProducts()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(HomePage);
