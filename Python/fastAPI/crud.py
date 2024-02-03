from sqlalchemy.orm import Session

from . import models, schemas

def get_items(db: Session):
    return db.query(models.Photo).all()

# does type declaration like this just condense the filename, size etc into the data type schemas.PhotoCreate? Seems optimistic.
def create_photo(db: Session, photo: schemas.PhotoCreate):
    
    db_item = models.Photo(**photo.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item