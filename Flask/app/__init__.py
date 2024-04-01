from flask import Flask
from flask_cors import CORS
from celery import Celery
import os
from dotenv import load_dotenv

# load_dotenv("./.env.local")
load_dotenv()

app = Flask(__name__)
CORS(app)

# Application Configurations
# # Celery configuration
app.config['CELERY_BROKER_URL'] = os.getenv("FLASK_REDIS_URL")
app.config['CELERY_RESULT_BACKEND'] = os.getenv("FLASK_REDIS_URL")

#Enviorn Variables
APPLICATION_TYPE = os.getenv("FLASK_APPLICATION_TYPE")

# Initialize Celery
celery = Celery("main", broker=os.getenv("FLASK_REDIS_URL"), backend=os.getenv("FLASK_REDIS_URL"))

from app.routes import get