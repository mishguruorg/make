const db = require('@mishguru/data')
const { teardownTestDatabase, quit } = require('@mishguru/test-helpers')

teardownTestDatabase(db).then(quit)
