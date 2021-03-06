/******************************************************************************
 * Copyright © 2016 The Waves Developers.                                *
 *                                                                            *
 * See the LICENSE files at                                                   *
 * the top-level directory of this distribution for the individual copyright  *
 * holder information and the developer policies on copyright and licensing.  *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * Waves software, including this file, may be copied, modified, propagated,  *
 * or distributed except according to the terms contained in the LICENSE      *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

/**
 * @requires {decimal.js}
 */

var Currency = (function () {
    var currencyCache = {};

    function Currency(data) {
        data = data || {};

        this.id = data.id; // base58 encoded asset id of the currency
        this.displayName = data.displayName;
        this.shortName = data.shortName || data.displayName;
        this.precision = data.precision; // number of decimal places after a decimal point
        this.verified = data.verified || false;

        if (data.roundingMode !== undefined) {
            this.roundingMode = data.roundingMode;
        } else {
            this.roundingMode = Decimal.ROUND_HALF_UP;
        }

        return this;
    }

    Currency.prototype.toString = function () {
        if (this.shortName)
            return this.shortName;

        return this.displayName;
    };

    var WAVES = new Currency({
        id: '',
        displayName: 'Waves',
        shortName: 'WAVES',
        precision: 8,
        verified: true
    });

    var BTC = new Currency({
        id: '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS',
        displayName: 'Bitcoin',
        shortName: 'BTC',
        precision: 8,
        verified: true
    });

    var BCC = new Currency({
        id: 'zMFqXuoyrn5w17PFurTqxB7GsS71fp9dfk6XFwxbPCy',
        displayName: 'Bitcoin Cash',
        shortName: 'BCC',
        precision: 8,
        verified: true
    });

    var ETH = new Currency({
        id: '474jTeYx2r2Va35794tCScAXWJG9hU2HcgxzMowaZUnu',
        displayName: 'Ethereum',
        shortName: 'ETH',
        precision: 8,
        verified: true
    });

    var USD = new Currency({
        id: 'Ft8X1v1LTa1ABafufpaCWyVj8KkaxUWE6xBhW6sNFJck',
        displayName: 'US Dollar',
        shortName: 'USD',
        precision: 2,
        verified: true
    });

    var EUR = new Currency({
        id: 'Gtb1WRznfchDnTh37ezoDTJ4wcoKaRsKqKjJjy7nm2zU',
        displayName: 'Euro',
        shortName: 'EUR',
        precision: 2,
        verified: true
    });

    var CNY = new Currency({
        id: 'DEJbZipbKQjwEiRjx2AqQFucrj5CZ3rAc4ZvFM8nAsoA',
        displayName: 'Chinese Yuan',
        shortName: 'CNY',
        precision: 2,
        verified: true
    });

    var WCT = new Currency({
        id: 'DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J',
        displayName: 'Waves Community',
        shortName: 'WCT',
        precision: 2,
        verified: true
    });

    var MRT = new Currency({
        id: '4uK8i4ThRGbehENwa6MxyLtxAjAo1Rj9fduborGExarC',
        displayName: 'Miner Reward',
        shortName: 'MRT',
        precision: 2,
        verified: true
    });

    var WGO = new Currency({
        id: '4eT6R8R2XuTcBuTHiXVQsh2dN2mg3c2Qnp95EWBNHygg',
        displayName: 'WavesGo',
        shortName: 'WGO',
        precision: 8,
        verified: true
    });

    var INCNT = new Currency({
        id: 'FLbGXzrpqkvucZqsHDcNxePTkh2ChmEi4GdBfDRRJVof',
        displayName: 'Incent',
        shortName: 'INCNT',
        precision: 8,
        verified: true
    });

    var RBX = new Currency({
        id: 'AnERqFRffNVrCbviXbDEdzrU6ipXCP5Y1PKpFdRnyQAy',
        displayName: 'Ripto Bux',
        shortName: 'RBX',
        precision: 8,
        verified: true
    });

    var MER = new Currency({
        id: 'HzfaJp8YQWLvQG4FkUxq2Q7iYWMYQ2k8UF89vVJAjWPj',
        displayName: 'Mercury',
        shortName: 'MER',
        precision: 8,
        verified: true
    });

    var BAt = new Currency({
        id: 'APz41KyoKuBBh8t3oZjqvhbbsg6f63tpZM5Ck5LYx6h',
        displayName: 'B@nkcoin',
        shortName: 'B@',
        precision: 8,
        verified: true
    });

    var UPC = new Currency({
        id: '4764Pr9DpKQAHAjAVA2uqnrYidLMnM7vpDDLCDWujFTt',
        displayName: 'Upcoin',
        shortName: 'UPC',
        precision: 2,
        verified: true
    });

    var KLN = new Currency({
        id: 'EYz8Zvs62D4d7F5ZgXHCWuzuFaZg63FYnfVQrTWQoLSK',
        displayName: 'Kolion',
        shortName: 'KLN',
        precision: 4,
        verified: true
    });

    var TKS = new Currency({
        id: 'BDMRyZsmDZpgKhdM7fUTknKcUbVVkDpMcqEj31PUzjMy',
        displayName: 'Tokes',
        shortName: 'TKS',
        precision: 8,
        verified: true
    });

    var WPN = new Currency({
        id: 'BkFyeRdrLquxds5FenxyonyfTwMVJJ6o6L7VTaPr5fs3',
        displayName: 'WavesPool.NET',
        shortName: 'WPN',
        precision: 8,
        verified: true
    });

    var EFYT = new Currency({
        id: '725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46',
        displayName: 'Ergo First Year Token',
        shortName: 'EFYT',
        precision: 8,
        verified: true
    });

    var MGO = new Currency({
        id: '2Y8eFFXDTkxgCvXbMT5K4J38cpDYYbQdciJEZb48vTDj',
        displayName: 'Mobile Go Token',
        shortName: 'MGO',
        precision: 8,
        verified: true
    });

    var ETT = new Currency({
        id: '8ofu3VpEaVCFjRqLLqzTMNs5URKUUQMrPp3k6oFmiCc6',
        displayName: 'EncryptoTel',
        shortName: 'ETT',
        precision: 8,
        verified: true
    });

    var ZRC = new Currency({
        id: '5ZPuAVxAwYvptbCgSVKdTzeud9dhbZ7vvxHVnZUoxf4h',
        displayName: 'ZrCoin',
        shortName: 'ZRC',
        precision: 8,
        verified: true
    });

    var PBKX = new Currency({
        id: '39wcSXj4MdRNRJXA88rVxF7EXWjYixaA3J3EteoN6DMM',
        displayName: 'privateBANKX',
        shortName: 'PBKX',
        precision: 0,
        verified: true
    });

    var PING = new Currency({
        id: 'Bi4w2UuGRt2jAJFfRb8b3SwDUV5x8krCzX2zZHcRfPNc',
        displayName: 'CryptoPing',
        shortName: 'PING',
        precision: 8,
        verified: true
    });

    var STAR = new Currency({
        id: 'BTfuGGoeA934Ta1fgcehQ5UhbHuWKj4don64ZNBuMT38',
        displayName: 'Starrie',
        shortName: 'STAR',
        precision: 8,
        verified: true
    });

    var BEAR = new Currency({
        id: '9gnc5UCY6RxtSi9FEJkcD57r5NBgdr45DVYtunyDLrgC',
        displayName: 'BearWaves',
        shortName: 'BEAR',
        precision: 2,
        verified: true
    });

    var DAR = new Currency({
        id: 'K5JcgN8UdwNdh5sbdAuPMm5XEd5aFvoXaC3iHsHVz1d',
        displayName: 'Darcrus',
        shortName: 'DAR',
        precision: 6,
        verified: true
    });

    var GLIPP = new Currency({
        id: '9g5JiYThxFTxknSMA3TT5xoXG7GYjRrTJxxLeeoQ36kJ',
        displayName: 'GLIPP',
        shortName: 'GLIPP',
        precision: 8,
        verified: true
    });

    var TNT = new Currency({
        id: '6284oD9Aky3gZwwwqCFEZzvyx5qeeswAbYEtCHcMyKUR',
        displayName: 'TrackNetToken',
        shortName: 'TNT',
        precision: 4,
        verified: true
    });

    var BKT = new Currency({
        id: '9c7U7bXdP23oHpmGKwGfSsjFrpxdRcp3tp28qbfhEc3d',
        displayName: '$bkt',
        shortName: 'BKT',
        precision: 0,
        verified: true
    });

    var WGR = new Currency({
        id: '8t8DMJFQu5GEhvAetiA8aHa3yPjxLj54sBnZsjnJ5dsw',
        displayName: 'Wagerr',
        shortName: 'WGR',
        precision: 8,
        verified: true
    });

    var PBT = new Currency({
        id: 'EdDvbhk4wJ1kL6pMCq1V36GbQE2nGE7Metb87zbaY2JL',
        displayName: 'Primalbase Token',
        shortName: 'PBT',
        precision: 4,
        verified: true
    });

    var PPIO = new Currency({
        id: '8UHSg6jCDTUvKT3LmeDjoaPxKmnJhdLEgBHU3vUrojSm',
        displayName: 'pospool_io',
        shortName: 'PPIO',
        precision: 2,
        verified: true
    });

    var STA = new Currency({
        id: '3SdrmU1GGZRiZz12MrMcfUz4JksTzvcU25cLFXpZy1qz',
        displayName: 'Starta',
        shortName: 'STA',
        precision: 2,
        verified: true
    });

    var CORE = new Currency({
        id: '3MyMJ9pXLTDnMQhNgoDUBtcfmaGVgnaZNARZwcZzMFk7',
        displayName: 'CORE',
        shortName: 'CORE',
        precision: 8,
        verified: true
    });

    var KSS = new Currency({
        id: 'Dq6ku3HyiMfKvorz2PLRAPwa9ykF78V1uiBhXtMbL2f2',
        displayName: 'Krosscoin',
        shortName: 'KSS',
        precision: 3,
        verified: true
    });

    var WFN = new Currency({
        id: '7yXJqP2zpXTiXuS2o25seUHYxdDnfSPZJ3SEm5DrQ7cx',
        displayName: 'WavesFullNode',
        shortName: 'WFN',
        precision: 8,
        verified: true
    });

    var GRPH = new Currency({
        id: '13QuhSAkAueic5ncc8YRwyNxGQ6tRwVSS44a7uFgWsnk',
        displayName: 'Graph',
        shortName: 'GRPH',
        precision: 8,
        verified: true
    });

    var ESC = new Currency({
        id: 'FoKiAEqHSit88f4iu1neKkzsanYHQqLRyR4DXucRGKbW',
        displayName: 'EstateCoin',
        shortName: 'ESC',
        precision: 2,
        verified: true
    });

    var AGRO = new Currency({
        id: 'J8mgyjKQb4M7DjEKvewBSvKZULMZMDpUtua9VtByLbVD',
        displayName: 'Agro token',
        shortName: 'AGRO',
        precision: 8,
        verified: true
    });

    var KING = new Currency({
        id: 'CHUTTYkDd9qFmQthCL7eHTDHwYudfthqwYCYsdvpCZbf',
        displayName: 'King93',
        shortName: 'KING',
        precision: 8,
        verified: true
    });

    var ARNA = new Currency({
        id: 'BsDmB74Y1PvtVrE741i5CJThChQHHF96hDL5nXwv7JdS',
        displayName: 'Arena',
        shortName: 'ARNA',
        precision: 8,
        verified: true
    });

    var WNET = new Currency({
        id: '984mPD35vrA5Pfcuadqg8BUFNFjcUDpU3iadUWVt9t28',
        displayName: 'Wavesnode.NET',
        shortName: 'WNET',
        precision: 0,
        verified: true
    });

    var PBK = new Currency({
        id: '3eBcKvyMavxACq54yvXk1rCAP4E475NCwGKV6AmQQNaw',
        displayName: 'PeerBanks',
        shortName: 'PBK',
        precision: 8,
        verified: true
    });

    var TOM = new Currency({
        id: '3e7aYkysNohFDonLVaUFGgZ46mV3Y3r7Rqzi95GYGxeK',
        displayName: 'Tomahawkcoin',
        shortName: 'TOM',
        precision: 0,
        verified: true
    });

    var ViC = new Currency({
        id: 'Gh8Ed6n1y9wscFHT6s4EH6uhKajvNQ88oPkkFkYkgXyX',
        displayName: 'WaVialcoin',
        shortName: 'ViC',
        precision: 8,
        verified: true
    });

    var EQ = new Currency({
        id: 'DoL6wC5a72Fuxg7FtfUMWbJB9kjRuvQ3BQKrgjym3gh6',
        displayName: 'EQUI Token',
        shortName: 'EQ',
        precision: 8,
        verified: true
    });

    var SHDW = new Currency({
        id: 'ETLzrCpBqTrpyuMGdiVLBPZnUoKwte88oVdJjoFi5R2h',
        displayName: 'ShadowToken',
        shortName: 'SHDW',
        precision: 8,
        verified: true
    });

    var GIN = new Currency({
        id: '9x9ATvB61fE5TU1zRdZvyvA5Q8ZYEs2yRmzTBAs69R9N',
        displayName: 'GingerDrink.EU',
        shortName: 'GIN',
        precision: 2,
        verified: true
    });

    var NEWS = new Currency({
        id: '2EAUTcAsFMsndSgiGacKRvygFR1e6gdSd8bEpiemsTPE',
        displayName: 'NEWSTOKEN',
        shortName: 'NEWS',
        precision: 8,
        verified: true
    });

    var COXST = new Currency({
        id: '7tZxVdAWc8QvsMrXBoicMgU2bSJsaEpFJnPYn1H31B8B',
        displayName: 'CoExistCoin',
        shortName: 'COXST',
        precision: 8,
        verified: true
    });

    var SMR = new Currency({
        id: 'EbY2Uf9ukD4ndg5J7MA7CjhB7xbAsiViTmVSemb186V8',
        displayName: 'Summer',
        shortName: 'SMR',
        precision: 8,
        verified: true
    });

    var RDT = new Currency({
        id: 'Fw2Sg8x4VZyxU5ManJTo69JCKg9Rox7xDNKxdQdxXDWk',
        displayName: 'Ryder Token',
        shortName: 'RDT',
        precision: 2,
        verified: true
    });

    var IRA = new Currency({
        id: '3eBcKvyMavxACq54yvXk1rCAP4E475NCwGKV6AmQQNaw',
        displayName: 'PeerBanks',
        shortName: 'IRA',
        precision: 8,
        verified: true
    });

    var _2B4T = new Currency({
        id: '2LU8GwJFvVebrCvgDhMTLDzm3dHxuN1x7ks8dQRiSj9N',
        displayName: '2B4T',
        shortName: '2B4T',
        precision: 2,
        verified: true
    });

    var MBX = new Currency({
        id: '2CX6EFHYmXYyop4hD7dUywST5K51Hvi2m5brFo35C6EZ',
        displayName: 'MyBitX',
        shortName: 'MBX',
        precision: 2,
        verified: true
    });

    var KNOWS = new Currency({
        id: 'CqSHx4WhszTZhabfWD8UuX8efg5hbZTPRNtnwW1ojJxe',
        displayName: 'KNOWS',
        shortName: 'KNOWS',
        precision: 8,
        verified: true
    });

    var MBI = new Currency({
        id: 'CJpRwfpBcFyA6p3g1fb7xuiArSQ7xLkNH8SD9AB4HeD9',
        displayName: 'MonsterByte',
        shortName: 'MBI',
        precision: 2,
        verified: true
    });

    var COF = new Currency({
        id: 'AcrRM9STdBu5PNiFveTCbRFTS8tADhKcsbC2KBp8A4tx',
        displayName: 'CoffeeCoin',
        shortName: 'COF',
        precision: 3,
        verified: true
    });

    var CHILL = new Currency({
        id: 'DsxRbfYXzwf4PFwUD6kyEJhj2Wd5E9NsHr5WynVKTzie',
        displayName: 'Chill',
        shortName: 'CHILL',
        precision: 8,
        verified: true
    });

    var KUN = new Currency({
        id: 'F6EK5bcdEShWPA9pGdgqGYmPPUZ9FaHnyVwPZfXCTxV7',
        displayName: 'KUNA',
        shortName: 'KUN',
        precision: 0,
        verified: true
    });

    var CEIT = new Currency({
        id: '83Y1Ub3Kp9uitTTgKGPnaZE6EC793XuC3muoJC8zsFir',
        displayName: 'CorpEdu',
        shortName: 'CEIT',
        precision: 4,
        verified: true
    });

    var SGIT = new Currency({
        id: 'BYkKnXLUS3qRyNvbSTvNWJ3pTsW7uZGHhV4HQ3pdf6DW',
        displayName: 'SmartGames',
        shortName: 'SGIT',
        precision: 4,
        verified: true
    });

    var AHT = new Currency({
        id: 'HfFHZaPzGMSdHvaaZ7S8mrZrPWEyGzfA6VDuSRzb8uY6',
        displayName: 'Bowhead',
        shortName: 'AHT',
        precision: 8,
        verified: true
    });

    var HALAL = new Currency({
        id: 'BjAZxDeFpYaQ1gwmg65vYArhve31k8j9mscQDecNZ2bX',
        displayName: 'HALAL',
        shortName: 'HALAL',
        precision: 7,
        verified: true
    });

    var DIMO = new Currency({
        id: 'BEth3AJY65jWWF7KCDSFgMS6g5AvDvoAWrn8UYEsoA17',
        displayName: 'DIMO',
        shortName: 'DIMO',
        precision: 8,
        verified: true
    });

    var WIN = new Currency({
        id: '7Ry7rUTSS1iCJBFa7trCbwzAwnvvAUrX3gcz2iTL8aAF',
        displayName: 'WinToken',
        shortName: 'WIN',
        precision: 2,
        verified: true
    });

    var YTB = new Currency({
        id: 'HhzJGgbbogGQubKkHUyEaHKs7fBRebjoJkgiDQ8jrYee',
        displayName: 'YouTubeCoin',
        shortName: 'YTB',
        precision: 0,
        verified: true
    });

    var GFL = new Currency({
        id: 'D6hYNYUSxsLtvkUJ4Mxp6s7mT4WACbwJSsVGCQKxkSfH',
        displayName: 'GoldenFleece',
        shortName: 'GFL',
        precision: 8,
        verified: true
    });

    var DAT = new Currency({
        id: 'DBLes8Bxb1P4qL1XaRRPL4d4xTVZSWHKP4oKGyFZjwBe',
        displayName: 'DATALIFE',
        shortName: 'DAT',
        precision: 6,
        verified: true
    });

    var VK = new Currency({
        id: '5WLqNPkA3oDp1hTFCeUukTL1qvFnk9Ew7DXTtCzvoCxi',
        displayName: 'VKCoin',
        shortName: 'VK',
        precision: 0,
        verified: true
    });

    var UWT = new Currency({
        id: 'AdEVVde2XTDa1qDPWfChUGH2XP67duQ4NnpQWXs7wETF',
        displayName: 'Useless Token',
        shortName: 'UWT',
        precision: 0,
        verified: true
    });

    var AP_0 = new Currency({
        id: 'BYMmfwocym3d3cuFc9XytbAWGCdAM9875n5fTFokGTMm',
        displayName: 'AP-glasscoin#0',
        shortName: 'AP#0',
        precision: 0,
        verified: true
    });

    var AP_1 = new Currency({
        id: 'FgPzwZqGngVG45d6WtP5273diR8cHRjs95aT6g1tuFUv',
        displayName: 'AP-glasscoin#1',
        shortName: 'AP#1',
        precision: 0,
        verified: true
    });

    var AP_2 = new Currency({
        id: '6qLNnEV34cE8CZi5hk3nTNiUeHZcKz35R7AafPSukSAt',
        displayName: 'AP-glasscoin#2',
        shortName: 'AP#2',
        precision: 0,
        verified: true
    });

    var OCL = new Currency({
        id: 'ABFYQjwDHSct6rNk59k3snoZfAqNHVZdHz4VGJe2oCV5',
        displayName: '$OCL Oceanlab',
        shortName: 'OCL',
        precision: 8,
        verified: true
    });

    var OCC = new Currency({
        id: 'CL9PN5rpMm3ed2x6g9SWDQJfHciZFwXee2hhehmitzRj',
        displayName: 'OurCoin Classic',
        shortName: 'OCC',
        precision: 2,
        verified: true
    });

    var SMART = new Currency({
        id: '4xDfFdPorzNmB5w8p28Fs5z6fPMf4QKJGcxY3DWT9ugG',
        displayName: 'SMART',
        shortName: 'SMART',
        precision: 8,
        verified: true
    });

    var DCN = new Currency({
        id: 'DnAGJqeraWszYBfRjjbxtZDb1vggjUDZjWo49i15hGo1',
        displayName: 'Duocoin',
        shortName: 'DCN',
        precision: 2,
        verified: true
    });

    var RSC = new Currency({
        id: 'EMdiF8uaySswfCdMxc114rSfzUsAKCtK9d8eSx6ruKP4',
        displayName: 'RusCoin',
        shortName: 'RSC',
        precision: 5,
        verified: true
    });

    var LIKE = new Currency({
        id: '71tUQ7miLb2vNViGYCarYvdNj2BnDyxuFMCQivViqZq6',
        displayName: 'like',
        shortName: 'LIKE',
        precision: 8,
        verified: true
    });

    var FUPOOF = new Currency({
        id: 'EAmQHCqBVeNunvYRC5bFQh6mtvF34bL9qAwug5PGvjjE',
        displayName: 'Fupoof Coin',
        shortName: 'FUPOOF',
        precision: 3,
        verified: true
    });

    var ANY = new Currency({
        id: '2L9piWsMG4dZ84WgybXa9SPYFhyBEiP5fcv1BmJ9Gy7X',
        displayName: 'anyco',
        shortName: 'ANY',
        precision: 8,
        verified: true
    });

    var BRW = new Currency({
        id: '3EAHaZPwV5gCoWkoLhjj7rSz9ix7Q4SE6mFczoxA3f9D',
        displayName: 'BrWaves',
        shortName: 'BRW',
        precision: 3,
        verified: true
    });

    var CNX = new Currency({
        id: 'CSX1Ynv6AXmJmfnG1hBczrL9tN5HWrjVx5Ur3WJeuErv',
        displayName: 'Cryptonetix',
        shortName: 'CNX',
        precision: 8,
        verified: true
    });

    var DARF = new Currency({
        id: '96NFBPoikAeacesZggFa6wBXAyczgZFyupbX5rJwFfdQ',
        displayName: 'DARF',
        shortName: 'DARF',
        precision: 8,
        verified: true
    });

    var WNT = new Currency({
        id: 'EqdXBgKgKqdpD3kGT4tS9VgLifZXS3ASihwM3hnprNdU',
        displayName: 'WavesNotify',
        shortName: 'WNT',
        precision: 0,
        verified: true
    });

    var CWV = new Currency({
        id: 'HxxSmVuX4HbHDiDSGg96nx7wgCBhB9UPHh6pxgnKXjv4',
        displayName: 'Cryptowave',
        shortName: 'CWV',
        precision: 3,
        verified: true
    });

    var WCASH = new Currency({
        id: '2sikuhpBdZV2x5gHoA7adCStxuTSJ8m6r4hSRDLKz2zN',
        displayName: 'WCASH',
        shortName: 'WCASH',
        precision: 8,
        verified: true
    });

    var LIFE = new Currency({
        id: '5qtfgMsSAQsYMC947aYZcej1qMVQvMfRgLc3mexMXWE1',
        displayName: 'LIFE',
        shortName: 'LIFE',
        precision: 8,
        verified: true
    });

    var RDCR = new Currency({
        id: 'EXKrrWnMYnZrPYbrygnwzKKx5jjaEqALEgQhtoCcBdKG',
        displayName: 'RDCR',
        shortName: 'RDCR',
        precision: 8,
        verified: true
    });

    function invalidateCache() {
        currencyCache = {};

        currencyCache[WAVES.id] = WAVES;
        currencyCache[BTC.id] = BTC;
        currencyCache[BCC.id] = BCC;
        currencyCache[ETH.id] = ETH;
        currencyCache[USD.id] = USD;
        currencyCache[EUR.id] = EUR;
        currencyCache[CNY.id] = CNY;
        currencyCache[WCT.id] = WCT;
        currencyCache[MRT.id] = MRT;
        currencyCache[WGO.id] = WGO;
        currencyCache[INCNT.id] = INCNT;
        currencyCache[RBX.id] = RBX;
        currencyCache[MER.id] = MER;
        currencyCache[BAt.id] = BAt;
        currencyCache[UPC.id] = UPC;
        currencyCache[KLN.id] = KLN;
        currencyCache[TKS.id] = TKS;
        currencyCache[WPN.id] = WPN;
        currencyCache[EFYT.id] = EFYT;
        currencyCache[MGO.id] = MGO;
        currencyCache[ETT.id] = ETT;
        currencyCache[ZRC.id] = ZRC;
        currencyCache[PBKX.id] = PBKX;
        currencyCache[PING.id] = PING;
        currencyCache[STAR.id] = STAR;
        currencyCache[BEAR.id] = BEAR;
        currencyCache[DAR.id] = DAR;
        currencyCache[GLIPP.id] = GLIPP;
        currencyCache[TNT.id] = TNT;
        currencyCache[BKT.id] = BKT;
        currencyCache[WGR.id] = WGR;
        currencyCache[PBT.id] = PBT;
        currencyCache[PPIO.id] = PPIO;
        currencyCache[STA.id] = STA;
        currencyCache[CORE.id] = CORE;
        currencyCache[KSS.id] = KSS;
        currencyCache[WFN.id] = WFN;
        currencyCache[GRPH.id] = GRPH;
        currencyCache[ESC.id] = ESC;
        currencyCache[AGRO.id] = AGRO;
        currencyCache[KING.id] = KING;
        currencyCache[ARNA.id] = ARNA;
        currencyCache[WNET.id] = WNET;
        currencyCache[PBK.id] = PBK;
        currencyCache[TOM.id] = TOM;
        currencyCache[ViC.id] = ViC;
        currencyCache[EQ.id] = EQ;
        currencyCache[SHDW.id] = SHDW;
        currencyCache[GIN.id] = GIN;
        currencyCache[NEWS.id] = NEWS;
        currencyCache[COXST.id] = COXST;
        currencyCache[SMR.id] = SMR;
        currencyCache[RDT.id] = RDT;
        currencyCache[IRA.id] = IRA;
        currencyCache[_2B4T.id] = _2B4T;
        currencyCache[MBX.id] = MBX;
        currencyCache[KNOWS.id] = KNOWS;
        currencyCache[MBI.id] = MBI;
        currencyCache[COF.id] = COF;
        currencyCache[CHILL.id] = CHILL;
        currencyCache[KUN.id] = KUN;
        currencyCache[CEIT.id] = CEIT;
        currencyCache[SGIT.id] = SGIT;
        currencyCache[AHT.id] = AHT;
        currencyCache[HALAL.id] = HALAL;
        currencyCache[DIMO.id] = DIMO;
        currencyCache[WIN.id] = WIN;
        currencyCache[YTB.id] = YTB;
        currencyCache[GFL.id] = GFL;
        currencyCache[DAT.id] = DAT;
        currencyCache[VK.id] = VK;
        currencyCache[UWT.id] = UWT;
        currencyCache[AP_0.id] = AP_0;
        currencyCache[AP_1.id] = AP_1;
        currencyCache[AP_2.id] = AP_2;
        currencyCache[OCL.id] = OCL;
        currencyCache[OCC.id] = OCC;
        currencyCache[SMART.id] = SMART;
        currencyCache[DCN.id] = DCN;
        currencyCache[RSC.id] = RSC;
        currencyCache[LIKE.id] = LIKE;
        currencyCache[FUPOOF.id] = FUPOOF;
        currencyCache[ANY.id] = ANY;
        currencyCache[BRW.id] = BRW;
        currencyCache[CNX.id] = CNX;
        currencyCache[DARF.id] = DARF;
        currencyCache[WNT.id] = WNT;
        currencyCache[CWV.id] = CWV;
        currencyCache[WCASH.id] = WCASH;
        currencyCache[LIFE.id] = LIFE;
        currencyCache[RDCR.id] = RDCR;
    }

    invalidateCache();

    return {
        create: function (data) {
            // if currency data.id is not set - it's a temporary instance
            if (!_.has(data, 'id')) {
                return new Currency(data);
            }

            if (!currencyCache[data.id]) {
                currencyCache[data.id] = new Currency(data);
            }

            return currencyCache[data.id];
        },
        invalidateCache: invalidateCache,
        WAVES: WAVES,
        BTC: BTC,
        BCC: BCC,
        ETH: ETH,
        USD: USD,
        EUR: EUR,
        CNY: CNY,
        WCT: WCT,
        MRT: MRT,
        WGO: WGO,
        INCNT: INCNT,
        RBX: RBX,
        MER: MER,
        BAt: BAt,
        UPC: UPC,
        KLN: KLN,
        TKS: TKS,
        WPN: WPN,
        EFYT: EFYT,
        MGO: MGO,
        ETT: ETT,
        ZRC: ZRC,
        PBKX: PBKX,
        PING: PING,
        STAR: STAR,
        BEAR: BEAR,
        DAR: DAR,
        GLIPP: GLIPP,
        TNT: TNT,
        BKT: BKT,
        WGR: WGR,
        PBT: PBT,
        PPIO: PPIO,
        STA: STA,
        CORE: CORE,
        KSS: KSS,
        WFN: WFN,
        GRPH: GRPH,
        ESC: ESC,
        AGRO: AGRO,
        KING: KING,
        ARNA: ARNA,
        WNET: WNET,
        PBK: PBK,
        TOM: TOM,
        ViC: ViC,
        EQ: EQ,
        SHDW: SHDW,
        GIN: GIN,
        NEWS: NEWS,
        COXST: COXST,
        SMR: SMR,
        RDT: RDT,
        IRA: IRA,
        _2B4T: _2B4T,
        MBX: MBX,
        KNOWS: KNOWS,
        MBI: MBI,
        COF: COF,
        CHILL: CHILL,
        KUN: KUN,
        CEIT: CEIT,
        SGIT: SGIT,
        AHT: AHT,
        HALAL: HALAL,
        DIMO: DIMO,
        WIN: WIN,
        YTB: YTB,
        GFL: GFL,
        DAT: DAT,
        VK: VK,
        UWT: UWT,
        AP_0: AP_0,
        AP_1: AP_1,
        AP_2: AP_2,
        OCL: OCL,
        OCC: OCC,
        SMART: SMART,
        DCN: DCN,
        RSC: RSC,
        LIKE: LIKE,
        FUPOOF: FUPOOF,
        ANY: ANY,
        BRW: BRW,
        CNX: CNX,
        DARF: DARF,
        WNT: WNT,
        CWV: CWV,
        WCASH: WCASH,
        LIFE: LIFE,
        RDCR: RDCR
    };
})();

