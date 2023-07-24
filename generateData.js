const { faker } = require("@faker-js/faker");

function createRandomUser() {
  return {
    kind: "multi",
    user: {
      key: faker.string.uuid(),
      name: faker.person.fullName(),
      state: faker.location.state(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
    subscription: {
      key: faker.helpers.arrayElement(["free", "basic", "pro", "enterprise"]),
    },
    application: {
      key: faker.helpers.arrayElement([
        "autobahn",
        "electfast",
        "bluelightning",
      ]),
      version: faker.system.semver(),
    },
    department: {
      key: faker.commerce.department(),
    },
    company: {
      key: faker.company.name(),
    },
  };
}

const max = 100;
const users = [];
for (let i = 0; i < max; i++) {
  const user = createRandomUser();
  users.push(user);
}

console.log(JSON.stringify(users, null, 2)); //?
