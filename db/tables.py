from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from list_manager import config
from readIT_API.db import connection
 
Base = declarative_base()


class Course(Base):
    __tablename__ = 'course'

    id = Column(Integer, primary_key=True)
    code = Column(String(6), nullable=False, unique=True)
    name = Column(String(100), nullable=False)
    course_page = Column(String(250), nullable=False) # Should validate adress
    type = Column(String(10), nullable=False)


class CoursePeriod(Base):
    __tablename__ = 'course_period'

    id = Column(Integer, primary_key=True)
    period = Column(Integer, ForeignKey('course.id'))
    course = Column(Integer, ForeignKey('period.id'))
    course = relationship(Course)
    period = relationship(Period)


class Period(Base):
    __tablename__ = 'period'

    id = Column(Integer, primary_key=True)
    period = Column(String(3), unique=True) # check ^LP[1-4]$


class CourseBlock(Base):
    __tablename__ = 'course_block'

    id = Column(Integer, primary_key=True)
    course = Column(Integer, ForeignKey('course.id'))
    block = Column(Integer, ForeignKey('block.id'))
    course = relationship(Course)
    block = relationship(Block)


class Block(Base):
    __tablename__ = 'block'

    id = Column(Integer, primary_key=True)
    block = Column(String(1)) # check ^[A-Z]$

 
# Create all tables in the engine. This is equivalent to "Create Table"
# statements in raw SQL.
Base.metadata.create_all(connection)

