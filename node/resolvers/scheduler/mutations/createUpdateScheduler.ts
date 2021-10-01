const CRON_EXPRESSION = '1 * * * *'

export const createUpdateScheduler = async (_: void, __: void, ctx: Context) => {

  try {
    const {
      clients: { scheduler },
      vtex: { workspace, account },
    } = ctx

    const cron = await scheduler
      .getSchedule('schedulerFPA')
      .then((data) => {
        return data
      })
      .catch(() => {
        return null
      })

    if (!cron || cron.expression !== CRON_EXPRESSION) {
      const schedulerData = {
        id: `schedulerFPA`,
        scheduler: {
          expression: CRON_EXPRESSION,
          endDate: '2029-12-30T23:29:00',
        },
        request: {
          method: 'GET',
          uri: `https://${workspace}--${account}.myvtex.com/_v/api/FPA/schedulerFPA`,
          headers: {
            'cache-control': 'no-cache',
            pragma: 'no-cache',
          },
          body: null,
        },
      }

      await scheduler
        .createOrUpdateSchedule(schedulerData)
        .catch((error: Error) => {
          throw new Error(error.message)
        })
    }

    return true
  } catch (error) {
    throw new Error(error.message)
  }
}
