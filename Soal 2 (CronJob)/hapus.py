import os
import datetime

# Path untuk menyimpan file
output_path = r"C:\Peter File\Huawei\Soal 2 (CronJob)\home\cron"

def clean_old_files():
    now = datetime.datetime.now()
    for filename in os.listdir(output_path):
        file_path = os.path.join(output_path, filename)
        if os.path.isfile(file_path):
            # Ambil waktu modifikasi file
            file_mtime = datetime.datetime.fromtimestamp(os.path.getmtime(file_path))
            # Hitung selisih waktu
            if (now - file_mtime).days > 30:
                os.remove(file_path)
                print(f"File {filename} dihapus.")
