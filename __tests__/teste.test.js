import responseJson from '../mock/allPoints.json';
import { generateCsvForArrayOfObjects,generateCsvFile } from '../src/generateCsvForArrayOfObjects';


test('GENERATE CSV FOR ARRAY OF OBJECT', async () => {
    const response = responseJson.response;
    const value = await generateCsvForArrayOfObjects(response);
    expect(value).toBe('nome,sobrenome,doenca,dataEntrada,dataSaida,idade\n'+
    'Ana,Silva,Gripe,2023-01-10,2023-01-15,34\n'+
    'Carlos,Pereira,Diabetes,2023-02-20,2023-03-01,45\n'+
    'Beatriz,Oliveira,Hipertensão,2023-03-15,2023-03-22,52\n'+
    'Eduardo,Santos,Covid-19,2023-04-01,2023-04-14,29\n'+
    'Fernanda,Costa,Asma,2023-05-05,2023-05-12,26\n'+
    'Gabriel,Ferreira,Bronquite,2023-06-10,2023-06-20,37\n'+
    'Helena,Martins,Gastrite,2023-07-15,2023-07-22,31\n'+
    'Igor,Almeida,Depressão,2023-08-10,2023-08-25,24\n'+
    'Juliana,Rodrigues,Enxaqueca,2023-09-05,2023-09-10,28\n'+
    'Lucas,Gomes,Alergia,2023-10-01,2023-10-07,22\n')
})

test('GENERATE CSV FOR ARRAY OF OBJECT EMPTY', async () => {
    try{
        const response = [];
        const value = await generateCsvForArrayOfObjects(response);
    }catch(e){
        expect(e).toBe(JSON.stringify({message:'Fail to convert empty array',status:400}));
    }
})

test('GENERATE CSV FOR ARRAY OF OBJECT NULL', async () => {
    try{
        const response = null;
        const value = await generateCsvForArrayOfObjects(response);
    }catch(e){
        expect(e).toBe(JSON.stringify({message:'Fail to convert empty array',status:400}));
    }
})

test('GENERATE CSV FILE', async () => {
    const response = 'nome,sobrenome,doenca,dataEntrada,dataSaida,idade\n'+
    'Ana,Silva,Gripe,2023-01-10,2023-01-15,34\n'+
    'Carlos,Pereira,Diabetes,2023-02-20,2023-03-01,45\n'+
    'Beatriz,Oliveira,Hipertensão,2023-03-15,2023-03-22,52\n'+
    'Eduardo,Santos,Covid-19,2023-04-01,2023-04-14,29\n'+
    'Fernanda,Costa,Asma,2023-05-05,2023-05-12,26\n'+
    'Gabriel,Ferreira,Bronquite,2023-06-10,2023-06-20,37\n'+
    'Helena,Martins,Gastrite,2023-07-15,2023-07-22,31\n'+
    'Igor,Almeida,Depressão,2023-08-10,2023-08-25,24\n'+
    'Juliana,Rodrigues,Enxaqueca,2023-09-05,2023-09-10,28\n'+
    'Lucas,Gomes,Alergia,2023-10-01,2023-10-07,22\n';
    const value = await generateCsvFile(response,'a.csv');
    expect(value).toBe(true);
})

test('GENERATE CSV FILE EMPTY', async () => {
    try{
        const response = '';
        const value = await generateCsvFile(response,'a.csv');
    }catch(e){
        
        expect(e).toBe(JSON.stringify({message:'FAIL TO CONVERT CSV NULL',status:400}));
    }
})

test('GENERATE CSV FILE NULL', async () => {
    try{
        const response = null;
        const value = await generateCsvFile(response,'a.csv');
    }catch(e){
        expect(e).toBe(JSON.stringify({message:'FAIL TO CONVERT CSV NULL',status:400}));
    }
})