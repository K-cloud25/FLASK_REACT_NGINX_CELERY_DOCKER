from app import celery
import time,random

@celery.task(bind=True)
def long_task(self):
    prog = 0
    self.update_state(state="PROCESSING", meta={'progress':prog})
    print("Start")
    time.sleep(random.randint(5,15))
    prog = random.randint(prog, 50)
    self.update_state(state="PROCESSING", meta={'progress':prog})
    time.sleep(random.randint(5,15))
    prog = random.randint(prog, 80)
    self.update_state(state="PROCESSING", meta={'progress':prog})
    time.sleep(random.randint(5,15))
    prog = 100
    return { "result" : "Final Value", 'progress' : prog }