import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setAllowRegistration,
  setDisableBalancedOnAdd,
  setDisableBalancedOnEdit,
} from "../../actions/settingsActions";
class Settings extends Component {
  disableBalanceOnAddChange = () => {
    const { setDisableBalancedOnAdd } = this.props;
    setDisableBalancedOnAdd();
  };
  disableBalanceOnEditChange = () => {
    const { setDisableBalancedOnEdit } = this.props;
    setDisableBalancedOnEdit();
  };
  allowRegistrationChange = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  };
  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration,
    } = this.props.settings;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left"></i>Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Edit settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registration</label>{" "}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Add</label>{" "}
                <input
                  type="checkbox"
                  name="disableBalanceOnAdd"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Edit</label>{" "}
                <input
                  type="checkbox"
                  name="disableBalanceOnEdit"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Settings.protoTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalancedOnAdd: PropTypes.func.isRequired,
  setDisableBalancedOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired,
};
export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings,
  }),
  { setAllowRegistration, setDisableBalancedOnAdd, setDisableBalancedOnEdit }
)(Settings);
