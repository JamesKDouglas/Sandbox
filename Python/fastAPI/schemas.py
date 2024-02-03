
from pydantic import BaseModel

class PhotoBase(BaseModel):
    id: int
    filename: str
    size: int
    height: int
    width: int
    area: int

class PhotoCreate(PhotoBase):
    pass
