import React, { useState } from 'react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Complete project setup', completed: true, priority: 'high' },
    { id: 2, title: 'Implement TypeScript', completed: true, priority: 'high' },
    { id: 3, title: 'Add Tailwind CSS', completed: true, priority: 'medium' },
    { id: 4, title: 'Setup React Router', completed: true, priority: 'medium' },
    { id: 5, title: 'Create dashboard page', completed: false, priority: 'low' },
    { id: 6, title: 'Add form validation', completed: false, priority: 'low' },
  ]);

  const [newTask, setNewTask] = useState<string>('');

  const stats: StatCard[] = [
    {
      title: 'Total Tasks',
      value: tasks.length.toString(),
      change: '+2 this week',
      changeType: 'positive',
      icon: '📋'
    },
    {
      title: 'Completed',
      value: tasks.filter(task => task.completed).length.toString(),
      change: '75% completion rate',
      changeType: 'positive',
      icon: '✅'
    },
    {
      title: 'In Progress',
      value: tasks.filter(task => !task.completed).length.toString(),
      change: '2 remaining',
      changeType: 'neutral',
      icon: '🔄'
    },
    {
      title: 'High Priority',
      value: tasks.filter(task => task.priority === 'high').length.toString(),
      change: 'All completed',
      changeType: 'positive',
      icon: '🔥'
    }
  ];

  const toggleTask = (id: number): void => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskObj: Task = {
        id: Date.now(),
        title: newTask.trim(),
        completed: false,
        priority: 'medium'
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Dashboard
        </h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' :
                    stat.changeType === 'negative' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Task List */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Task Management
            </h2>
            
            {/* Add Task Form */}
            <form onSubmit={addTask} className="mb-6">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="btn-primary px-6"
                >
                  Add
                </button>
              </div>
            </form>
            
            {/* Task List */}
            <div className="space-y-3">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg border ${
                    task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className={`flex-1 ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}>
                    {task.title}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Recent Activity
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Task completed</p>
                  <p className="text-xs text-gray-600">Setup React Router - 2 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">New task added</p>
                  <p className="text-xs text-gray-600">Create dashboard page - 5 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Project updated</p>
                  <p className="text-xs text-gray-600">Added Tailwind CSS - 10 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Configuration changed</p>
                  <p className="text-xs text-gray-600">Updated TypeScript config - 15 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
