require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/_FdayQbps8orpBqFss7PTVPyXnYPlQGd',
      accounts: [
        'eb9638b20b35a36489d5727a77ea67da08c216f9b611245cbb2533eaf65f0048',
      ],
    },
  },
}