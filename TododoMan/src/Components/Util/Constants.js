const column = [
      {
        Header: 'Folder',
        accessor: 'folder',
        sortType: 'string'
      },
      {
        Header: 'Task',
        accessor: 'text',
        sortType: 'string',
        canSort: false
      },
      {
        Header: 'Deadline',
        accessor: 'deadline',
        sortType: 'string'
      },
];

const buttonName = {
  addEvent: "Добавить событие",
  addFolder: "Добавить",
  addTask: "Добавить задачу",
  changeTask: "Редактировать задачу"
}

export { column, buttonName }