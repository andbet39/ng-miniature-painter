

export class Project {
  constructor ( public id: string,
                public title: string,
                public progressNote: string,
                public description: string,
                public createdAt: number,
                public scheduledFor: string) {}
}
