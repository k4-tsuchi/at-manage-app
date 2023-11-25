from typing import Optional

from pydantic import BaseModel, Field

#ベースモデル
class ReportBase(BaseModel):
  # name: Optional[str] = Field(None, example="ためし")
  pass

class ReportCreate(ReportBase):
  month: Optional[str] = Field(None, example='-') 
  day: Optional[str] = Field(None, example='-') 
  start_at: Optional[str] = Field(None, example='-')

class ReportCreateResponse(ReportCreate):
  id: int = Field(0, description="レポートID")

  class Config:
    from_attribute = True

class ReportClose(ReportBase):
  end_at: Optional[str] = Field(None, example='-')  

class ReportResponse(ReportClose):
  id: int = Field(0, description="レポートID")
  day: Optional[str] = Field(None, example='-') 
  start_at: Optional[str] = Field(None, example='-')
  rest_span: Optional[str] = Field(None, example='-')
  active_span: Optional[str] = Field(None, example='-')

  class Config:
    from_attribute = True



  


  



