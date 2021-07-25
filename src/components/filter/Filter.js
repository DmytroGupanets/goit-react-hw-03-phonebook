import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ onHandleChange }) => {
  return (
    <div className={styles.filterContiner}>
      <label className={styles.label}>
        Find contacts by name:
        <input type="text" name="filter" onChange={onHandleChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};

export default Filter;
