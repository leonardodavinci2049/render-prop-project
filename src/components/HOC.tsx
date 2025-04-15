import { useState, ComponentType } from "react";

// Definindo interfaces para melhor tipagem
interface ListProps<T> {
  title: string;
  items: T[];
}

// HOC com tipagem adequada
const HOC = <T, P extends ListProps<T>>(WrappedComponent: ComponentType<P>) => {
  // O tipo de retorno explícito ajuda na inferência
  return function List(props: P) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;

    function toggleOpen() {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    }

    return (
      <div className="list-container">
        <div className="heading">
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>
            {isOpen ? <span>&or;</span> : <span>&and;</span>}
          </button>
        </div>
        {isOpen && <WrappedComponent {...props} items={displayItems} />}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
          {/* Conteúdo do botão */}
        </button>
      </div>
    );
  };
};

export default HOC;
