const tasks  = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a Project' },
    { id: 3, title: 'Deploy it' },
  ];
  
export default  function TaskList() {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="text-lg py-1">✅ {task.title}</li>
        ))}
      </ul>
    );
  }
  