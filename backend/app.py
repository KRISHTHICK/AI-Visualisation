from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# Allow frontend (React) to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock data
zones_data = {
    "2025-09-09": {
        "Zone A": 120,
        "Zone B": 300,
        "Zone C": 90,
        "Zone D": 45
    }
}

entry_data = {
    "today": {"count": 450, "trend": [50, 100, 120, 80, 100]},
    "yesterday": {"count": 390, "trend": [40, 90, 110, 70, 80]}
}

@app.get("/footfall")
def get_footfall(date: str):
    return zones_data.get(date, {})

@app.get("/entry-count")
def get_entry_count():
    return entry_data

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
