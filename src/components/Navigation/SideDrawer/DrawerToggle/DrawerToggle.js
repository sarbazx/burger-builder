import React from "react";
import styles from "./DrawserToggle.module.css";

const drawerToggle = props => (
  <div class={styles.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
