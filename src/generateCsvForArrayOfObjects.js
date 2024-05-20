import { stringify } from "csv"
import fs from "fs"


/**
 * Generates a CSV string from an array of objects.
 * @param {Array} arrayOfObjects - The array of objects to convert to CSV.
 * @returns [ERROR] {message:'Fail to convert empty array',status:400} - If the array is empty or null.
 * @returns {Promise} A promise that resolves with the generated CSV string.
 */
export async function generateCsvForArrayOfObjects(arrayOfObjects) {
    if(arrayOfObjects === null || arrayOfObjects.length === 0){
        return {message:'Fail to convert empty array',status:400};
    }
    const headers = Object.keys(arrayOfObjects[0]);
    
    return new Promise((resolve,reject) =>
        stringify(arrayOfObjects, { header: true, columns: headers },(err, output) => {
        if (err) {
            return reject(err)
        }
        
        return resolve(output)
    }));
}

/**
 * Generates a CSV file from a given CSV string and saves it with the specified file name.
 * @param {string} csvString - The CSV string to be written to the file.
 * @param {string} fileName - The name of the file to be created.
 * @returns {Promise<boolean>} A promise that resolves to true if the file was successfully written, or rejects with an error if there was an issue.
 */
export async function generateCsvFile(csvString, fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile
        (fileName, csvString, (err) => {
            if (err) {
                return reject(err)
            }
            return resolve(true)
        })
    })
}