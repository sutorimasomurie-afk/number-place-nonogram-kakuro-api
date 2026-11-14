// Node.js 18+. Usage: RAPIDAPI_KEY=... node examples/example.mjs
import { writeFileSync } from 'node:fs';
const HOST = 'logic-puzzle-number-place-nonogram.p.rapidapi.com';
const KEY = process.env.RAPIDAPI_KEY;
if (!KEY) throw new Error('Set RAPIDAPI_KEY first');
const headers = { 'x-rapidapi-key': KEY, 'x-rapidapi-host': HOST };
const get = async (path) => (await fetch(`https://${HOST}${path}`, { headers })).json();
const post = async (path, body) => (await fetch(`https://${HOST}${path}`, { method: 'POST', headers: { ...headers, 'content-type': 'application/json' }, body: JSON.stringify(body) })).json();

// 1. A hard number place puzzle, printed as text
const p = await get('/v1/numberplace/random?level=hard');
console.log(p.id, p.level, 'needs:', p.techniques.map((t) => t.name).join(', '));
p.grid.forEach((row) => console.log(row.map((v) => v || '.').join(' ')));

// 2. Ask for the next hint, as a player would
const hint = await post('/v1/numberplace/hint', { puzzle: p.puzzle });
console.log(`Hint: row ${hint.row}, column ${hint.col} is ${hint.value}. ${hint.explanation}`);

// 3. Grade your own puzzle
console.log(await post('/v1/numberplace/grade', { puzzle: '530070000600195000098000060800060003400803001700020006060000280000419005000080079' }));

// 4. Turn pixel art into a nonogram and check it has exactly one solution
const heart = ['.##.##.', '#######', '#######', '.#####.', '..###..', '...#...'];
const ng = await post('/v1/nonogram/from-grid', { grid: heart });
console.log('row clues', ng.rows, 'unique:', ng.unique, 'level:', ng.level);

// 5. Save a printable kakuro as SVG
const kk = await get('/v1/kakuro/random?size=8');
const svg = await (await fetch(`https://${HOST}/v1/kakuro/svg?id=${kk.id}`, { headers })).text();
writeFileSync(`${kk.id}.svg`, svg);
console.log('saved', `${kk.id}.svg`);
