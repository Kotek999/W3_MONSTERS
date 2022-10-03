import { actionCreators } from "./action";
import { connect } from "react-redux";
import Card from "./../TestCard/index";

export interface DataState {
  data: {};
}

const mapStateToProps = (state: DataState) => {
  const pageData = state.data && state.data;
  return { pageData };
};

function mapDispatchToProps(dispatch: Function) {
  const callToData = () => dispatch(actionCreators.getData());
  return { callToData };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
