from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, relationship
from sqlalchemy import Column, ForeignKey
from sqlalchemy.dialects.mysql import INTEGER, VARCHAR, TIMESTAMP
from dotenv import load_dotenv
import os

load_dotenv()
Base = declarative_base()

###################### TABLE CREATION ######################

# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, unique=True, index=True)
#     email = Column(String, unique=True, index=True)
    
class ADMIN(Base):
    __tablename__ = "admin"
    
    id = Column(INTEGER(500), primary_key=True, autoincrement=True, index=True)
    prod_id = Column(INTEGER(12), nullable=True, unique=True)
    prod_name = Column(VARCHAR(30), nullable=True)
    prod_desc = Column(VARCHAR(100), nullable=True)



###################### DATABASE CONNECTION ######################

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")

SQLALCHEMY_DATABASE_URI = (
    f"mysql+mysqlconnector://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)

connect_args = {
    "raise_on_warnings": True,
}

engine = create_engine(SQLALCHEMY_DATABASE_URI, connect_args=connect_args)
Base.metadata.create_all(bind=engine)

table_creation_session = scoped_session(
    sessionmaker(autocommit=False, autoflush=False, bind=engine)
)