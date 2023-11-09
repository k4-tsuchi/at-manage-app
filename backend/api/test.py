
from sqlalchemy import create_engine
from sqlalchemy.orm import Session 

from sqlalchemy import select

import api_old.schemas.report as report_model

DB_URL = "mysql+pymysql://root@db:3306/demo?charset=utf8"
engine = create_engine(DB_URL, echo=True)

def main():

  f = open('input.txt', 'r')
  session = Session(engine)
  stmt = select(report_model.Report)
  for report in session.scalars(stmt):
    f.write(report)

