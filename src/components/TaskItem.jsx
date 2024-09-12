import React from 'react';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
