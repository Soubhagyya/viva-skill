@echo off
echo Pushing viva-skill to GitHub...
git add .
git commit -m "Initial release: viva-skill by Soubhagyya"
git branch -M main
git remote set-url origin https://github.com/Soubhagyya/viva-skill.git 2>nul || git remote add origin https://github.com/Soubhagyya/viva-skill.git
git push -u origin main
pause
