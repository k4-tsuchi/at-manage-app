from typing import Optional, Tuple, List

from sqlalchemy import select
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

import api.models.report as report_model
import api.schemas.rest as rest_schema

from api.funcs import date
from api.funcs import cal_date


async def get_all_rest(db: AsyncSession) -> List[Tuple[int, str, bool]]:
   result: Result = await db.execute(
      select(
         report_model.Rest.id,
         report_model.Rest.time,
      )
   )
   return result.all()


async def get_rest(db: AsyncSession, report_id: int) -> Optional[report_model.Rest]:
  result: Result = await db.execute(
     select(report_model.Rest).filter(report_model.Rest.id == report_id)
  )
  rest: Optional[Tuple[report_model.Rest]] = result.first()
  return rest[0] if rest is not None else None


async def rest_in(
    db: AsyncSession, report_id: int, request: rest_schema.Rest
) -> rest_schema.RestResponse:
    rest = report_model.Rest(
        id = report_id,
        time = request.time
    )
    db.add(rest)
    await db.commit()
    await db.refresh(rest)
    return rest


async def rest_out(
      db: AsyncSession, 
      rest_original: report_model.Rest, 
      report_original: report_model.Report,
      request: rest_schema.Rest
) -> None:
  report_id = report_original.id
  span = cal_date.cal_time(rest_original.time, request.time, '-')

  old_span = report_original.rest_span 
  if old_span:
     span = cal_date.cal_time(old_span, span, '+')
  report_original.rest_span = span  

  db.add(report_original)
  await db.commit()
  await db.refresh(report_original)

  await db.delete(rest_original)
  await db.commit()

  rest = report_model.Rest(
     id = report_id,
     time = span
  )
  return rest 