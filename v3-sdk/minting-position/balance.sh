export ALICE=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
export USDT=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9
export USDC=0xaf88d065e77c8cC2239327C5EDb3A432268e5831
export WETH=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1
export BINANCE=0xB38e8c17e38363aF6EbdCb3dAE12e0243582891D
export USDT_HOLDER=0xF977814e90dA44bFA03b6295A0616a897441aceC
export BOB=0x70997970C51812dc3A010C7d01b50e0d17dc79C8
export TEST_ACC=0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC

cast rpc anvil_impersonateAccount $BINANCE
cast rpc anvil_impersonateAccount $ALICE
cast rpc anvil_impersonateAccount $BOB
cast rpc anvil_impersonateAccount $TEST_ACC

# cast call $USDC 'balanceOf(address)(uint256)' $BINANCE
# cast call $USDT 'balanceOf(address)(uint256)' $BINANCE
# cast call $WETH 'balanceOf(address)(uint256)' $BINANCE



cast send $USDT \
--from $BINANCE \
  "transfer(address,uint256)(bool)" --unlocked \
  $ALICE 1000000000

cast send $USDT \
--from $BINANCE \
  "transfer(address,uint256)(bool)" --unlocked \
  $TEST_ACC 7000000000000

cast send $WETH \
--from $BINANCE \
  "transfer(address,uint256)(bool)" --unlocked \
  $TEST_ACC 7000000000

  cast send $USDC \
--from $BINANCE \
  "transfer(address,uint256)(bool)" --unlocked \
  $TEST_ACC 3000000000000

cast send $USDT \
--from $BINANCE \
  "transfer(address,uint256)(bool)" --unlocked \
  $BOB 300000000000000



# cast call $USDC 'balanceOf(address)(uint256)' $ALICE
cast call $USDT 'balanceOf(address)(uint256)' $TEST_ACC
# cast call $WETH 'balanceOf(address)(uint256)' $ALICE
