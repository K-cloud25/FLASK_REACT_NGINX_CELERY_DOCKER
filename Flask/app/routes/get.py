from flask import make_response, jsonify, url_for
from app import app, APPLICATION_TYPE
from app.backgroundtask.celeryTask import long_task

@app.route("/", methods=["GET"])
def index():
    return make_response(jsonify("HELLO WORLD"), 200)

@app.route("/env_type", methods=['GET'])
def getEnviornmentType():
    return make_response(jsonify({'result' : APPLICATION_TYPE}), 200)

@app.route("/long_task", methods=['GET'])
def startTask():
    task = long_task.apply_async()
    print(task.id)
    payload = {
        "taskId" : task.id,
        "taskStatus" : task.status 
    }
    return make_response(jsonify(payload), 202)

@app.route("/status/<taskid>", methods=['GET'])
def getTaskStatus(taskid):
    
    task = long_task.AsyncResult(taskid)
    payload = {
        'state' : task.state,
        'progress' : task.info.get('progress',0)
    }
    return make_response(jsonify(payload),200)
    
