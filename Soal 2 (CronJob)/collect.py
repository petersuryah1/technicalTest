import os
import datetime
import requests

# Path untuk menyimpan file
output_path = r"C:\Peter File\Huawei\Soal 2 (CronJob)\home\cron"

def collect_data():
    now = datetime.datetime.now()
    date_str = now.strftime("%d%m%Y")
    hour_str = now.strftime("%H.00")
    filename = f"cron_{date_str}_{hour_str}.csv"
    file_path = os.path.join(output_path, filename)

    url = "https://consumer.huawei.com/"
    try:
        response = requests.get(url)
        response.raise_for_status()
    
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(response.text)
        print(f"Data berhasil disimpan ke {file_path}")
    except requests.RequestException as e:
        print(f"Error mengambil data: {e}")

collect_data()
