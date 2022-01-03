import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import DetailPage from "./detailPage";
import { fetchProductDetails, cleanupProductDetails } from "./actions";
import { makeSelectProductDetails } from "./selector";

const mapStateToProps = createStructuredSelector({
	productDetails: makeSelectProductDetails(),
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProductDetails: (id) => dispatch(fetchProductDetails(id)),
		cleanupProductDetails: () => dispatch(cleanupProductDetails()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(DetailPage);
