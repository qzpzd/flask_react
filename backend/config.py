import os
import pymysql
from urllib.parse import quote_plus

# 让pymysql伪装成MySQLdb，以便于和SQLAlchemy已有的配置逻辑等兼容
pymysql.install_as_MySQLdb()

class Config:
    password = '5201314Qzp@'
    encoded_password = quote_plus(password)
    # 将数据库连接字符串的格式调整为pymysql能正确解析的格式（这里和原来基本一致，但做了更明确的驱动指定）
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or f'mysql+pymysql://test:{encoded_password}@localhost/db_name'
    SQLALCHEMY_TRACK_MODIFICATIONS = False