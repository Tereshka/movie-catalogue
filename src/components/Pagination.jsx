import React from "react";
import PaginationItem from './PaginationItem';

export default function Pagination(props) {
  let items = [];
  let { activePage, totalPages, onClickPage } = props;
  let minPage = Math.max(activePage - 2, 1);
  let maxPage = Math.min(activePage + 2, totalPages);

  for (let page = minPage; page <= maxPage; page++) {
    items.push(
      <PaginationItem
        active={page === activePage}
        key={page}
        label={page}
        onClickPage={onClickPage}
        item={page}
      />
    );
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <PaginationItem label='≪' onClickPage={onClickPage} item={1} disabled={activePage === 1}/>
        <PaginationItem label='<' onClickPage={onClickPage} item={activePage - 1} disabled={activePage === 1}/>
        {activePage - 2 > 1 &&
          <>
            <PaginationItem label={1} onClickPage={onClickPage} item={1} />
            <PaginationItem label='...' disabled={true} />
          </>
        }
        {items}
        {activePage + 2 < totalPages &&
          <>
            <PaginationItem label='...' disabled={true} />
            <PaginationItem label={totalPages} onClickPage={onClickPage} item={totalPages} />
          </>
        }
        <PaginationItem label='>' onClickPage={onClickPage} item={activePage + 1} disabled={activePage === totalPages}/>
        <PaginationItem label='≫' onClickPage={onClickPage} item={totalPages} disabled={activePage === totalPages}/>
      </ul>
    </nav>
  );
}