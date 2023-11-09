
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

import api.schemas.rest as rest_schema
import api.controller.RestController as rest_controller
import api.controller.ReportController as report_controller

from api.db import get_db

router = APIRouter()

@router.get("/reports/rest", response_model=List[rest_schema.RestResponse])
async def get_rest_all(db: AsyncSession = Depends(get_db)):
  return await rest_controller.get_all_rest(db=db)

@router.post("/reports/{report_id}/rest", response_model=rest_schema.RestResponse)
async def on_rest(report_id: int, request: rest_schema.Rest, db: AsyncSession = Depends(get_db)):
  rest = await rest_controller.get_rest(db=db, report_id=report_id)
  if rest is not None:
    raise HTTPException(status_code=400, detail="Rest already exists")
  return await rest_controller.rest_in(db=db, report_id=report_id, request=request)

@router.delete("/reports/{report_id}/rest", response_model=rest_schema.RestResponse)
async def off_rest(report_id: int, request: rest_schema.Rest, db: AsyncSession = Depends(get_db)):
  rest = await rest_controller.get_rest(db=db, report_id=report_id)
  if rest is None:
    raise HTTPException(status_code=400, detail="Rest not found")
  
  report = await report_controller.get_report(db=db, report_id=report_id)
  return await rest_controller.rest_out(db=db, rest_original=rest, report_original=report, request=request)

