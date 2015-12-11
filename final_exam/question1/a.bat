@echo off
rem M102 Final
rem Script to make a test replica set. See problem #1.

rem if you need to start over try:
rem rmdir data /s
rem (careful that deletes that everything under data/ recursively!)

rem we expect nothing to be running.
rem you might have a mongo shell running which is ok...but
rem no mongod or mongos processes.

echo make / reset dirs
mkdir C:\data
mkdir C:\data\z1
mkdir C:\data\z2
mkdir C:\data\z3

echo running mongod processes...

start mongod --smallfiles --oplogSize 50 --port 27001 --dbpath C:/data/z1 --replSet z
start mongod --smallfiles --oplogSize 50 --port 27002 --dbpath C:/data/z2 --replSet z
start mongod --smallfiles --oplogSize 50 --port 27003 --dbpath C:/data/z3 --replSet z

rem give them time to start. note this might not be enough time!
sleep 1

echo "Now run:"
echo "  mongo --shell --port 27003 a.js"

rem Tip: in powershell, list all mongo processes with:
rem        ps mongo*
rem      and you can terminate them all with:
rem        ps mongo* | kill
