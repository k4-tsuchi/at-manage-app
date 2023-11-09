from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

import api.schemas.report as report_schema

import api.controller.ReportController as report_controller
from api.db import get_db

router = APIRouter()

#勤退の一覧を表示する
@router.get("/reports", response_model=List[report_schema.ReportResponse])
async def list_report(db: AsyncSession = Depends(get_db)):
  return await report_controller.get_all(db)

#新しい日にちの記録を作成
@router.post("/reports", response_model=report_schema.ReportCreateResponse)
async def create_report(request_body: report_schema.ReportCreate, db: AsyncSession = Depends(get_db)):
  return await report_controller.create(db, request_body)

#記録を更新する
# @router.put("/reports/{report_id}", response_model=report_schema.ReportResponse)
# async def update_report(report_id: int, report_body: report_schema.Report):
#   return report_schema.Report(id=report_id, **report_body.model_dump())

#退勤時間を記録する
@router.delete("/reports/{report_id}", response_model=report_schema.ReportResponse)
async def close_report(report_id: int, request_body: report_schema.ReportClose, db: AsyncSession = Depends(get_db)):
  report = await report_controller.get_report(db=db, report_id=report_id)
  if report is None:
    raise HTTPException(status_code = 404, detail="Report is not found")
  return await report_controller.close(db, original=report, request=request_body)
