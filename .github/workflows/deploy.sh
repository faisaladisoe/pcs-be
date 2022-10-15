echo "Kill all the running PM2 actions"
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/pcs-be

echo "Update app from Git"
git pull origin master

echo "Install app dependencies"
rm -rf node_modules package-lock.json
npm install

echo "Run new PM2 action"
pm2 start npm --name "bikun-tracker-backend" -- start

echo "APP IS UP AND RUNNING"