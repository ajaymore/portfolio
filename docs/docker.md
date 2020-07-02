---
id: docker
title: Docker
sidebar_label: Docker
---

## Basics

```bash
# Run a container
docker run -p 80:80 nginx

# Run a container in detached mode with restart policy,
# volume, network, port, environment variable & a name
docker run --name postgres-db --restart always \
    -v $PWD/data:/usr/data --net reverse-proxy \
    -p 5433:5432 \
    -e POSTGRES_PASSWORD=mysecretpassword -d postgres

# List running containers
docker ps

# List all containers (Running or Stopped)
docker ps -a

# Remove untagged images
docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")

# Build Image
docker build -t mysticalaj/node-web-app -f prod/Dockerfile . # -t for tagname

# List images
docker images

# Check logs
docker logs <container id>

# Run command inside running container
docker exec -it <container id> /bin/bash

# Stop container
docker stop container_id

# Remove stopped container
docker rm container_id

# Remove image
docker image rm image_name

# remove all stopped containers
docker rm $(docker ps --filter status=exited -q)

# remove all containers
docker kill $(docker ps -aq)
docker rm $(docker ps -aq)

# complete cleanup of unused docker resources
docker prune
```

## Video conversion

```bash
# Convert high quality video to various formats
<720>
docker run -v $PWD:/tmp jrottenberg/ffmpeg \
        -stats \
        -i /tmp/test.mp4 \
        -s hd720 -c:v libx264 -crf 23 -c:a aac -strict -2 /tmp/test_720.mp4
<480>
docker run -v $PWD:/tmp jrottenberg/ffmpeg \
        -stats \
        -i /tmp/test.mp4 \
        -s hd480 -c:v libx264 -crf 23 -c:a aac -strict -2 /tmp/test_480.mp4

# Convert Video to Audio
docker run -v $PWD:/tmp jrottenberg/ffmpeg \
        -stats \
        -i /tmp/test.mp4 \
        /tmp/test.mp3

# Using Shaka Packager to create DASH content
docker run -v $PWD:/media -it --rm google/shaka-packager

packager \
    'in=/media/test.mp4,stream=audio,init_segment=/media/output/audio/init.mp4,segment_template=/media/output/audio/$Number$.m4s' \
    'in=/media/test_720.mp4,stream=video,init_segment=/media/output/h264_720p/init.mp4,segment_template=/media/output/h264_720p/$Number$.m4s' \
    'in=/media/test_480.mp4,stream=video,init_segment=/media/output/h264_480p/init.mp4,segment_template=/media/output/h264_480p/$Number$.m4s' \
    --generate_static_live_mpd --mpd_output /media/output/test.mpd
packager \
    in=/media/test.mp4,stream=audio,init_segment=/media/output/audio/init.mp4,segment_template=/media/output/audio/$Number$.m4s \
    --generate_static_live_mpd --mpd_output /media/output/test.mpd

# Run python server
cd output
python -m http.server
```

### Links

1. Shaka Packager https://google.github.io/shaka-packager/html/
2. VideoJS Player https://gist.github.com/ajaymore/093f9d415a80931636b4ca5dcced1478#file-index-html

## Dockerfile

[Documentation](https://docs.docker.com/engine/reference/builder/)

`mkdir $(date +%Y-%m-%d_%H%M)`

## docker-compose commands

```bash
sudo chown -R $USER:$USER . # Setting volume permissions
docker-compose build # also to rebuild
docker-compose up # Run all containers
docker-compose down
```

## Copy files from host to running container

```bash
docker cp foo.txt mycontainer:/foo.txt
docker cp mycontainer:/foo.txt foo.txt

# Multiple files contained by the folder src can be copied into the target folder using:

docker cp src/. mycontainer:/target
docker cp mycontainer:/src/. target
```

## MongoDB backup & restore

```
docker run -d -p 27018:27017 --name some-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    mongo

# Local docker instance mongodump
docker run --rm --link some-mongo -v $PWD/mongo-backup:/backup mongo \
 bash -c 'mongodump --db programming -u mongoadmin -p secret --authenticationDatabase admin --out /backup --host some-mongo:27017'

# Local docker instance mongorestore
docker run --rm --link some-mongo -v $PWD/mongo-backup:/backup mongo \
 bash -c 'mongorestore --db programming_new -u mongoadmin -p secret --authenticationDatabase admin /backup/programming --host some-mongo:27017'

# Remote instance mongodump
docker run --rm -v $PWD/mongo-backup:/backup mongo:4.2.5 \
 bash -c 'mongodump --db programming_remote -u admin -p nREnSEovpWI7jvBZ --authenticationDatabase admin --out /backup --ssl --host inip-shard-00-00-ksqln.mongodb.net:27017,inip-shard-00-01-ksqln.mongodb.net:27017,inip-shard-00-02-ksqln.mongodb.net:27017'

# Remote instance mongorestore
docker run --rm -v $PWD/mongo-backup:/backup mongo:4.2.5 \
    bash -c 'mongorestore --db programming_remote -u admin -p nREnSEovpWI7jvBZ --authenticationDatabase admin /backup/programming --ssl --host inip-shard-0/inip-shard-00-00-ksqln.mongodb.net:27017,inip-shard-00-01-ksqln.mongodb.net:27017,inip-shard-00-02-ksqln.mongodb.net:27017'
```
