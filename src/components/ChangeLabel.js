import React from "react";

const ChangeLabel = ({ changed, onChangeLabel }) => (
  <div>
    <br />
    <div
      onClick={e => {
        onChangeLabel(e);
      }}
    >
      {"cambiar label (cambiado " + changed + " veces)"}
    </div>
  </div>
);

export default ChangeLabel;
