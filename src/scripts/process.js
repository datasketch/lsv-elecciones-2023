const { writeFile } = require('fs').promises;
const path = require('path');
const slugify = require('slugify');
const mapper = require('./mapper');
const raw = require('../data/raw.json');

(async () => {
    try {
        const data = raw.map(record => {
            return Object.keys(record).reduce((result, key) => {
                result[mapper[key]] = record[key]
                return result
            }, {})
        })
        const departments = Array.from(new Set(data.map(({ department }) => department))).map(department => ({
            id: slugify(department, { lower: true }),
            name: department
        }))
        const candidatesFile = path.resolve(process.cwd(), 'src/data/candidates.json')
        const departmentsFile = path.resolve(process.cwd(), 'src/data/departments.json')
        await writeFile(candidatesFile, JSON.stringify(data))
        await writeFile(departmentsFile, JSON.stringify(departments))
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
})();