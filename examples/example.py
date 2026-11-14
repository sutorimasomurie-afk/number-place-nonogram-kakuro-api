"""Python 3.8+, standard library only. Usage: RAPIDAPI_KEY=... python3 examples/example.py"""
import json
import os
import urllib.request

HOST = "logic-puzzle-number-place-nonogram.p.rapidapi.com"
KEY = os.environ["RAPIDAPI_KEY"]


def call(path, body=None):
    headers = {"x-rapidapi-key": KEY, "x-rapidapi-host": HOST}
    data = None
    if body is not None:
        headers["content-type"] = "application/json"
        data = json.dumps(body).encode()
    req = urllib.request.Request(f"https://{HOST}{path}", data=data, headers=headers)
    with urllib.request.urlopen(req) as r:
        return json.load(r)


# Puzzle of the day for every player
daily = call("/v1/numberplace/daily?level=medium")
print(daily["date"], daily["id"], daily["puzzle"])

# Solve and check uniqueness
print(call("/v1/numberplace/solve", {"puzzle": daily["puzzle"]})["unique"])

# A 15x15 nonogram, with clues for rows and columns
ng = call("/v1/nonogram/random?size=15&level=medium")
print(ng["id"], ng["rows"][:3], "...")

# Solve a kakuro you typed in ("." empty, "#" block, "down\\right" clue)
print(call("/v1/kakuro/solve", {"rows": ["# 4\\ 6\\", "\\3 . .", "\\7 . ."]}))
