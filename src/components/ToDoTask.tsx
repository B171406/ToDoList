import React from 'react';
import { ITask } from '../Interfaces';

interface Props {
  task: ITask;
  completeTask(): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span style={{ width: '150px', marginLeft: '10px' }}>
          {task.deadline}
        </span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
