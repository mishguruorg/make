const db = require('@mishguru/data')
const { setupTestDatabase, quit } = require('@mishguru/test-helpers')

setupTestDatabase(db).then(quit)
