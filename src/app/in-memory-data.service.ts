import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Joe' },
      { id: 12, name: 'Jane' },
    ];

    const states = [
      { name: 'Tennessee', abbr: 'TN' },
      { name: 'Alabama', abbr: 'AL' },
    ];

    return { users, states };
  }
}
