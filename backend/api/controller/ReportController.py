
from typing import List, Tuple, Optional

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.engine import Result

import api.models.report as report_model
import api.schemas.report as report_schema

from api.funcs import date
from api.funcs import cal_date

async def create(
    db: AsyncSession, 
    request: report_schema.ReportCreate
) -> report_model.Report:
  report = report_model.Report(
    month=request.month,
    day=request.day,
    start_at=request.start_at,
  )
  db.add(report)
  await db.commit()
  await db.refresh(report)
  return report

async def get_all(db: AsyncSession) -> List[Tuple[int, str, bool]]:
  result: Result = await (
    db.execute(
        select(
          report_model.Report.id,
          report_model.Report.month,
          report_model.Report.day,
          report_model.Report.start_at,
          report_model.Report.rest_span,
          report_model.Report.end_at,
          report_model.Report.active_span
      )
    )
  )
  return result.all()

async def get_month(
    db: AsyncSession,
    date_month: str
    ) -> List[Tuple[int, str, bool]]:
  result: Result = await (
    db.execute(
      select(
          report_model.Report.id,
          report_model.Report.month,
          report_model.Report.day,
          report_model.Report.start_at,
          report_model.Report.rest_span,
          report_model.Report.end_at,
          report_model.Report.active_span
      ).filter(report_model.Report.month == date_month)
    )
  )
  return result.all()

async def get_report(
    report_id: int,
    db: AsyncSession
    ) -> report_schema.ReportResponse:
  result: Result = await db.execute(
    select(report_model.Report).filter(report_model.Report.id == report_id)
  )
  report: Optional[Tuple[report_model.Report]] = result.first()
  return report[0] if report is not None else None

async def close(
    db: AsyncSession, 
    original: report_model.Report,
    request: report_schema.ReportClose, 
) -> report_model.Report:
  tn = request.end_at
  original.end_at = tn
  original.active_span = cal_date.cal_time(original.start_at, tn, '-')
  db.add(original)
  await db.commit()
  await db.refresh(original)
  return original