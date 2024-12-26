import os
from crontab import CronTab

# Path ke skrip Python
collect_data_script = os.path.abspath(r'Soal 2 (CronJob)\collect.py')
clean_old_files_script = os.path.abspath(r'Soal 2 (CronJob)\hapus.py')

# Buat objek crontab
cron = CronTab(user=True)

# Cron job untuk collect data pada pukul 08:00, 12:00, dan 15:00 setiap hari
job_collect = cron.new(command=f'python3 {collect_data_script}', comment='Collect Data Job')
job_collect.setall('0 8,12,15 * * *')

# Cron job untuk clean old files setiap tengah malam
job_clean = cron.new(command=f'python3 {clean_old_files_script}', comment='Clean Old Files Job')
job_clean.setall('0 0 * * *')

# Simpan cron job ke dalam crontab
cron.write(r'Soal 2 (CronJob)\tabfile.tab')

print('Scheduler telah dibuat dan ditambahkan ke crontab.')