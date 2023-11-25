from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from api.db import Base


class Report(Base):
  __tablename__ = "reports"

  id = Column(Integer, primary_key=True)
  # name = Column(String(1024))
  month = Column(String(1024))
  day = Column(String(1024))
  start_at = Column(String(1024))
  rest_span = Column(String(1024))
  end_at = Column(String(1024))
  active_span = Column(String(1024))

  rest = relationship("Rest", back_populates="report", cascade="delete")

class Rest(Base):
  __tablename__ = "rests"

  id = Column(Integer, ForeignKey("reports.id"), primary_key=True)
  time = Column(String(1024))

  report = relationship("Report", back_populates="rest")