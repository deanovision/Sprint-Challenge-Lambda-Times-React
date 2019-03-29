import React from "react";
import PropTypes from "prop-types";
const Tab = props => {
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
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};
export default Tab;
