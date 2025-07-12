/**
 * ToDoアプリ
 */

// DOM要素を取得
const taskList = document.getElementById('taskList');
// TODO:追加ボタン
// TODO:入力欄

// 初期データ
const initialTasks = [
  'アプリのフィールド設計',
  'API連携用のサンプルコード作成',
];

// 初期データを表示
initialTasks.forEach(taskText => {
  const listItem = document.createElement('li');
  listItem.textContent = taskText;
  taskList.appendChild(listItem);
});

// TODO: ボタンクリック時の処理
