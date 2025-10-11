import path from 'path';

// Basename
console.log(path.basename('/teste/modules/path.js')); 
// Dirname
console.log(path.dirname('/teste/modules/path.js'));
// Extname
console.log(path.extname('/teste/modules/path.js'));
// Parse
console.log(path.parse('/teste/modules/path.js'));
// Join
console.log(path.join('/teste', 'modules', 'path.js'));
// Resolve
console.log(path.resolve('teste', 'modules', 'path.js'));
// IsAbsolute
console.log(path.isAbsolute('/teste/modules/path.js'));