import re

from datetime import datetime as dt   

def cal_time(n1, n2, option='-'):
  n1 = div_time(n1)
  n2 = div_time(n2)

  if option == '+':
    return date_format(n2 + n1)
  
  return date_format(n2 - n1)


def date_format(time):
  h = int(time / 60)
  m = int(time % 60)
  return "{:0>2}:{:0>2}".format(h, m)

def div_time(time):
  time_list = time.split(":")
  h = int(time_list[0]) * 60
  m = int(time_list[1])
  return h + m 

# def add_time(n1, n2):
#   n1 = dt.strptime(n1, "%H:%M")
#   n2 = dt.strptime(n2, "%H:%M")

#   calc = str(n2 + n1).split(':')
  
#   return "{:0>2}:{:0>2}".format(calc[0], calc[1])