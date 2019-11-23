import React from 'react';

export default function MovieTabs(props) {

  const { sortList, onChangeSortBy, sortBy } = props;

  const getClassName = (value) => {
    return `nav-link ${sortBy === value ? 'active' : ''}`;
  }

  return (
    <ul className="nav nav-tabs nav-pills">
      {
        sortList.map(list => {
          return (
            <li key={list.sortBy} className="nav-item">
              <div
                className={getClassName(list.sortBy)}
                onClick={() => onChangeSortBy(list.sortBy)}
              >
                {list.title}
              </div>
            </li>
          )
        })
      }
    </ul>
  );
}