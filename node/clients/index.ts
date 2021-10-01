import { IOClients } from '@vtex/api'

import SchedulerClient from './scheduler'

export class Clients extends IOClients {
  public get scheduler() {
    return this.getOrSet('scheduler', SchedulerClient)
  }
}
