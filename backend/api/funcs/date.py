import datetime


def get_day():
  dt_now = datetime.datetime.now()
  return str(dt_now.day)

def get_time():
  dt_now = datetime.datetime.now()
  return  '{0:02}:{0:02}'.format(dt_now.hour, dt_now.minute, dt_now.second)