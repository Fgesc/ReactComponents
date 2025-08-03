function ToggleCheckbox() {
  return <input className="toggle" type="checkbox" />;
}


function DescriptionLabel() {
  return (
    <label>
        <span className="description">Учить React 4 часа</span>
        <span className="created">создана 3 дня назад</span>
    </label>
  );
}


function ButtonsGroup() {
  return (
    <div className="buttons">
        <button className="icon icon-edit">&#9998;</button>
        <button className="icon icon-destroy">&#10006;</button>
    </div>
  );
}


function TaskItem() {
  return (
    <li>
      <ToggleCheckbox />
      <DescriptionLabel/>
      <ButtonsGroup />
    </li>
  );
}

export default TaskItem;