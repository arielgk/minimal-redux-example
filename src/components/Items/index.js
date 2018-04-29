import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as itemActions from "../../actions/itemActions";
import { bindActionCreators } from "redux";

import Item from "./Item";

const Items = ({ changed, label, items, actions }) => {
  return (
    <div>
      <h3>{label + " - " + changed} :</h3>
      {items.length > 0 ? "" : "no hay items cargados"}
      {items.map((item, index) => {
        return <Item key={item.id} item={item} />;
      })}
      <br />
      <br />

      <button
        onClick={() => {
          actions.getItems();
        }}
      >
        Cargar
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          actions.deleteAllItems();
        }}
      >
        borrar
      </button>
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  changed: PropTypes.number.isRequired
};
const mapStateToProps = (state, ownProps) => {
  return {
    label: ownProps.label,
    changed: ownProps.changed,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Items);
