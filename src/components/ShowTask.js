import { useState } from "react";
import FormEdit from "./showEdit";
import { GoPencil } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";

function ShowTask({ task, onDelete, onEdit }) {

  const [showFrom, setShowFrom] = useState(false)
  let content = <span className="name">{task.name}</span>;
  if (showFrom) {
    content = <FormEdit task={task} onEdit={onEdit} setShow={setShowFrom} showFrom={showFrom} />
  }

  return (
    <li key={task.id}>
      <div className="outP">
        {content}
        <span className="time">{task.time}</span>
      </div>
      <i onClick={() => { setShowFrom(!showFrom) }} className="bi-pencil-square"><GoPencil /></i>
      <i onClick={() => { onDelete(task.id) }} className="bi bi-trash"><GoXCircleFill /></i>
    </li>

  );
}

export default ShowTask;
