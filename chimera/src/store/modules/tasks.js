export default {
  namespaced: true,
  state: {
    featured: [],
    tasks: [
      {
        base: 'Stepper for add new entry',
        tasks: [
          {
            id: 'QmhashTask1',
            done: true,
            title: 'Task 1'
          },
          {
            id: 'QmhashTask2',
            done: false,
            title: 'Task 2'
          }
        ]
      }
    ]
  },
  getters: {
    featured: (state, getters) => {
      return state.notes.sort((a, b) => {
        if (a.updated < b.updated) return -1
        if (a.updated > b.updated) return 1
        return 0
      }).slice(0, 3)
    },
    listTasks: state => {
      return state.tasks[0].tasks
    },
    tasksByBaseId: (state) => (baseId) => {
      return state.tasks.find(t => t.base === baseId)
    }
  }
}
