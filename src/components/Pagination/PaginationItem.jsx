import React from "react";

export default function Pagination(props) {
  const { label, active, disabled, onClickPage, item } = props;

  const getClassName = () => {
    return `page-item
      ${active ? 'active' : ''}
      ${disabled ? 'disabled' : ''}
      `;
  }

  return (
    <li className={getClassName()} >
      <button className="page-link" onClick={() => onClickPage(item)}>
        {label}
      </button>
    </li>);
}