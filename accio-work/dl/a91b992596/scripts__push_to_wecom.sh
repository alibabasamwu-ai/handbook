#!/bin/bash
# 企微推送脚本

WEBHOOK_URL=$1
IMAGE_PATH=$2
SUMMARY_TEXT=$3

# 1. 发送文字摘要
curl "$WEBHOOK_URL" \
   -H 'Content-Type: application/json' \
   -d "{
        \"msgtype\": \"markdown\",
        \"markdown\": {
            \"content\": \"$SUMMARY_TEXT\"
        }
   }"

# 2. 发送报告长图
if [ -f "$IMAGE_PATH" ]; then
    BASE64_CONTENT=$(base64 -i "$IMAGE_PATH")
    MD5_VALUE=$(md5 -q "$IMAGE_PATH")

    curl "$WEBHOOK_URL" \
       -H 'Content-Type: application/json' \
       -d "{
            \"msgtype\": \"image\",
            \"image\": {
                \"base64\": \"$BASE64_CONTENT\",
                \"md5\": \"$MD5_VALUE\"
            }
       }"
fi