var Money = function(amount, currency) {
    var DECIMAL_SEPARATOR = '.';
    var THOUSANDS_SEPARATOR = ',';

    if (amount === undefined)
        throw Error('Amount is required');

    if (currency === undefined)
        throw Error('Currency is required');

    this.amount = new Decimal(amount)
        .toDecimalPlaces(currency.precision, Decimal.ROUND_FLOOR);
    this.currency = currency;

    var integerPart = function (value) {
        return value.trunc();
    };

    var fractionPart = function (value) {
        return value.minus(integerPart(value));
    };

    var format = function (value) {
        return value.toFixed(currency.precision, currency.roundingMode);
    };

    var validateCurrency = function (expected, actual) {
        if (expected.id !== actual.id)
            throw new Error('Currencies must be the same for operands. Expected: ' +
                expected.displayName + '; Actual: ' + actual.displayName);
    };

    var fromTokensToCoins = function (valueInTokens, currencyPrecision) {
        return valueInTokens.mul(Math.pow(10, currencyPrecision)).trunc();
    };

    var fromCoinsToTokens = function (valueInCoins, currencyPrecision) {
        return valueInCoins.trunc().div(Math.pow(10, currencyPrecision));
    };

    // in 2016 Safari doesn't support toLocaleString()
    // that's why we need this method
    var formatWithThousandsSeparator = function (formattedAmount) {
        var parts = formattedAmount.split(DECIMAL_SEPARATOR);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);

        return parts.join(DECIMAL_SEPARATOR);
    };

    this.formatAmount = function (stripZeroes, useThousandsSeparator) {
        var result = stripZeroes ?
            this.toTokens().toFixed(this.amount.decimalPlaces()) :
            format(this.amount);

        return useThousandsSeparator ? formatWithThousandsSeparator(result) : result;
    };

    this.formatIntegerPart = function () {
        return integerPart(this.amount).toFixed(0);
    };

    this.formatFractionPart = function () {
        var valueWithLeadingZero = format(fractionPart(this.amount));

        return valueWithLeadingZero.slice(1); // stripping the leading zero
    };

    this.toTokens = function () {
        var result = fromCoinsToTokens(fromTokensToCoins(this.amount, this.currency.precision),
            this.currency.precision);

        return result.toNumber();
    };

    this.toCoins = function () {
        return fromTokensToCoins(this.amount, this.currency.precision).toNumber();
    };

    this.plus = function (money) {
        validateCurrency(this.currency, money.currency);

        return new Money(this.amount.plus(money.amount), this.currency);
    };

    this.minus = function (money) {
        validateCurrency(this.currency, money.currency);

        return new Money(this.amount.minus(money.amount), this.currency);
    };

    this.greaterThan = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.greaterThan(other.amount);
    };

    this.greaterThanOrEqualTo = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.greaterThanOrEqualTo(other.amount);
    };

    this.lessThan = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.lessThan(other.amount);
    };

    this.lessThanOrEqualTo = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.lessThanOrEqualTo(other.amount);
    };

    this.multiply = function (multiplier) {
        if (!_.isNumber(multiplier))
            throw new Error('Number is expected');

        if (isNaN(multiplier))
            throw new Error('Multiplication by NaN is not supported');

        return new Money(this.amount.mul(multiplier), this.currency);
    };

    this.toString = function () {
        return this.formatAmount(false, true) + ' ' + this.currency.toString();
    };

    return this;
};

Money.fromTokens = function (amount, currency) {
    return new Money(amount, currency);
};

Money.fromCoins = function (amount, currency) {
    currency = currency || {};
    if (currency.precision === undefined)
        throw new Error('A valid currency must be provided');

    amount = new Decimal(amount);
    amount = amount.div(Math.pow(10, currency.precision));

    return new Money(amount, currency);
};

// set up decimal to format 0.00000001 as is instead of 1e-8
Decimal.config({toExpNeg: -(Currency.WAVES.precision + 1)});

