import React from "react";

export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.substr(1);
    }
  return (
    <div style = {{height:'50px'}}>
    {props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alerts.type)}</strong>  {props.alerts.msg}
    </div>}
    </div>
  );
}
