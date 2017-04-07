#! /bin/bash

clear

echo "********************************************************************************"
echo "*****    Installing Final Summit Lab 3846..."
echo "********************************************************************************"

cd `dirname $0`
curl -u admin:admin -F file=@packages/we.mix.content-1.0-SNAPSHOT.zip -F name=we.mix.content-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4502/crx/packmgr/service.jsp
curl -u admin:admin -F file=@packages/we.mix.content.app-1.0-SNAPSHOT.zip -F name=we.mix.content.app-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4502/crx/packmgr/service.jsp
curl -u admin:admin -F file=@packages/we.mix.content.app-1.0-SNAPSHOT.zip -F name=we.mix.content.app-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4503/crx/packmgr/service.jsp

