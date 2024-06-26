#!/usr/bin/python3
import sys
import logging
from urllib.request import Request, urlopen
from urllib.parse import urlparse

log = logging.getLogger("http")

devicenumber = int(sys.argv[1])
uberschuss = int(sys.argv[3])
url = str(sys.argv[4])
if not urlparse(url).scheme:
    url = 'http://' + url
log.info('on devicenr %d url %s' % (devicenumber, url))
headers = {'User-Agent': 'Mozilla/5.0'}
request = Request(url, headers=headers)
urlopen(request, timeout=5).read()
