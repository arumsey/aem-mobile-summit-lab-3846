#! /bin/bash

clear

echo "********************************************************************************"
echo "   Installing we.Mix L3846 packages to AEM..."
echo "********************************************************************************"

cd `dirname $0`
curl -u admin:admin -F file=@packages/we.mix.l3846.content.assets-1.0-SNAPSHOT.zip -F name=we.mix.l3846.content.assets-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4502/crx/packmgr/service.jsp
curl -u admin:admin -F file=@packages/we.mix.l3846.content-1.0-SNAPSHOT.zip -F name=we.mix.lab.content-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4502/crx/packmgr/service.jsp
curl -u admin:admin -F file=@packages/we.mix.content.app-1.0-SNAPSHOT.zip -F name=we.mix.content.app-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4502/crx/packmgr/service.jsp

curl -u admin:admin -F file=@packages/we.mix.content.app-1.0-SNAPSHOT.zip -F name=we.mix.content.app-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4503/crx/packmgr/service.jsp

