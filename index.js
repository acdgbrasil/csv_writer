import express from 'express';
import { generateCsvForArrayOfObjects,generateCsvFile } from './src/generateCsvForArrayOfObjects.js';
import fs from 'fs';
const app = express();
const PORT = process.env.PORT || 3000;


/**
 * @fileoverview Rota para gerar e baixar um arquivo CSV a partir de um array de objetos.
 */

/**
 * @typedef {Object} RequestBody
 * @property {string} fileName - O nome do arquivo CSV a ser gerado.
 * @property {Array<Object>} arrayOfObject - O array de objetos a ser convertido em CSV.
 */

/**
 * Gera e baixa um arquivo CSV a partir de um array de objetos.
 *
 * @route POST /download/csv/array/object
 * @group CSV - Operações relacionadas a CSV
 * @param {string} req.body.fileName - O nome do arquivo CSV a ser gerado.
 * @param {Array<Object>} req.body.arrayOfObject - O array de objetos a ser convertido em CSV.
 * @returns {void} Retorna o arquivo CSV gerado para download.
 * @throws {Error} Se ocorrer um erro durante a geração do CSV.
 * 
 * @example
 * // Corpo da requisição
 * {
 *   "fileName": "meu_arquivo",
 *   "arrayOfObject": [
 *     {"nome": "Ana", "idade": 34},
 *     {"nome": "Carlos", "idade": 45}
 *   ]
 * }
 * 
 * @example
 * // Resposta de sucesso (status 200)
 * // O arquivo CSV será baixado com o nome especificado.
 * 
 * @example
 * // Resposta de erro (status 400)
 * {
 *   "message": "Erro na geração do CSV."
 * }
 */
app.post('/download/csv/array/object', async (req, res) => {
    try{
        const {fileName,arrayOfObject} = req.body;
        const result = await generateCsvForArrayOfObjects(arrayOfObject,'teste','Teste2');
        const resultCSV = await generateCsvFile(result, 'a.csv');
        res.status(200).download('a.csv', `${fileName}.csv`);
    }catch(err){
        res.status(400).send({message:err.message});
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});