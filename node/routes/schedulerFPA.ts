
export async function schedulerFPA(
  ctx: Context,
  next: () => Promise<void>
) {
  try {

    console.log("Scheduler FPA");

  } catch (e) {
    throw new Error(e.message)
  }

  ctx.status = 200
  ctx.body = { message: 'Done!' }

  await next()
}
