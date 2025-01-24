fuser -k -TERM -n tcp 8545
kill -9 `lsof -t -i:8545`
{
  (./anvill.sh  >&3 3>&-; echo "$?") |
    if read -t 3 status; then
      echo "Cool it completed with status $status, do stuff..."
    else
      echo "It didn't complete, do something else..."
      sleep 2
      ./balance.sh
      echo "COMPLETED"
    fi
} 3>&1

