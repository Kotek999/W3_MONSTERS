import { actionCreators } from "./action";
import { connect } from "react-redux";
import Card from "./../TestCard/index";

const mapStateToProps = (state: any) => {
  const pageData = state.data && state.data;
  return { pageData };
};

function mapDispatchToProps(dispatch: any) {
  const callToData = () => dispatch(actionCreators.getData());
  return { callToData };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
