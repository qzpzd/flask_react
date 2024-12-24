from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys
import os

# 获取当前文件（database.py）所在目录的绝对路径
current_dir = os.path.dirname(os.path.abspath(__file__))
# 向上一级目录获取项目根目录的绝对路径
project_root = os.path.dirname(current_dir)
# 将项目根目录添加到模块搜索路径中（确保不会重复添加）
if project_root not in sys.path:
    sys.path.append(project_root)

from config import Config

engine = create_engine(Config.SQLALCHEMY_DATABASE_URI)
Session = sessionmaker(bind=engine)
db_session = Session()