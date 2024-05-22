/**
 * Generates a CSV string from a json file.
 * @param {json} jsonData - The array of objects to convert to CSV.
 * @returns [ERROR] {message:'Fail to convert empty array',status:400} - If the array is empty or null.
 * @returns {Promise} A promise that resolves with the generated CSV string.
 */
export async function generateCsvForJson(jsonData) {
    if (jsonData === null || jsonData.length === 0) {
        return { message: 'Fail to convert empty array', status: 400 };
    }

    const data = ['']; //para pular uma celula
    const dataRows = [];
    const firstColumns = [];
    const dataCells = [];
    for (let i = 0; i < data.length; i++) {
        for (const element of jsonData) {
            const row = data[i].split(',');
            const header = Object.keys(element)[0];
            row.push(header);
            data[i] = row.join(',');
        }
    }

    for (const obj of jsonData) {
        const dataRow = Object.values(obj);
        dataRows.push(dataRow);
        const firstColumn = Object.keys(dataRows[0][0]);
        const dataCell = Object.values(dataRows[0][0]);
        firstColumns.push(firstColumn);
    }
    for (const row of dataRows) {
        for (const person of row) {
            dataCells.push(Object.values(person));
        }
    }

    for (let i = 0; i < dataCells[0].length; i++) {
        const subAttribute = firstColumns[0][i];
        const value1 = dataCells[0][i];
        const value2 = dataCells[1][i];
        const value3 = dataCells[2][i];

        data.push(`${subAttribute}, ${value1}, ${value2}, ${value3}`);
    }

    return new Promise((resolve, reject) => {
        try {
            const csvString = data.join('\n');
            resolve(csvString);
          } catch (error) {
            reject(error);
          }
    });
}
