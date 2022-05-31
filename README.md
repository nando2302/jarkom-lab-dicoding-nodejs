# Project Dicoding lab jarkom membangun reserver proxy menggunakan NGINX

1. download Project dengan menggunakan Git Clone
``````
https://github.com/dicodingacademy/a387-jarkom-labs.git
```````
2. download node js 14.15.4 pada nodejs.org

3. jalan perintah install pada start pertama didalam directory project yang sudah di clone
``````
npm install 
``````
4. jalan perintah start server
``````
npm start
``````

# install nginx pada server atau local anda
``````
sudo apt install nginx -y
``````
test nginx dengan cara
``````
localhost atau ip address pada server atau komputer local anda
``````

masuk ke directory nginx dan sites-enabled
```````
cd /etc/nginx/sites-enabled
```````

hapus file default dengan file default yang sudah tersedia
```````
rm default

cp /var/www/dicoding-nodejs/default.txt /etc/nginx/sites-enabled/default
```````
masuk kedirectory sites-available pada nginx untuk menghapus default config
`````` 
cd ..
cd sites-available
rm default
``````
setelah itu sikronkan konfig di sites-enabled dan sites-available
`````
sudo ln -s /etc/nginx/sites-enabled/default /etc/nginx/sites-available
`````

catatan jangan gunakan firewall untuk memudahkan kalau firewall kalian hidup matikan saja
`````
sudo ufw disable
`````