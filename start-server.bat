@echo off
echo ========================================================
echo      DUNGAW CATBALOGAN - TOURISM WEBSITE SERVER
echo ========================================================
echo Starting local web server at http://localhost:8080 ...
echo Press Ctrl+C in this window to stop the server.
echo.
start http://localhost:8080/index.html
python -m http.server 8080
pause

