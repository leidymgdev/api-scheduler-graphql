export const deleteScheduler = async (_: void, __: void, ctx: Context) => {

  try {
    const {
      clients: { scheduler },
    } = ctx

    const schedulerId = "schedulerFPA";

    const cron = await scheduler
      .getSchedule(schedulerId)
      .then((data) => {
        return data
      })
      .catch(() => {
        return null
      })

    if (cron) {
      await scheduler
      .deleteSchedule(schedulerId)
      .catch((error: Error) => {
        throw new Error(error.message)
      })
    }

    return true
  } catch (error) {
    throw new Error(error.message)
  }
}
