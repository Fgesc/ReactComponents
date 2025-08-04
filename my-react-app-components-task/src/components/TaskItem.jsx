import ButtonsGroup from "./ButtonsGroup";
import DescriptionLabel from "./DescriptionLabel";
import ToggleCheckbox from "./ToggleCheckbox";

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