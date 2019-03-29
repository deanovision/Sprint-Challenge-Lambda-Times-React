import React from "react";
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let tabClass = "";
  if (props.selectedTab === props.tab) {
    tabClass = "tab active-tab";
  } else {
    tabClass = "tab";
  }

  return (
    <div className={tabClass} onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
