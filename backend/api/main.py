from fastapi import FastAPI

from api.routers import report, rest

app = FastAPI()
app.include_router(report.router)
app.include_router(rest.router)
