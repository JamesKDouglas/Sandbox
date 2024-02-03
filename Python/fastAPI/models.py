from sqlalchemy import Column, Integer, String

from .database import Base

class Photo(Base):
    __tablename__ = "photos"

    id = Column(Integer, primary_key=True)
    filename = Column(String)
    size = Column(Integer)
    height = Column(Integer)
    width = Column(Integer)
    area = Column(Integer)
