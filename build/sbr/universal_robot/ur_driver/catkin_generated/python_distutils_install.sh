#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
    DESTDIR_ARG="--root=$DESTDIR"
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/chengda/sbr_workspace/src/sbr/universal_robot/ur_driver"

# snsure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/chengda/sbr_workspace/install/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/chengda/sbr_workspace/install/lib/python2.7/dist-packages:/home/chengda/sbr_workspace/build/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/chengda/sbr_workspace/build" \
    "/usr/bin/python" \
    "/home/chengda/sbr_workspace/src/sbr/universal_robot/ur_driver/setup.py" \
    build --build-base "/home/chengda/sbr_workspace/build/sbr/universal_robot/ur_driver" \
    install \
    $DESTDIR_ARG \
    --install-layout=deb --prefix="/home/chengda/sbr_workspace/install" --install-scripts="/home/chengda/sbr_workspace/install/bin"
