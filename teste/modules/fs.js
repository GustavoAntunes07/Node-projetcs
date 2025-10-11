import fs, { readFile } from 'fs';
import path from 'path';
// import the bhaskara function
import bhaskara from './bhaskara.js';

// Output the dirname
console.log(path.dirname('/teste/modules/fs.js'));
// Const to get the folder name
const dirPath = path.basename('/teste/modules/');

// Call the bhaskara function and store the result
const bhaskaraResult = bhaskara();

// Create a folder
fs.mkdir(path.join(dirPath, 'oi'), (error) => {
    return error ? console.log('Erro ao criar pasta') : console.log('Pasta criada com sucesso');
})

// create and write a file with the bhaskara result
fs.writeFile(path.join(dirPath, 'oi', 'teste.txt'), bhaskaraResult, (error) => {
    if (error) {
        return console.log('Erro ao criar arquivo');
    }

    // Add a new line of text without overwriting the existing content
    fs.appendFile(path.join(dirPath, 'oi', 'teste.txt'), '\n\nOlá, tudo bem?', (error) => {
        return error ? console.log('Erro ao adicionar ao arquivo') : console.log('Adicionado ao arquivo com sucesso');
    })
    
    // Read the file
    fs.readFile(path.join(dirPath, 'oi', 'teste.txt'), 'utf-8', (error, data) => {
        return error ? console.log('Erro ao ler arquivo') : console.log(data);
    })
})

