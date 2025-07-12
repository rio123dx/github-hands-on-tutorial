/**
 * ToDoアプリ
 */

// DOM要素を取得
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton'); // 追加ボタン
const taskInput = document.getElementById('taskInput'); // 入力欄

// 初期データ
const initialTasks = [
  '洗濯をする',
  '掃除をする',
];

// 初期データを表示
initialTasks.forEach(taskText => {
  const listItem = document.createElement('li');
  listItem.textContent = taskText;
  taskList.appendChild(listItem);
});

// ボタンクリック時の処理
addButton.addEventListener('click', () => {
  const newTaskText = taskInput.value.trim();

  if (newTaskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = newTaskText;
    taskList.appendChild(listItem);
  }

  taskInput.value = '';
  taskInput.focus();
});
