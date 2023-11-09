from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import report, rest

app = FastAPI()

origins = [
  "https://localhost:5173"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

app.include_router(report.router)
app.include_router(rest.router)
