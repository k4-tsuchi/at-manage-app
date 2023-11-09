
from typing import Optional

from pydantic import BaseModel, Field

from api.schemas.report import ReportBase


class Rest(ReportBase):
  time: Optional[str] = Field(None, example='-')

#Restのレスポンス
#in or outの切り替えができるようにする
#休憩開始=True, 終了時間=Falseで扱う
class RestResponse(Rest):
  id: int = Field(0, description="レポートID")
  class Config:
    from_attribute = True