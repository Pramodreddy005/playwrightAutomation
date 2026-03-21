const testData = require('../data/data.json');

export function readData(objectName: string, keyName : string): string {
    return testData[objectName][keyName];
}
