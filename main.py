import datetime
import time

TOTAL_SECONDS_PER_DAY = 10*100*100
ONE_SECOND = .864

class decimal_time():

    def __init__(self, year=None, month=None, day=None, hours=None, minutes=None, seconds=None):
        self.now_decimal_seconds()

    def now_decimal_seconds(self):
        now = datetime.datetime.now()
        elapsed_fraction = datetime.timedelta(days=1) - (
                datetime.datetime(day=24, month=2, year=2022, hour=0, minute=0, second=0) - now)
        elapsed_fraction = elapsed_fraction.seconds / (60 * 60 * 24)
        self.elapsed_decimal_seconds = elapsed_fraction * TOTAL_SECONDS_PER_DAY

    def increment(self):
        self.elapsed_decimal_seconds += 1

    def now(self):
        self.seconds = int(abs(self.elapsed_decimal_seconds) % 100)
        self.minutes = int(((self.elapsed_decimal_seconds % 10000) - self.seconds)/100)
        self.hours = int(self.elapsed_decimal_seconds // (100 * 100))
        return self

    def __str__(self):
        return f"{'{:0>1}'.format(self.hours)}:{'{:0>2}'.format(self.minutes)}:{'{:0>2}'.format(self.seconds)}"

dt = decimal_time()
while True:
    print(dt.now())
    dt.increment()
    time.sleep(ONE_SECOND)
