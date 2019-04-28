export class Todo {
    constructor(
        public id: number,
        public description: string,
        public is_done: boolean,
        public targetDate: Date
    ) {}
}