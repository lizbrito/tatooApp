import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([        
    {
      id: 1,
      text: 'Doctors Appoitment',
      day: 'Feb 5th at 9:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Rag Vet',
      day: 'Feb 17th at 14:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Groceries',
      day: 'Mar 9th at 17:30',
      reminder: false,
    },        
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;