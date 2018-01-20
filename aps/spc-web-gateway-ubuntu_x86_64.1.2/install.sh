#!/bin/bash

INSTALL_DIR=/opt/spc-web-gateway

# Check for root priviledges
if [ $(id -u) != 0 ]
then
	echo "-----------------------------------------------------------------------------"
	echo " Superuser (root) priviledges are required to install SPC Web Gateway"
	echo " ** Please use: sudo ./install.sh **"
	echo "-----------------------------------------------------------------------------"
	exit 1
fi

# Accept EULA
echo "-----------------------------------------------------------------------------"
echo " Please read End-User License Agreement for SPC Web Gateway (EULA), found in:"
echo "   - SPC Web Gateway Installation Guide, or"
echo "   - SPC_WEB_GATEWAY_EULA.txt file"
echo "-----------------------------------------------------------------------------"
while true
do
	echo -n "Do you accept the EULA? yes/no: "
	read ANSWER < /dev/tty
	case $ANSWER in
		yes)
			break
			;;
		no)
			exit 1
			;;
	esac
	echo "Please answer yes or no"
done
echo "-----------------------------------------------------------------------------"

# Check if SPC Web Gateway was already installed
if [ -r ${INSTALL_DIR} ]
then
    echo " Previous SPC Web Gateway installation found"

    echo "   Stopping SPC Web Gateway"
    /etc/init.d/spc-web-gateway stop

    TMP_SPC_GW_DIR=/opt/spc-web-gateway_$(date "+%Y-%m-%d-%H-%M-%S")
    echo "   Making backup of previous version of SPC Web Gateway in $TMP_SPC_GW_DIR"
    echo "   ** Please, remember to restore your settings in config.xml **"
    mv ${INSTALL_DIR} ${TMP_SPC_GW_DIR}
    echo "-----------------------------------------------------------------------------"
fi
exec 2>/dev/null
while true
do
   echo -n "Run spc-web-gateway as user? (root is not allowed): "
   read USER < /dev/tty
   USERID=$(id -u $USER)
   if [ $? -eq 1 ]
   then
      echo "  No such user "
   else 
      if [ $USERID -eq 0 ]
      then
         echo "  User root not allowed "
      else
         break
      fi
   fi
done
exec 2>/dev/stderr 

echo "-----------------------------------------------------------------------------"
echo " Installing SPC Web Gateway files"
install -m 755 -p -d ${INSTALL_DIR}
install -m 755 -p spc-web-gateway ${INSTALL_DIR}
install -m 644 -p config.xml ${INSTALL_DIR}
install -m 644 -p SPC_WEB_GATEWAY_EULA.txt ${INSTALL_DIR}
install -m 644 -p VERSION ${INSTALL_DIR}

install -m 755 -p -d ${INSTALL_DIR}/auth
install -m 644 -p auth/edp_key ${INSTALL_DIR}/auth
install -m 644 -p auth/passwd_get ${INSTALL_DIR}/auth
install -m 644 -p auth/passwd_put ${INSTALL_DIR}/auth
install -m 644 -p auth/passwd_ws ${INSTALL_DIR}/auth
install -m 644 -p auth/ssl_certificate.pem ${INSTALL_DIR}/auth
install -m 644 -p auth/license ${INSTALL_DIR}/auth

install -m 755 -p -d ${INSTALL_DIR}/www
install -m 644 -p www/index.html ${INSTALL_DIR}/www

# Create SPC Web Gateway startup script
echo "-----------------------------------------------------------------------------"
echo " Creating SPC Web Gateway startup script"
INIT_SCRIPT=/etc/init.d/spc-web-gateway
echo -n '#! /bin/sh
### BEGIN INIT INFO
# Provides:		  spc-web-gateway
# Required-Start:	
# Required-Stop:	 
# Default-Start:	 2 3 4 5
# Default-Stop:	  0 1 6
# Short-Description: Lundix IT SPC Web Gateway
# Description:	   Start SPC Web Gateway to allow JSON- and Websockets requests to Siemens SPC panel.
### END INIT INFO

# Description: Lundix IT SPC Web Gateway
# Author: Goran Lundquist <goran.lundquist@lundix.se>

PATH=/bin:/usr/bin:/sbin:/usr/sbin:/opt/spc-web-gateway
NAME=spc-web-gateway
DAEMON_PATH=/opt/spc-web-gateway
PIDFILE=/var/run/$NAME.pid
LOGFILE=/var/log/$NAME.log
RUN_AS=' > $INIT_SCRIPT

echo $USER >> $INIT_SCRIPT
echo >> $INIT_SCRIPT

echo 'case "$1" in
  start)
	echo -n "Starting SPC Web Gateway: "
	start-stop-daemon --start  --pidfile $PIDFILE --make-pidfile  --background --chdir $DAEMON_PATH --exec $NAME -c $RUN_AS > $LOGFILE 2>&1
	echo "done."
	;;
  stop)
	echo -n "Stopping SPC Web Gateway: "
	start-stop-daemon --stop --quiet --pidfile $PIDFILE -c $RUN_AS
	rm $PIDFILE
	echo "done."
	;;
  restart)
	echo "Restarting SPC Web Gateway: "
	sh $0 stop
	sleep 1
	sh $0 start
	;;
  *)
	echo "Usage: /etc/init.d/spc-web-gateway {start|stop|restart}"
	exit 1
	;;
esac
exit 0' >> $INIT_SCRIPT
chmod +x $INIT_SCRIPT

# Add to autostart
echo "  Adding to autostart"
update-rc.d spc-web-gateway defaults

echo "-----------------------------------------------------------------------------"
echo " Thank you for using Lundix IT SPC Web Gateway!"
echo "-----------------------------------------------------------------------------"
