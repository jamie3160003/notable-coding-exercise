import NodeCache from 'node-cache';

const cache = new NodeCache();

// mock existing data in the db
cache.set('physicians', [
  {
    id: 1,
    firstName: 'Hibbert',
    lastName: 'Julis',
    email: 'hibbert@notablehealth.com',
    name: 'Hibbert, Julis',
    appointments: [],
  },
  {
    id: 2,
    firstName: 'Krieger',
    lastName: 'Algernop',
    email: 'krieger@notablehealth.com',
    name: 'Krieger, Algernop',
    appointments: [
      {
        name: 'Sterling Archer',
        time: '8:00AM',
        kind: 'New Patient',
      },
      {
        name: 'Cyril Figis',
        time: '8:30AM',
        kind: 'Follow-up',
      },
      {
        name: 'Ray Gilette',
        time: '9:00AM',
        kind: 'Follow-up',
      },
      {
        name: 'Lana Kane',
        time: '9:30AM',
        kind: 'New Patient',
      },
      {
        name: 'Pam Poovey',
        time: '10:00AM',
        kind: 'New Patient',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Riviera',
    lastName: 'Nick',
    email: 'riviera@notablehealth.com',
    name: 'Riviera, Nick',
    appointments: [],
  },
]);

const initdb = async (ctx, next) => {
  ctx.db = cache;
  await next();
};

export default initdb;
