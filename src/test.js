import fs from "fs";

export async function testeSimples() {
  const data = [''];  //para pular uma celula
  for (let i = 0; i < data.length; i++) {
    const row = data[i].split(','); 
    row.push('ana', 'maria', 'carlos');  
    data[i] = row.join(','); 
  }
  for (let i = 0; i < 10; i++) {
    data.push(`${i}, 1`); 
  }



  fs.writeFileSync('flavi.csv', data.join('\n'));
}

