#! /bin/bash

clear

echo "********************************************************************************"
echo "   Installing we.Mix lab module 4 package to AEM..."
echo "********************************************************************************"

cd `dirname $0`
curl -u admin:admin -F file=@packages/we.mix.l3846.content.mod4-1.0-SNAPSHOT.zip -F name=we.mix.l3846.content.mod4-1.0-SNAPSHOT -F force=true -F install=true http://localhost:4502/crx/packmgr/service.jsp