echo 'git auto push start...'
# msg=$1
git add .
git commit -m "${2:-update}"
# git pull origin master
git push origin ${1}
echo 'git auto push end !'