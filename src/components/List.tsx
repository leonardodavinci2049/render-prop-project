import {  useState } from "react";


interface ListProps<T> {
  tableName: string;
  dataTable: T[];
  render: (item: T) => React.ReactNode;
}


function List<T> ({ tableName, dataTable, render }: ListProps<T>) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? dataTable.slice(0, 3) : dataTable;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{tableName}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
        {isCollapsed ? `Show all ${dataTable.length}` : "Show less"}
      </button>
    </div>
  );
};

export default List;
