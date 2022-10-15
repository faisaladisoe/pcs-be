echo "Kill all the running PM2 actions"
sudo pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/pcs-be

echo "Update app from Git"
git pull origin master

echo "Install app dependencies"
sudo rm -rf node_modules package-lock.json
sudo npm install

echo "Run new PM2 action"
sudo pm2 start npm --name "bikun-tracker-backend" -- start