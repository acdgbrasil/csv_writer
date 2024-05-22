import mockJson from '../mock/mockJson.json';
import { generateCsvFile } from '../src/generateCsvForArrayOfObjects';
import { generateCsvForJson } from '../src/generateCsvForJson';

test('IF GENERATE CSV LOGIC IS CORRECT', async () => {
  jest.setTimeout(10000);
  const data = ['']; //para pular uma celula
  const dataRows = [];
  const firstColumns = [];
  const dataCells = [];
  for (let i = 0; i < data.length; i++) {
    for (const element of mockJson) {
      const row = data[i].split(','); 
      const header = Object.keys(element)[0];
      row.push(header);  
      data[i] = row.join(','); 
    }
  }
 
  for (const obj of mockJson) {
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
  const csvString = data.join('\n');
  expect(csvString).toBe(',ana,maria,carlos\nnome, João Silva, Paula Silva, Pedro Sousa\nidade, 32, 34, 30\ngenero, feminino, masculino, sem genero');
});

test('IF GENERATE CSV LOGIC IS CORRECT', async () => {
  jest.setTimeout(10000);

  const response = await generateCsvForJson(mockJson);
  expect(response).toBe(',ana,maria,carlos\nnome, João Silva, Paula Silva, Pedro Sousa\nidade, 32, 34, 30\ngenero, feminino, masculino, sem genero');
});

test('IF GENERATE CSV FILE USING GENERATECSVFORJSON', async () => {
  jest.setTimeout(10000);
  const response = await generateCsvForJson(mockJson);
  const value = await generateCsvFile(response,'flav.csv');
  expect(value).toBe(true);
});


test('IF JSON IS NULL', async () => {
  const response = null;
  const value = await generateCsvForJson(response);
  expect(value.toString()).toBe({ message: 'Fail to convert empty array', status: 400 }.toString());
});

test('IF JSON IS EMPTY', async () => {
  const response = [];
  const value = await generateCsvForJson(response);
  expect(value.toString()).toBe({ message: 'Fail to convert empty array', status: 400 }.toString());
});



