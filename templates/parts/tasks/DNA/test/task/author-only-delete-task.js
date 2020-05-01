scenario("author-only-delete-task", async (s, t) => {
  const {alice, bob} = await s.players({alice: conductorConfig, bob: conductorConfig}, true)
  const createNoteResult = await alice.call("tasks", "tasks", "create_task", {"base": "testbase", "task_input" : {"title":"Title first task", "done": false}})
  await s.consistency()
  const listNotesResult = await alice.call("tasks", "tasks", "list_tasks", {"base": "testbase"})
  t.deepEqual(listNotesResult.Ok.length, 1)
  const deleteResult = await bob.call("tasks", "tasks", "delete_task", { "base": "testbase", "id": createNoteResult.Ok.id, "created_at": createNoteResult.Ok.createdAt, "address": createNoteResult.Ok.address })
  t.deepEqual(JSON.parse(deleteResult.Err.Internal).kind, { ValidationFailed: 'Agent who did not author is trying to delete' })
  const listNotesResult2 = await alice.call("tasks", "tasks", "list_tasks", {"base": "testbase"})
  t.deepEqual(listNotesResult2.Ok.length, 1)
})