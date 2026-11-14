# Number Place, Nonogram & Kakuro API: examples

Code samples for the **[Logic Puzzle API](https://rapidapi.com/sutorimasutorima/api/logic-puzzle-number-place-nonogram)**: graded, uniquely solvable logic puzzles for apps, games, newsletters and print.

| Puzzle | What you can do |
|---|---|
| **Number place** (sudoku-style, 9x9 / 6x6 / 4x4) | 7,300+ graded puzzles · request a puzzle that **needs a specific technique** (X-Wing, Swordfish, naked pairs…) · solve & check uniqueness · grade your own puzzles · **step-by-step hints** with explanations · mistake detection · puzzle of the day |
| **Nonogram** (paint by numbers, 5x5 to 25x25) | 4,800 puzzles · **turn pixel art into a nonogram** and check it has exactly one solution · solve from clues · row/column hints |
| **Kakuro** (cross sums, 6x6 to 10x10) | Unique, logic-solvable puzzles · solve any kakuro and check uniqueness |
| All | Print-ready **SVG** with or without the solution |

Every bundled puzzle has exactly one solution and can be solved by logic alone, without guessing.

## Quick start

1. Subscribe on RapidAPI (the BASIC plan is free): https://rapidapi.com/sutorimasutorima/api/logic-puzzle-number-place-nonogram
2. `export RAPIDAPI_KEY=...`
3. `node examples/example.mjs` or `python3 examples/example.py`

```bash
# an expert puzzle that needs the X-Wing technique
curl "https://logic-puzzle-number-place-nonogram.p.rapidapi.com/v1/numberplace/random?level=expert&technique=x_wing" \
  -H "x-rapidapi-key: $RAPIDAPI_KEY" \
  -H "x-rapidapi-host: logic-puzzle-number-place-nonogram.p.rapidapi.com"
```

## Endpoints

| Method | Path |
|---|---|
| GET | `/v1/numberplace/random`, `/v1/numberplace/daily`, `/v1/numberplace/puzzle?id=`, `/v1/numberplace/svg` |
| POST | `/v1/numberplace/solve`, `/v1/numberplace/grade`, `/v1/numberplace/hint` |
| GET | `/v1/nonogram/random`, `/v1/nonogram/daily`, `/v1/nonogram/puzzle?id=`, `/v1/nonogram/svg` |
| POST | `/v1/nonogram/from-grid`, `/v1/nonogram/solve`, `/v1/nonogram/hint` |
| GET | `/v1/kakuro/random`, `/v1/kakuro/daily`, `/v1/kakuro/puzzle?id=`, `/v1/kakuro/svg` |
| POST | `/v1/kakuro/solve` |
| GET | `/v1/techniques`, `/v1/stats` |

Grids are plain strings (`"530070000600195000…"`, `0` = empty) or 2D arrays, so they are easy to store and render.

The examples in this repository are MIT licensed.
