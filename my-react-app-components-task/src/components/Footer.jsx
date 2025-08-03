function TodoCounter() {
  return (
        <span className="todo-count">Осталось: 3</span>
  );
}


function FilterButtonsGroup() {
    return (
        <ul className="filters">
            <li>
              <button className="selected">Все</button>
            </li>
            <li>
              <button>Активные</button>
            </li>
            <li>
              <button>Готовые</button>
            </li>
        </ul>
  );
}

function ClearCompletedTasks() {
  return (
        <button className="clear-completed">Удалить готовые</button>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <TodoCounter/>
      <FilterButtonsGroup/>
      <ClearCompletedTasks/>
    </footer>
  );
}

export default Footer;
