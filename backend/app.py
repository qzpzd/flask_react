from datetime import datetime
from flask import Flask, request, jsonify
from flask import send_file
from werkzeug.utils import secure_filename
from flask_cors import CORS
from models import db, UserModel
from config import Config
import os
from sqlalchemy.exc import OperationalError, IntegrityError
import logging

app = Flask(__name__)

# 从配置文件中加载配置到Flask应用（假设Config类已经正确定义了相关配置）
app.config.from_object(Config)

# 配置静态文件目录，确保能正确提供static目录下的文件服务
app.static_folder ='static'

# 使用init_app方法将SQLAlchemy实例和Flask应用进行绑定
db.init_app(app)

# 更详细地配置CORS，允许来自特定源（这里以*表示所有源，实际可根据前端域名等情况指定）的请求
# 允许的请求方法包括常见的GET、POST等，也允许自定义的请求头（比如前端发送JSON数据时的Content-Type头）
# 设置max_age来指定预检请求结果的缓存时间，单位是秒
CORS(app, resources={
    r"/add_user_data": {"origins": "*", "methods": ["GET", "POST", "OPTIONS"], "allow_headers": ["Content-Type"]},
    r"/user": {"origins": "*", "methods": ["GET", "POST", "OPTIONS"], "allow_headers": ["Content-Type"]}
}, max_age=3600)

# 设置静态文件目录（这里假设你的静态文件都放在backend/static目录下，根据实际情况调整）
STATIC_FOLDER = os.path.join(app.root_path,'static')
app.static_folder = STATIC_FOLDER

@app.route('/static/<path:filename>')
def serve_static(filename):
    file_path = os.path.join(STATIC_FOLDER, secure_filename(filename))
    if file_path.endswith('.js'):
        return send_file(file_path, mimetype='application/javascript')
    else:
        return send_file(file_path)

@app.route('/', methods=['GET'])
def index():
    return jsonify({"message": "Welcome to the data analysis API. Use /user route for data operations."})

@app.route('/user', methods=['GET'])
def get_user_data():
    try:
        # 记录查询开始时间
        logging.info("开始查询用户数据 - {}".format(datetime.now()))
        data = UserModel.query.all()
        result = [{"id": d.id, "name": d.name, "email": d.email} for d in data]
        # 记录查询结果数量
        logging.info("查询到 {} 条用户数据".format(len(result)))
        return jsonify(result)
    except Exception as e:
        logging.error("获取用户数据时出错: {}".format(e))
        return jsonify({"error": "获取用户数据失败", "message": str(e)}), 500


@app.route('/add_user_data', methods=['POST'])
def add_user_data():
    try:
        user_data = request.get_json()
        new_user = UserModel(
            name=user_data.get('name'),
            email=user_data.get('email')
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "用户数据添加成功"}), 201
    except IntegrityError as e:
        # 处理数据库完整性约束违反的情况，如唯一性约束
        logging.error("添加用户数据时违反完整性约束: {}".format(e))
        return jsonify({"error": "添加用户数据失败，可能是数据不唯一", "message": str(e)}), 400
    except OperationalError as e:
        # 处理数据库操作错误，如连接问题
        logging.error("数据库操作出错: {}".format(e))
        return jsonify({"error": "数据库操作失败", "message": str(e)}), 500
    except Exception as e:
        logging.error("添加用户数据时发生未知错误: {}".format(e))
        return jsonify({"error": "添加用户数据失败", "message": str(e)}), 500


@app.route('/add_user_data', methods=['OPTIONS'])
def handle_options_add_user_data():
    print("Received OPTIONS request for /add_user_data")
    return '', 200


@app.teardown_appcontext
def shutdown_session(exception=None):
    # 在应用上下文销毁时关闭数据库会话
    db.session.close()
if __name__ == '__main__':
    app.run(debug=True)