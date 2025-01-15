import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './Custom.css';
import Spinner from './Spinner';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Jon Brodkin, Ars Technica",
            "title": "Judge Ends One Man's 11-Year Quest to Recover $765 Million in Bitcoin by Digging Up a Landfill",
            "description": "A UK judge ruled against James Howells, who has been trying to get a hard drive with private keys to a cryptocurrency fortune out of a landfill for over a decade.",
            "url": "https://www.wired.com/story/bitcoin-landfill-excavation-james-howells-judge-ruling/",
            "urlToImage": "https://media.wired.com/photos/67856ba0607aba6f3b093b82/191:100/w_1280,c_limit/ARS-Crypto-Landfill-Business-1386293068.jpg",
            "publishedAt": "2025-01-13T20:25:06Z",
            "content": "A British judge ruled against a man who wants to excavate a landfill where he says a hard drive with access to thousands of bitcoins was mistakenly dumped over 11 years ago.\r\nSince 2013, James Howell… [+3646 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "El Salvador Strikes $1.4 Billion IMF Deal After Scaling Back Bitcoin Policies",
            "description": "El Salvador secured a $1.4 billion loan deal with the IMF after agreeing to scale back its bitcoin policies, making cryptocurrency acceptance voluntary for businesses and limiting public sector involvement. The deal aims to stabilize the country's economy, wi…",
            "url": "https://slashdot.org/story/24/12/24/2015221/el-salvador-strikes-14-billion-imf-deal-after-scaling-back-bitcoin-policies",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-12-24T22:40:00Z",
            "content": "In 2021, El Salvador became the first country in the world to make bitcoin legal tender. This week, the cryptocurrency briefly hit a fresh record high of more than $108,000.\r\n\"The potential risks of … [+324 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "MicroStrategy's Big Bet On Bitcoin Went Stratospheric",
            "description": "MicroStrategy has transformed into a \"bitcoin treasury company,\" investing billions in bitcoin through debt and equity issuance, driving its stock price up nearly 400% in 2024 despite declining software revenues and heightened financial risks. The Guardian re…",
            "url": "https://slashdot.org/story/24/12/31/204219/microstrategys-big-bet-on-bitcoin-went-stratospheric",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-12-31T21:45:00Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Rafael Nam",
            "title": "Is this Bitcoin's golden moment? These are 3 key things to watch for cryptos in 2025",
            "description": "Could 2025 be another game changing year for Bitcoin and other cryptocurrencies? Here are the three things to watch in the new year.",
            "url": "https://www.npr.org/2025/01/06/nx-s1-5248284/bitcoin-rally-crypto-trump",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8076x4543+0+422/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fae%2Fa6%2F61a90aa94f688a8224f22c8920e0%2Fgettyimages-1921756255.jpg",
            "publishedAt": "2025-01-06T10:00:00Z",
            "content": "Cryptocurrencies such as Bitcoin have lately been on a wild ride.\r\nBitcoin hit above $100,000 for the first time last month after more than doubling in price last year and analysts believe bitcoin an… [+5243 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2025-01-10T13:45:14Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Quentyn Kennemer",
            "title": "North Korea linked to crypto heists of over $650 million in 2024 alone",
            "description": "A joint report from US, Japan, and South Korea suggests North Korean hackers known as Lazarus Group were behind the $235 million crypto heist of Indian exchange WazirX.",
            "url": "https://www.theverge.com/2025/1/14/24343762/north-korea-crypto-stolen-wazirx-lazarus-group",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/wPO2usOSxctI84haZv11M8ErP_0=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23587767/acastro_220524_STK428_0003.jpg",
            "publishedAt": "2025-01-14T20:54:03Z",
            "content": "North Korea linked to crypto heists of over $650 million in 2024 alone\r\nNorth Korea linked to crypto heists of over $650 million in 2024 alone\r\n / A joint report by Japan, South Korea, and the US lin… [+2141 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "AI Startup Anthropic Raising Funding Valuing it at $60 Billion",
            "description": "Anthropic is in advanced talks to raise $2 billion dollars in a deal that would value it at $60 billion, making it the latest artificial-intelligence startup to seize upon investor euphoria for the technology. WSJ: The funding round is being led by the ventur…",
            "url": "https://slashdot.org/story/25/01/07/1820244/ai-startup-anthropic-raising-funding-valuing-it-at-60-billion",
            "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
            "publishedAt": "2025-01-07T18:20:00Z",
            "content": "Anthropic is yet another worthless joiner on the wagon of \"our LLMs seem to be intelligence.\"\r\n$60 Billion? They're not worth one billion. It's like bitcoin only slightly less speculative gambling.\r\n… [+169 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Brittney Melton",
            "title": "Jimmy Carter's funeral services begin in DC. And, photos from the major winter storm",
            "description": "Former President Jimmy Carter's funeral services begin in Washington, D.C., today, and NPR will have special coverage of the events. And, photos from the winter storm plowing through parts of the U.S.",
            "url": "https://www.npr.org/2025/01/07/g-s1-41313/up-first-newsletter-jimmy-carter-funeral-services-dc-winter-storm-justin-trudeau-resigns",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3747x2108+0+149/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F8b%2F02%2F1d773737471bbbe1ad8330e961c9%2Fap25004762976752.jpg",
            "publishedAt": "2025-01-07T13:12:36Z",
            "content": "Good morning. You're reading the Up First newsletter. Subscribe here to get it delivered to your inbox, and listen to the Up First podcast for all the news you need to start your day.\r\nToday's top st… [+5445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Why creating a bitcoin strategic reserve would be a 'challenge'",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_8f999554-0d37-4b4a-9285-80336bed0a9a",
            "urlToImage": null,
            "publishedAt": "2024-12-16T20:35:56Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Max Zahn",
            "title": "Price of bitcoin falls more than 10%",
            "description": "The drop erases some of the bitcoin gains enjoyed since the election of Trump.",
            "url": "https://abcnews.go.com/Business/price-bitcoin-falls-10/story?id=116982243",
            "urlToImage": "https://i.abcnewsfe.com/a/b6bad89c-b2da-487c-8735-045a8c744730/bitcoin-rt-jef-241220_1734707681562_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-12-20T15:48:02Z",
            "content": "The price of bitcoin has tumbled about 12% from a record high reached earlier this week.\r\nAfter topping $108,000 for the first time on Tuesday, the worlds largest cryptocurrency dropped to a price be… [+1961 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "James Surowiecki",
            "title": "How Bitcoin Became Boring",
            "description": "Cryptocurrency’s newly minted respectability has come at the price of becoming just another asset class.",
            "url": "https://www.theatlantic.com/ideas/archive/2024/12/how-bitcoin-became-boring/681141/",
            "urlToImage": "https://cdn.theatlantic.com/thumbor/-EUbcJKpDyFH0obceJGnhygEnmA=/0x43:2000x1085/1200x625/media/img/mt/2024/12/20241219_bitcoin_respectable/original.jpg",
            "publishedAt": "2024-12-22T13:00:00Z",
            "content": "Until now, the phrase crypto winter meant that cryptocurrency traders were facing hard times: a period of tumbling and depressed prices that had to be weathered until the good times returned. Today, … [+6891 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "North Korean Hackers Stole $1.3 Billion Worth of Crypto This Year",
            "description": "In 2024, North Korean state-sponsored hackers stole $1.34 billion in cryptocurrency across 47 attacks, marking a 102.88% increase from 2023 and accounting for 61% of global crypto theft. BleepingComputer reports: Although the total number of incidents in 2024…",
            "url": "https://it.slashdot.org/story/24/12/24/2049216/north-korean-hackers-stole-13-billion-worth-of-crypto-this-year",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2024-12-25T00:45:00Z",
            "content": "Although the total number of incidents in 2024 reached a record-breaking 303, the total losses figure isn't unprecedented, as 2022 remains the most damaging year with $3.7 billion. Chainalysis says m… [+797 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Bryan Metzger",
            "title": "We're finally getting a close look at Trump's nominees' personal finances",
            "description": "All of Trump's high-profile nominees are required to file reports disclosing their assets and recent sources of income.",
            "url": "https://www.businessinsider.com/trump-administration-nominee-financial-disclosures-2025-1",
            "urlToImage": "https://i.insider.com/6781465b50dfd88e193dd0ff?width=1200&format=jpeg",
            "publishedAt": "2025-01-10T18:16:32Z",
            "content": "All of Trump's high-profile nominees are required to file reports disclosing their assets and recent sources of income.Scott Olson/Getty Images\r\nHow you ever wondered how some of President-elect Dona… [+2064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "BlackRock Bitcoin ETF Put Options at $30, $35 Price Levels See Volume Spike",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_333da494-93f4-4b55-9510-20a62fc78df0",
            "urlToImage": null,
            "publishedAt": "2024-12-16T09:31:12Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Cathie Wood Just Doubled Down on Her $1 Million Price Forecast for Bitcoin. Is She Right?",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_a9342c85-fb08-4b4b-bee9-3d3027f70b6e",
            "urlToImage": null,
            "publishedAt": "2025-01-06T12:35:00Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Crypto 2025 outlook: Will the US adopt bitcoin as strategic asset?",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_2c89375a-1596-47aa-a733-401e5f2d45c6",
            "urlToImage": null,
            "publishedAt": "2024-12-30T17:15:00Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Brett LoGiurato",
            "title": "Stock market today: Dow ekes out gains, bitcoin slumps as 'Santa Claus' rally takes a pause",
            "description": "US stocks were set to open post-Christmas trading with a bit of a hangover.",
            "url": "https://finance.yahoo.com/news/live/stock-market-today-dow-ekes-out-gains-bitcoin-slumps-as-santa-claus-rally-takes-a-pause-175235354.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/VqjzhRsOuDfI1uCTtLnoZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/271990f0-5e7b-11ef-ab67-afc2b15399da",
            "publishedAt": "2024-12-26T17:52:35Z",
            "content": "US stocks struggled to meaningfully extend a \"Santa Claus\" rally the day after Christmas while Wall Street digested one of the only significant economic data points of the week.\r\nThe S&amp;P 500 (^GS… [+7385 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Trump's $1 billion promise, RFK Jr. on Ozempic, and Microsoft rejects Bitcoin: Business news roundup",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_e5a4d03d-bea0-4bc8-892f-021b652e89cc",
            "urlToImage": null,
            "publishedAt": "2024-12-14T14:00:00Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Powell Triggers Market Carnage: VIX Spikes 58%, Stocks Plummet, Dollar Hits 2-Year Highs, Bitcoin Nosedives",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_f3b46bdd-21a7-4125-ac5c-b692e892a089",
            "urlToImage": null,
            "publishedAt": "2024-12-18T21:38:27Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Bitcoin Reserves Plunge: Hedge Funds Bet Big, Eyeing Potential Supply Shock",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7b6fa3c3-66c5-4c63-b8bc-66449f10c097",
            "urlToImage": null,
            "publishedAt": "2025-01-13T14:43:26Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "What Happened in Crypto Today: Why Are the Bitcoin Whales Dumping?",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_afb0ce88-ea02-4478-868c-50a445f282a3",
            "urlToImage": null,
            "publishedAt": "2024-12-16T08:56:05Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blogspot.com"
            },
            "author": "JP Koning",
            "title": "After twelve years of writing about Bitcoin, here's how my thinking has changed",
            "description": "What follows is an essay on how my thinking on bitcoin has changed since I began to write on the topic starting with my first post  in Octob...",
            "url": "http://jpkoning.blogspot.com/2024/12/after-twelve-years-of-writing-about.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhRI5LB-WyPnPrNx80kkHpJ_NsstyB4CVzrSJ4Qd9YodBIhkVMJsIZ3TI6Qh0W8MPPwjvptBLsyt-I2cjPM0HSmDdKJTaghYVCCOFgWkEOHTQsBAZJsQ37iSqnmujHKRuqmrRVArAJfTzgdBmNtK3xdcu1EaRXEJfC5cqaCbCaOtoL_X2TLLfA5iVONzA/w1200-h630-p-k-no-nu/bitcoinbanner.png",
            "publishedAt": "2024-12-18T22:23:48Z",
            "content": "What follows is an essay on how my thinking on bitcoin has changed since I began to write on the topic starting with my first post in October 2012. Since then I've written 109 posts on the Moneyness … [+19720 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium"
            },
            "author": "Emil Sandstedt",
            "title": "The Rise and Future Fall of MicroStrategy",
            "description": "My interest in the story of MicroStrategy started out tangential at first — it was just one of many unconventional outcomes born out of the rising Bitcoin phenomenon. The publicly traded company…",
            "url": "https://medium.com/@bdratings/all-your-models-are-destroyed-the-rise-and-future-fall-of-microstrategy-5916dd3c0021",
            "urlToImage": "https://miro.medium.com/v2/resize:fit:510/1*kUpMT8UeEkBqThMb7GCz_w.png",
            "publishedAt": "2024-12-25T13:24:00Z",
            "content": "All Your Models are Destroyed The Rise and Future Fall of MicroStrategy\r\nTLDR:\r\n<ul><li>Through strong but false narratives, MicroStrategy shares are trading at a large premium to net assets. From th… [+94830 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Themarginalian.org"
            },
            "author": "Maria Popova",
            "title": "Birds, Loves, and Obscure Sorrows: The Best of The Marginalian 2024",
            "description": "Hindsight is how we connect the dots that figure our lives. To look back on even a single year is to see clearly the contour of who we are in its points of attention and priority. “How we spend our days,” Annie Dillard wrote, “is how we spend our lives.” How …",
            "url": "https://www.themarginalian.org/2024/12/25/best-of-2024/",
            "urlToImage": "https://www.themarginalian.org/wp-content/uploads/2024/07/walker_bubbles0.jpg?fit=1200%2C630&ssl=1",
            "publishedAt": "2024-12-25T15:48:20Z",
            "content": "Every month, I spend hundreds of hours and thousands of dollars keeping The Marginalian going. For nearly two decades, it has remained free and ad-free and alive thanks to patronage from readers. I h… [+644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Themarginalian.org"
            },
            "author": "Maria Popova",
            "title": "Favorite Books of the Year: Art, Science, Poetry, Psychology, Children’s, and More",
            "description": "Because I read for the same reason I write — to fathom my life and deepen my living — looking back on a year of life has always been looking back on a year of reading. This year was different — a time of such profound pain and profound transformation that it …",
            "url": "https://www.themarginalian.org/2024/12/17/best-books-2024/",
            "urlToImage": "https://www.themarginalian.org/wp-content/uploads/2012/01/books1.jpg?fit=600%2C315&ssl=1",
            "publishedAt": "2024-12-17T14:50:59Z",
            "content": "Every month, I spend hundreds of hours and thousands of dollars keeping The Marginalian going. For nearly two decades, it has remained free and ad-free and alive thanks to patronage from readers. I h… [+644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Here's Why This Bitcoin Rally Is Different",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_ac04cad6-016a-42e2-8f57-b52c495af345",
            "urlToImage": null,
            "publishedAt": "2024-12-16T10:00:00Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Microsoft Just Made a Momentous Decision About Bitcoin That Could Dramatically Affect Your Ability to Become a Crypto Millionaire",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b06ab0b2-f30d-4c04-b139-2e935f6c67c7",
            "urlToImage": null,
            "publishedAt": "2024-12-15T10:00:00Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Decentralized Dog",
            "title": "Large Bitcoin Holders Accumulate 34,000 BTC Following December Price Dip, Analysts Forecast 2025 Surge",
            "description": "Since December 2024, institutional Bitcoin holders have been purchasing significant amounts of the cryptocurrency, buying more than 34,000 BTC, worth...",
            "url": "https://finance.yahoo.com/news/large-bitcoin-holders-accumulate-34-060148100.html",
            "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/b33ce0c65fa052480ef79e1feb8510de",
            "publishedAt": "2025-01-09T06:01:48Z",
            "content": "Large Bitcoin Holders Accumulate 34,000 BTC Following December Price Dip, Analysts Forecast 2025 Surge\r\nSince December 2024, institutional Bitcoin holders have been purchasing significant amounts of … [+2048 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Decentralized Dog",
            "title": "Crypto Market Sees $1.2 Billion in Liquidations as Bitcoin, Dogecoin, XRP and Solana Face Double-Digit Losses",
            "description": "Cryptocurrency prices have taken a significant hit, with Bitcoin, Ethereum, XRP, Dogecoin and Solana all suffering major losses.",
            "url": "https://finance.yahoo.com/news/crypto-market-sees-1-2-042428581.html",
            "urlToImage": "https://media.zenfs.com/en/coinmarketcap_783/45ff0d09cb1007b6d3512a6c286c7634",
            "publishedAt": "2024-12-20T04:24:28Z",
            "content": "Crypto Market Sees $1.2 Billion in Liquidations as Bitcoin, Dogecoin, XRP and Solana Face Double-Digit Losses\r\nCryptocurrency prices have taken a significant hit, with Bitcoin, Ethereum, XRP, Dogecoi… [+2333 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Madison Mills",
            "title": "Core Scientific finds a balance in bitcoin mining and AI: CEO",
            "description": "Some bitcoin (BTC-USD) miners are shifting into artificial intelligence (AI) and selling their existing power to AI data centers as Big Tech companies look...",
            "url": "https://finance.yahoo.com/video/core-scientific-finds-balance-bitcoin-173651153.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/fQo2ZbFpg7yJYpz5O4geHA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://s.yimg.com/os/creatr-uploaded-images/2024-12/2f73f5d0-bd65-11ef-9caf-83610426a3a9",
            "publishedAt": "2024-12-18T17:36:51Z",
            "content": "Some bitcoin (BTC-USD) miners are shifting into artificial intelligence (AI)and selling their existing power to AI data centers as Big Tech companies look for power sources capable of meeting the ene… [+1532 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Brian Sozzi",
            "title": "Crypto surge: Key players reveal their strategies",
            "description": "Bitcoin (BTC-USD) exploded this year, reaching new heights following the election of President Trump. Yahoo Finance Executive Editor Brian Sozzi spoke to...",
            "url": "https://finance.yahoo.com/video/crypto-surge-key-players-reveal-130034728.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Zv0DHgHL2mlFVFaI.8FlVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-12/32259a70-bc77-11ef-a7e9-26d71830491e",
            "publishedAt": "2024-12-27T13:00:34Z",
            "content": "Bitcoin (BTC-USD) exploded this year, reaching new heights following the election of President Trump. Yahoo Finance Executive Editor Brian Sozzi spoke to several key players in the space on Opening B… [+463 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "MicroStrategy Keeps Building Its $41.6B Bitcoin Fortune, While Surging 422%",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_711670a1-0943-48ad-af79-9e2a75788d5a",
            "urlToImage": null,
            "publishedAt": "2024-12-30T13:43:31Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Bitcoin Dips Below $91K as Banks Brace for Hawkish Fed",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4470e5d9-1e4f-4f74-99cc-b9087af1ddec",
            "urlToImage": null,
            "publishedAt": "2025-01-13T21:36:23Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Github.com"
            },
            "author": "n1trux",
            "title": "Awesome Donations: A repository of FLOSS donation options",
            "description": "A repository of FLOSS donation options. Contribute to n1trux/awesome-donations development by creating an account on GitHub.",
            "url": "https://github.com/n1trux/awesome-donations",
            "urlToImage": "https://opengraph.githubassets.com/fa0a52fb845884f9da589285416caa3dd6ceccfb74ff805f94416155b554d057/n1trux/awesome-donations",
            "publishedAt": "2025-01-02T23:29:04Z",
            "content": "A repository of FLOSS donation options, sorted A-Z.\r\nFeel free to create pull requests (three projects or more). You can also send them via Jabber or eMail to me.\r\nThe Free Software Foundation (FSF) … [+4070 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Mike Taylor",
            "title": "Scientists warn of 'urgent need for action' against bitcoin surge — here's what's happening",
            "description": "Last week, the value of the cryptocurrency topped $100,000 for the first time.",
            "url": "https://www.yahoo.com/news/scientists-warn-urgent-action-against-104546967.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Zt97lww9fQkUyXMSM5j3wg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/the_cool_down_737/b7d51b01007819bc3ef2678a0d730515",
            "publishedAt": "2024-12-14T10:45:46Z",
            "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nA… [+6370 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kenneth Niemeyer",
            "title": "A 67-year-old woman now lives in her car after losing thousands to a romance scammer pretending to be Keanu Reeves",
            "description": "Romance scams are costing older Americans billions.",
            "url": "https://www.businessinsider.com/keanu-reeves-romance-scams-2024-12",
            "urlToImage": "https://i.insider.com/676da8b9a3e82c79120473ce?width=1200&format=jpeg",
            "publishedAt": "2024-12-27T14:09:05Z",
            "content": "A woman says she lost thousands to a scammer pretending to be Keanu Reeves.Axelle/Bauer-Griffin/FilmMagic\r\n<ul><li>A California woman lost thousands to a scammer posing as Keanu Reeves.</li><li>Roman… [+2378 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Bryan Metzger",
            "title": "Pete Hegseth made millions at Fox News and $900,000 from paid speeches in the last 2 years",
            "description": "Hegseth delivered 41 paid speeches across the country over the last two years, earning $900,000 along the way.",
            "url": "https://www.businessinsider.com/pete-hegseth-salary-fox-paid-speeches-financial-disclosure-2025-1",
            "urlToImage": "https://i.insider.com/67855b62e294a7514e8ccf27?width=1200&format=jpeg",
            "publishedAt": "2025-01-13T19:07:56Z",
            "content": "President-elect Donald Trump's nominee to lead the Department of Defense, Pete Hegseth, has made millions of dollars per year working as a Fox News host, according to a financial disclosure made publ… [+1998 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Is it a bird, a plane, or something more mysterious? Sightings in New Jersey's skies have raised questions and intrigue.",
            "description": "A mysterious aircraft appeared in the night sky. Officials say they're not a foreign threat, but Trump criticizes delays in revealing more info.",
            "url": "https://www.businessinsider.com/mystery-drone-officials-not-worried-lack-of-information-public-investigation-2024-12",
            "urlToImage": "https://i.insider.com/676185ab4ea3c98ea3e4e20f?width=1200&format=jpeg",
            "publishedAt": "2024-12-17T14:39:42Z",
            "content": "US Army drones at a military base in Poland.MikeMareen via Getty Images\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily ne… [+7859 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Crypto Stocks Crash as Bitcoin Sinks Below $93K Amid Fed Signals",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_57c20695-b839-4319-b0df-da953fd962bd",
            "urlToImage": null,
            "publishedAt": "2024-12-20T14:34:22Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Bitcoin ETFs see record outflows as crypto market plunge accelerates after hawkish Fed meeting",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_8c3bec12-b405-482e-bd66-255937633432",
            "urlToImage": null,
            "publishedAt": "2024-12-20T15:14:07Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "How Ethiopia’s Low Energy Costs Allow BIT Mining to Recycle its Bitcoin Machines",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_51ce8e30-c372-4aa4-8840-7ca0eb24355a",
            "urlToImage": null,
            "publishedAt": "2025-01-07T15:13:26Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "30 years ago Tomorrow's World predicted 2025 - how did it do?",
            "description": "From space junk gel to hologram surgery, the team had lots of intriguing predictions. Which, if any, came true?",
            "url": "https://www.bbc.com/news/articles/cjdn10yk0k1o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4552/live/b71e5210-bef4-11ef-b59e-49d4e30dab91.jpg",
            "publishedAt": "2025-01-01T00:42:58Z",
            "content": "This fictional 2025 couple, along with the man's 'VR headset', featured in the Tomorrow's World episode in 1995.\r\nIn 1995, the BBC's Tomorrow's World programme decided to predict what the world would… [+7574 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Theregister.com"
            },
            "author": "Richard Currie",
            "title": "Pastor's divine 'dream' crypto scheme indicted by Uncle Sam",
            "description": "Plus: Man who tossed Bitcoin drive worth millions barred from digging in dump\nA man of God is in the sin bin with Uncle Sam's prosecutors over a cryptocurrency investment business that he claims came to him in a dream.…",
            "url": "https://www.theregister.com/2025/01/13/crypto_pastor_charged/",
            "urlToImage": "https://regmedia.co.uk/2025/01/13/shutterstock_christians.jpg",
            "publishedAt": "2025-01-13T15:45:05Z",
            "content": "A man of God is in the sin bin with Uncle Sam's prosecutors over a cryptocurrency investment business that he claims came to him in a dream.\r\nAccording to an indictment announced by US Attorney Vanes… [+3644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ritholtz.com"
            },
            "author": "Barry Ritholtz",
            "title": "At the Money: Matt Hougan on Crypto Technology",
            "description": "SPOTIFY EMBED   St. Vincent – Digital Witness https://youtu.be/mVAxUMuhz98?si=LIng1xsFPL6VRXKW Digital witnesses, what’s the point of even sleeping? If I can’t show it, if you can’t see me What’s the point of doing anything? This is no time for confessing At …",
            "url": "https://ritholtz.com/2025/01/atm-matt-hougan-crypto-technology/",
            "urlToImage": null,
            "publishedAt": "2025-01-08T16:00:41Z",
            "content": "SPOTIFY EMBED\r\nSt. Vincent – Digital Witness https://youtu.be/mVAxUMuhz98?si=LIng1xsFPL6VRXKW Digital witnesses, what’s the point of even sleeping? If I can’t show it, if you can’t see me What’s the … [+14554 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Maurie Backman",
            "title": "American woman lost her life savings to scammers posing as Amazon. Here’s how the scam works and how to protect yourself",
            "description": "Scammers have gotten better at what they do, but there are certain things to look out for that could help protect you from becoming a victim.",
            "url": "https://finance.yahoo.com/news/american-woman-lost-her-life-123000699.html",
            "urlToImage": "https://media.zenfs.com/en/moneywise_327/3f7c80246746ca3f5d95a85ec87579ac",
            "publishedAt": "2025-01-08T12:30:00Z",
            "content": "American woman lost her life savings to scammers posing as Amazon. Heres how the scam works and how to protect yourself\r\nWhen a Knoxville, Tennessee woman named Colleen saw a duplicate charge on her … [+4344 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Vijay Kolinjivadi and Aaron Vansintjan",
            "title": "The Trouble With the Ultra-Rich’s Environmentalism",
            "description": "Zero-carbon mansions and super-yachts are less a sign of a sustainable future than a highly exclusive one.",
            "url": "https://time.com/7200268/ultrarich-environmentalism-greenwashing/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/12/GettyImages-1424381503.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2024-12-14T12:00:00Z",
            "content": "In California, the real estate developer Marisol Malibu made waves when they sold a supposedly green $23 million mansion with nine bathrooms, 20 ft. ceilings, golf greens, a heated saltwater pool, a … [+4592 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Torrentfreak.com"
            },
            "author": "Ernesto Van der Sar",
            "title": "The Pirate Bay’s Million-Dollar Bitcoin Donations: Hidden Goldmine or Spent Treasure?",
            "description": "For over a decade, The Pirate Bay has been accepting Bitcoin donations. In dollar terms, this provided a relatively modest but consistent revenue stream. However, if the torrent site had held onto its early Bitcoin, it could have amassed a small fortune, wort…",
            "url": "https://torrentfreak.com/the-pirate-bays-million-dollar-bitcoin-donations-hidden-goldmine-or-spent-treasure-241216/",
            "urlToImage": "https://torrentfreak.com/images/bitcoin-featured.jpg",
            "publishedAt": "2024-12-16T20:01:39Z",
            "content": "It’s been three years since we last checked in on The Pirate Bay’s Bitcoin wallet. \r\nWhile the torrent site may not be raking in the digital dough like it used to, the donations keep trickling in.\r\nB… [+4188 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Rocio Fabbro",
            "title": "Bitcoin plunges back below $95,000",
            "description": "Bitcoin sunk below $92,000 early Friday before recovering some ground, on the heels of the Federal Reserve signaling a slowdown in interest rate cuts for 2025.Read more...",
            "url": "https://qz.com/bitcoin-btc-crypto-ether-federal-reserve-powell-reserve-1851726076",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0d371c132ed3f821f51f9f101cff543f.jpg",
            "publishedAt": "2024-12-20T13:29:00Z",
            "content": "Bitcoin sunk below $92,000 early Friday before recovering some ground, on the heels of the Federal Reserve signaling a slowdown in interest rate cuts for 2025.\r\nThe leading cryptocurrency traded at $… [+3125 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "cji@businessinsider.com (Christine Ji)",
            "title": "I wanted to add bitcoin to my portfolio, but wasn't sure about the best strategy for buying in. Here's what 3 experts recommended.",
            "description": "I bought bitcoin for the first time. Here's how I crafted my bitcoin investing strategy.",
            "url": "https://www.businessinsider.com/financial-experts-recommended-invest-in-bitcoin-crypto-microstrategy-blackrock-etf-2025-1",
            "urlToImage": "https://i.insider.com/6774237c9de00e389eb3ffb7?width=1200&format=jpeg",
            "publishedAt": "2025-01-02T10:00:01Z",
            "content": "My investing strategy has never been very complicated or flashy. I typically stick to buying index funds. If I'm feeling crazy, I'll throw in an individual blue chip stock here and there. After purch… [+6215 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Happy Birthday, Bitcoin! The top cryptocurrency is old enough to drive",
            "description": "Bitcoin got off to a humble start in 2009, rose to $1 in 2011, and briefly crossed $100,000 in 2024",
            "url": "https://qz.com/bitcoin-birthday-16-genesis-satoshi-nakamoto-1851731540",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e3a91f01fdbe07d5496d0350678d642a.jpg",
            "publishedAt": "2025-01-03T10:00:00Z",
            "content": "In This Story\r\nBitcoin is now 16 years old!\r\nSatoshi Nakamoto, a name used by the creator (or creators) of Bitcoin, mined the first Bitcoin block on Jan. 3, 2009. This genesis block followed the rele… [+2586 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "David McMillin",
            "title": "Crypto Is on a Run. Is Now the Time to Get a Crypto Credit Card?",
            "description": "Maybe -- but your card choices will be limited to just two for the time being.",
            "url": "https://www.cnet.com/personal-finance/credit-cards/crypto-is-on-a-run-is-now-the-time-to-get-a-crypto-credit-card/",
            "urlToImage": "https://www.cnet.com/a/img/resize/160dcbf6db40cdeb138b854d0ca3dd3ffd8da5bc/hub/2025/01/07/2a412717-bd89-4c9c-91dc-80e2c9ad6ee0/may-13-copy-of-money-headshots-240430-62.png?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2025-01-08T17:00:00Z",
            "content": "Crypto is seemingly on another tear. Bitcoin recently reached a major milestone, breaking through $100,000 for the first time in December. If you're looking to get in on the bitcoin craze, a crypto c… [+8164 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Rocio Fabbro",
            "title": "Bitcoin hit a new record above $106,000",
            "description": "Bitcoin hit a new high over the weekend before sinking Monday morning as markets brace for the Federal Reserve’s final interest rate decision of the year.Read more...",
            "url": "https://qz.com/bitcoin-btc-price-ether-record-fed-interest-rates-1851721681",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/bbc7a8973a0633a6bd8d7ca3f6dc741b.jpg",
            "publishedAt": "2024-12-16T12:56:00Z",
            "content": "In This Story\r\nBitcoin hit a new high over the weekend before sinking Monday morning as markets brace for the Federal Reserves final interest rate decision of the year.\r\nThe leading cryptocurrency fe… [+2283 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin surges above $100,000, eyeing Trump’s inauguration",
            "description": "Bitcoin has surged above the $100,000 mark, trading at around $102,000—a gain of over 4% in a single day. This rally is driven by the “January effect” as investors return from the holidays and inject fresh capital into the market. Investors are also closely w…",
            "url": "https://qz.com/bitcoin-100-000-trump-inauguration-microstrategy-etfs-1851733329",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/42c5d3e24a1b8b6186feb4a812f6787f.jpg",
            "publishedAt": "2025-01-06T19:00:00Z",
            "content": "In This Story\r\nBitcoin has surged above the $100,000 mark, trading at around $102,000a gain of over 4% in a single day. This rally is driven by the January effect as investors return from the holiday… [+1792 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Ben Lovejoy",
            "title": "US Army soldier arrested over data breach extortion of AT&T and Verizon",
            "description": "A US Army soldier has been arrested on suspicion of extorting money from AT&T and Verizon, following data breaches which saw a massive amount of customer data obtained.\n\n\n\nThe 20-year-old was arrested near the Army base in Fort Hood, Texas, on suspicion of be…",
            "url": "https://9to5mac.com/2024/12/31/us-army-soldier-arrested-over-data-breach-extortion-of-att-and-verizon/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/12/US-Army-soldier-arrested-over-data-breach-extortion-of-ATT-and-Verizon.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-12-31T13:00:32Z",
            "content": "A US Army soldier has been arrested on suspicion of extorting money from AT&amp;T and Verizon, following data breaches which saw a massive amount of customer data obtained.\r\nThe 20-year-old was arres… [+3447 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "What's ahead for Bitcoin in 2025, according to experts",
            "description": "This year has been nothing short of monumental for the cryptocurrency industry. Bitcoin began the year hovering around $40,000, only to surge past $100,000 in December. The industry shook off the lingering shadows of a prolonged crypto winter, celebrated the …",
            "url": "https://qz.com/2025-bitcoin-cryptocurrency-predictions-1851709640",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7f225e907197e6522c08740d1a282079.png",
            "publishedAt": "2024-12-16T10:00:00Z",
            "content": "This year has been nothing short of monumental for the cryptocurrency industry. Bitcoin began the year hovering around $40,000, only to surge past $100,000 in December. The industry shook off the lin… [+4970 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Quartz Bot",
            "title": "Cryptic posts drive stocks, and Bitcoin turns 16: Markets roundup",
            "description": "Crypto-friendly billionaire Elon Musk is known for his cryptic social media posts. This time, his online activity triggered a dramatic pump-and-dump of cryptocurrency.Read more...",
            "url": "https://qz.com/cryptic-posts-drive-stocks-and-bitcoin-turns-16-marke-1851732192",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a20705a7037f375f50071577be46123b.jpg",
            "publishedAt": "2025-01-04T14:00:00Z",
            "content": "Bitcoin is now 16 years old!\r\nSatoshi Nakamoto, a name used by the creator (or creators) of Bitcoin, mined the first Bitcoin block on Jan. 3, 2009. This genesis block followed the release of a Bitcoi… [+106 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Mersiha Gadzo",
            "title": "Governments and banks once mocked Bitcoin. Now they want in on it",
            "description": "After topping $100,000, Bitcoin supporters see the cryptocurrency soaring even higher.",
            "url": "https://www.aljazeera.com/economy/2024/12/21/governments-and-banks-once-mocked-bitcoin-now-they-want-in-on-it",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/12/AFP__20241210__2189107140__v1__HighRes__BitcoinPricesSkyrocketSincePresidentialElect-1734191338.jpg?resize=1920%2C1440",
            "publishedAt": "2024-12-21T12:05:33Z",
            "content": "Bitcoin has proven to be one of the best-performing assets in modern history.\r\nThe value of the cryptocurrency has increased some 1,000 times over the past decade, far outpacing US stocks and real es… [+10009 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": null,
            "title": "Donald Trump and the Bitcoin rise",
            "description": "Bitcoin rose to more than $100,000 in 2024. Donald Trump has been pro-crypto for some time. Did that influence its rise?",
            "url": "https://www.aljazeera.com/program/by-the-numbers-3/2025/1/13/donald-trump-and-the-bitcoin-rise",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/01/H_16x9-1736762734.png?resize=1920%2C1080&quality=80",
            "publishedAt": "2025-01-13T10:08:05Z",
            "content": "Toggle Play\r\nDonald Trump and the Bitcoin rise"
        },
        {
            "source": {
                "id": null,
                "name": "Tautvilas.lt"
            },
            "author": null,
            "title": "Decentralized Syndication – The Missing Internet Protocol",
            "description": "The Internet is decentralized by design. It came into being not at once, but in parts. New protocols were added on top of previous ones, but one crucial protocol is still missing.",
            "url": "http://tautvilas.lt/decentralized-syndication-the-missing-internet-protocol/",
            "urlToImage": null,
            "publishedAt": "2025-01-10T11:57:06Z",
            "content": "January 7, 2025\r\n The Internet is decentralized by design. It came into being not at once, but in parts.New protocols were added on top of previous ones, with each new protocol extending and improvin… [+12263 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Luc Cohen",
            "title": "Former crypto executive Do Kwon pleads not guilty to US fraud charges",
            "description": "NEW YORK (Reuters) -Do Kwon, the South Korean cryptocurrency entrepreneur behind two digital currencies that lost an estimated $40 billion in 2022, pleaded...",
            "url": "https://finance.yahoo.com/news/former-crypto-executive-kwon-due-160109292.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/23e39038b051986aaabf30db7fc677d7",
            "publishedAt": "2025-01-02T16:01:09Z",
            "content": "By Luc Cohen\r\nNEW YORK (Reuters) -Do Kwon, the South Korean cryptocurrency entrepreneur behind two digital currencies that lost an estimated $40 billion in 2022, pleaded not guilty on Thursday to U.S… [+3178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PetaPixel"
            },
            "author": "Jaron Schneider",
            "title": "Adobe’s Generative AI Jumps The Shark, Adds Bitcoin to Bird Photo",
            "description": "Last year, Adobe updated its Firefly generative AI platform multiple times, the most recent coming in September. Over that time, the Lightroom and Photoshop tools that rely on the technology have gotten steadily worse and the system's choice to add a Bitcoin …",
            "url": "https://petapixel.com/2025/01/09/adobes-generative-ai-jumps-the-shark-adds-bitcoin-to-bird-photo/",
            "urlToImage": "https://petapixel.com/assets/uploads/2025/01/Adobes-Generative-AI-Jumps-The-Shark-Adds-Bitcoin-to-Bird-Photo.jpg",
            "publishedAt": "2025-01-09T18:28:40Z",
            "content": "Last year, Adobe updated its Firefly generative AI platform multiple times, the most recent coming in September. Over that time, the Lightroom and Photoshop tools that rely on the technology have got… [+5552 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Bitcoin surges past $107,000 on hopes for US strategic reserve",
            "description": "Bitcoin and crypto catapult into the spotlight as investors wager Trump will usher in friendlier US rules for crypto.",
            "url": "https://www.aljazeera.com/economy/2024/12/16/bitcoin-surges-past-107000-on-hopes-for-us-strategic-reserve",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24316704653618-1-1731379113.jpg?resize=1920%2C1440",
            "publishedAt": "2024-12-16T20:25:50Z",
            "content": "Bitcoins record rally topped $107,000 after United States President-elect Donald Trump reiterated that he plans to create a US Bitcoin strategic reserve similar to the countrys strategic oil reserve,… [+4009 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Timothy Rapp",
            "title": "USC Commit Matai Tagoa'i to Accept Part of NIL Contract Earnings in Bitcoin",
            "description": "Incoming USC linebacker Matai Tagoa'i announced Thursday that he will accept part of his NIL package in bitcoin. \"This is a game-changer for me,\" he said in a…",
            "url": "https://bleacherreport.com/articles/10147914-usc-commit-matai-tagoai-to-accept-part-of-nil-contract-earnings-in-bitcoin",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1734643245/x4iazlflstc23veyzkth.jpg",
            "publishedAt": "2024-12-19T21:21:33Z",
            "content": "Kirby Lee/Getty Images\r\nIncoming USC linebacker Matai Tagoa'i announced Thursday that he will accept part of his NIL package in bitcoin.\r\n\"This is a game-changer for me,\" he said in a statement (h/t … [+671 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "What Jamie Dimon, Elon Musk, Warren Buffett, Mark Zuckerberg, and other business leaders say about Bitcoin",
            "description": "Cryptocurrency is gaining mainstream acceptance with each passing day. The endorsement it received from President-elect Donald Trump during the 2024 election campaign has further cemented its legitimacy within the financial industry and among the public.Read …",
            "url": "https://qz.com/jamie-dimon-elon-musk-buffett-zuckerberg-bitcoin-1851734730",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/70c40c526ada484f1103f701eeeb1060.jpg",
            "publishedAt": "2025-01-14T10:00:00Z",
            "content": "JPMorgan Chase (JPM) CEO Jamie Dimon has been one of Bitcoins most vocal critics, labeling it a fraud, a Ponzi scheme, and even worse than tulip bulbs, referencing the infamous Dutch tulip mania of t… [+862 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "A strong U.S. dollar sends Bitcoin tumbling back under $100,000",
            "description": "Bitcoin has again slipped below the $100,000 mark, experiencing a decline of over 5% in the past 24 hours. Read more...",
            "url": "https://qz.com/bitcoin-under-100k-us-dollar-stronger-tech-stocks-1851735188",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/567f4636cb61336dcb682c315fe0f706.jpg",
            "publishedAt": "2025-01-08T17:30:00Z",
            "content": "In This Story\r\nBitcoin has again slipped below the $100,000 mark, experiencing a decline of over 5% in the past 24 hours. \r\nThe leading cryptocurrency, which had been gaining momentum amid anticipati… [+1385 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Rocio Fabbro",
            "title": "Jamie Dimon says Bitcoin has 'no intrinsic value'",
            "description": "The JPMorgan Chase CEO says people have a right to buy and sell Bitcoin — but that they still shouldn't do it",
            "url": "https://qz.com/jamie-dimon-bitcoin-btc-jpmorgan-chase-crypto-1851737939",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/15d169648b297506d66f7b38b55c3639.jpg",
            "publishedAt": "2025-01-13T14:25:00Z",
            "content": "In This Story\r\nJPMorgan Chase (JPM+0.94%\r\n) chief Jamie Dimon doesnt think people should smoke or buy Bitcoin.\r\nBitcoin itself has no intrinsic value, Dimon said in an interview with CBS News (PARA+0… [+2763 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Rocio Fabbro",
            "title": "Bitcoin falls below $92,000 as crypto's Trump boost goes backwards",
            "description": "Bitcoin erased much of its recent post-election rally, falling into the red a week before Donald Trump is set to take office once again.Read more...",
            "url": "https://qz.com/bitcoin-btc-price-crypto-donald-trump-administration-1851737930",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9cbf32e232239695b391eb3838ba0dfa.jpg",
            "publishedAt": "2025-01-13T14:00:00Z",
            "content": "Bitcoin erased much of its recent post-election rally, falling into the red a week before Donald Trump is set to take office once again.\r\nThe leading cryptocurrency briefly plunged below $91,000 Mond… [+1800 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin will hit $185,000 in 2025, says leading crypto firm",
            "description": "Bitcoin price made history in 2024, and if a recent report is to be believed, the flagship cryptocurrency could reach $150,000 in the first half of 2025 and potentially hit $185,000 by the fourth quarter.Read more...",
            "url": "https://qz.com/bitcoin-185-000-2025-galaxy-research-doge-ether-etfs-1851730275",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/21216b4e9d998690a33858235e380fae.jpg",
            "publishedAt": "2024-12-30T19:30:00Z",
            "content": "Bitcoin price made history in 2024, and if a recent report is to be believed, the flagship cryptocurrency could reach $150,000 in the first half of 2025 and potentially hit $185,000 by the fourth qua… [+2477 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Andy Mills",
            "title": "Bitcoin's rapid rise could stall as the dollar gains strength in 2025, strategist says",
            "description": "Jason Trennert, CEO and Chairman of Strategas, makes big predictions for the stock market, Bitcoin, gold, and treasuries for the new year",
            "url": "https://qz.com/bitcoin-rapid-rise-stall-2025-stock-market-predictions-1851726871",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e7fe27acac31e2748c60b86c79f36c36.jpg",
            "publishedAt": "2024-12-23T10:00:00Z",
            "content": "Our free, fast, and fun briefing on the global economy, delivered every weekday morning."
        },
        {
            "source": {
                "id": null,
                "name": "The Straits Times"
            },
            "author": null,
            "title": "Moscow using bitcoin in foreign trade...",
            "description": "MOSCOW - Russian companies have begun using bitcoin and other digital currencies in international payments following legislative changes that allowed such use in order to counter Western sanctions, Finance Minister Anton Siluanov said on Wednesday.  Read more…",
            "url": "https://www.straitstimes.com/world/europe/russia-is-using-bitcoin-in-foreign-trade-finance-minister-says",
            "urlToImage": "https://cassette.sphdigital.com.sg/image/straitstimes/7211f7c3d112c7af36582e156d55ab47f2d5c0d48b0f68053e88c6f3f17e4f30",
            "publishedAt": "2024-12-25T20:04:36Z",
            "content": "MOSCOW - Russian companies have begun using bitcoin and other digital currencies in international payments following legislative changes that allowed such use in order to counter Western sanctions, F… [+1421 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Bailey Lipschultz",
            "title": "SPAC Kings Who Delivered 99% Losses Are Raising Billions Again",
            "description": "(Bloomberg) -- There are many well-established symbols of the froth building, yet again, in financial markets. There’s Bitcoin hovering around $100,000 or...",
            "url": "https://finance.yahoo.com/news/spac-kings-delivered-99-losses-113011371.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qb9fZKnFjBiAqpYuO1Wt4Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/746c5ed549ca275087a735c4f937cd08",
            "publishedAt": "2024-12-20T11:30:11Z",
            "content": "(Bloomberg) -- There are many well-established symbols of the froth building, yet again, in financial markets. Theres Bitcoin hovering around $100,000 or the Nasdaq hitting record high after record h… [+5320 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "How to pay your bills with Bitcoin and other cryptocurrency",
            "description": "Cryptocurrency has evolved into a store of value, somewhat like gold, and a medium of exchange, like the U.S. dollar. Its practical applications in everyday life have expanded as it becomes more mainstream. Among the various growing use cases, cryptocurrency …",
            "url": "https://qz.com/pay-bills-bitcoin-cryptocurrency-rent-loans-credit-1851732359",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8f9a5bdf34f92c10b23faf3338a83154.jpg",
            "publishedAt": "2025-01-08T10:00:00Z",
            "content": "To pay bills using cryptocurrency, the first step is setting up a crypto wallet. Without a wallet, you wont be able to make any transactions.\r\nStart by choosing a wallet that suits your needsoptions … [+467 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Man convicted for repeatedly lying about inventing Bitcoin",
            "description": "Computer scientist Craig Wright was given a suspended prison sentence for what was described as \"legal nonsense.\"",
            "url": "https://www.bbc.com/news/articles/c74x0j47gz8o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/bced/live/79e73280-be0a-11ef-97a7-0ff098912783.jpg",
            "publishedAt": "2024-12-19T16:47:12Z",
            "content": "Craig Wright attending the London High Court in February 2024\r\nA computer scientist has been found to have committed contempt of court for falsely and persistently claiming to be the mysterious inven… [+2314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Bitcoin, Bitget, Dogecoin, Solana, and more: Cryptocurrencies to watch this week",
            "description": "The cryptocurrency market is experiencing a decline as the holiday season begins. With many investors pausing their usual spending and investment activity, the market is experiencing a temporary lull. However, this slowdown is likely temporary, and investors …",
            "url": "https://qz.com/bitcoin-bitget-doge-solana-crypto-to-watch-this-week-1851727477",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/21216b4e9d998690a33858235e380fae.jpg",
            "publishedAt": "2024-12-23T15:51:59Z",
            "content": "Less than a week ago, Bitcoin reached an all-time high of $108,135, marking a significant milestone for the leading cryptocurrency. However, since then, it has experienced a sharp decline of over 12%… [+594 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "The Dow regains its groove, rising 300 points on AI stock surge",
            "description": "The Dow regained momentum by mid-morning on Monday as AI stocks surged. Electronic giant Foxconn (HNHPF) reported record-breaking revenue for its fourth quarter, and the artificial intelligence boom continues into 2025.Read more...",
            "url": "https://qz.com/dow-ai-stocks-foxconn-nvidia-tsmc-bitcoin-microstrategy-1851733267",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/db975ef6c784937b0242a703a0276a74.jpg",
            "publishedAt": "2025-01-06T18:00:22Z",
            "content": "In This Story\r\nThe Dow regained momentum by mid-morning on Monday as AI stocks surged. Electronic giant Foxconn (HNHPF+3.09%\r\n) reported record-breaking revenue for its fourth quarter, and the artifi… [+2508 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "cji@businessinsider.com (Christine Ji)",
            "title": "Is it too late to buy bitcoin? Why some Wall Street experts say no — and 4 ways to start investing now.",
            "description": "The price of bitcoin has soared above $100,000 but some Wall Street experts believe now is the best time to buy. Here's how to invest.",
            "url": "https://www.businessinsider.com/how-to-buy-bitcoin-price-start-investing-wall-street-trump-2024-12",
            "urlToImage": "https://i.insider.com/6762077d6c531c315b88dea6?width=1200&format=jpeg",
            "publishedAt": "2024-12-19T16:28:11Z",
            "content": "If you go by some of the many cautionary investing adages like \"buy low, sell high,\" or Warren Buffett's \"be fearful when others are greedy\" it may be tough to argue that bitcoin is a good buy right … [+5729 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "How to give people Bitcoin and other cryptos this holiday season",
            "description": "The holiday season is here, bringing with it the familiar question: what’s the perfect gift for loved ones? You might be surprised to learn that cryptocurrencies like Bitcoin, Ether, and others can be gifted to someone. By gifting cryptocurrency, you can intr…",
            "url": "https://qz.com/bitcoin-cryptocurrency-crypto-christmas-holiday-gifts-1851724652",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1db1f1d7e1f1b3274220c64bd0b68087.jpg",
            "publishedAt": "2024-12-20T10:00:00Z",
            "content": "Various mobile applications, such as Venmo (PYPL) and PayPal, facilitate money transfers. In addition to traditional currency, these platforms support the transfer of certain cryptocurrencies, althou… [+331 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "S Korean crypto-boss Do Kwon to be extradited to US",
            "description": "The man behind the collapse of terraUSD and Luna tokens faces fraud charges in the Unites States.",
            "url": "https://www.bbc.com/news/articles/cn7r8xr3v76o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1978/live/b721a6d0-c46d-11ef-a1bc-3781807aeb0a.jpg",
            "publishedAt": "2024-12-27T16:34:51Z",
            "content": "South Korean cryptocurrency entrepreneur Do Kwon will be extradited to the United States from Montenegro over the collapse of two digital tokens - TerraUSD and Luna tokens.\r\nFor months, the US and So… [+2237 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ritholtz.com"
            },
            "author": "Barry Ritholtz",
            "title": "10 Monday AM Reads",
            "description": "My almost back-to-work morning WFH reads: • The C.E.O.s Are Tripping. Can Psychedelics Help the C-Suite? A growing cottage industry is dedicated to the theory that mind-altering drugs can improve business leadership. (New York Times) • MicroStrategy’s secret …",
            "url": "https://ritholtz.com/2024/12/monday-am-reads-64/",
            "urlToImage": "https://ritholtz.com/wp-content/uploads/2026/12/unemployment.png",
            "publishedAt": "2024-12-30T11:30:01Z",
            "content": "Packed Cubicles, Empty Corner Office: Remote Work Is Increasingly a Right of the Rich: Now growing numbers of the white-collar class are under increasing pressure to return, while many corner offices… [+2259 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Chuck Jones, Senior Contributor, \n Chuck Jones, Senior Contributor\n https://www.forbes.com/sites/chuckjones/",
            "title": "Buy Bitcoin, Not MicroStrategy, If You Want Bitcoin Exposure",
            "description": "It is worthwhile to consider the premium MicroStrategy’s shares are selling for versus it’s bitcoin holdings.",
            "url": "https://www.forbes.com/sites/chuckjones/2024/12/31/buy-bitcoin-not-microstrategy-if-you-want-bitcoin-exposure/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/627753fdef66c7440c3ddefe/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-12-31T18:20:41Z",
            "content": "Bitcoin cryptocurrency background. A bunch of golden bitcoin, Digital currency\r\ngetty\r\nAfter gains of 346% in 2023 and about 360% in 2024 for a total just under 2,000% for two years, it is worthwhile… [+4192 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Emily Stewart",
            "title": "2024 was the year America started to bet on everything",
            "description": "From elections and sports to stocks and meme coins, 2024 was the year gambling took over the American economy",
            "url": "https://www.businessinsider.com/sports-betting-odds-gambling-lines-memecoins-prediction-markets-polymarket-stocks-2024-12",
            "urlToImage": "https://i.insider.com/676317336c531c315b890921?width=1200&format=jpeg",
            "publishedAt": "2024-12-19T09:08:02Z",
            "content": "iStock; Rebecca Zisser/BI\r\nIf it feels like everybody's betting nowadays, it's because a whole lot of people are. 2024 was the year companies from sportsbooks to prediction markets to trading apps as… [+13805 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Andy Mills",
            "title": "Bitcoin price might stall in 2025, but the good news is the risk of recession is low, strategist says",
            "description": "Jason Trennert, Chairman and Chief Executive Officer of Strategas, spoke with Quartz for the latest installment of our “Smart Investing” video series.Read more...",
            "url": "https://qz.com/bitcoin-price-might-stall-2025-recession-risk-low-1851726920",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7575e9e0abf80a93c6e61f74364fca1d.jpg",
            "publishedAt": "2024-12-23T14:20:00Z",
            "content": "Jason Trennert, Chairman and Chief Executive Officer of Strategas, spoke with Quartz for the latest installment of our Smart Investing video series.\r\nWatch the interview above and check out the trans… [+4934 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Andrey Sergeenkov, Contributor, \n Andrey Sergeenkov, Contributor\n https://www.forbes.com/sites/andreysergeenkov/",
            "title": "Why 2025 Is The Right Time To Create National Bitcoin Reserves",
            "description": "Should countries create national Bitcoin reserves in 2025? What are the benefits of Bitcoin adoption for nations?",
            "url": "https://www.forbes.com/sites/digital-assets/2024/12/17/why-2025-is-the-right-time-to-create-national-bitcoin-reserves/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/676140382dd1d0610011b52e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-12-17T09:39:06Z",
            "content": "Bitcoin as the new gold for national reserves\r\ngetty\r\nNo central bank can block Bitcoin transactions. No foreign government can freeze Bitcoin assets. No international organization can limit Bitcoin … [+7168 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Frank Corva, Contributor, \n Frank Corva, Contributor\n https://www.forbes.com/sites/frankcorva/",
            "title": "Bitcoin Circular Economies Take Root In Suriname",
            "description": "Thanks to the efforts of hardworking Bitcoin advocates, Bitcoin circular economies are beginning to grow in Suriname.",
            "url": "https://www.forbes.com/sites/frankcorva/2025/01/01/bitcoin-circular-economies-take-root-in-suriname/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/677448b88956b8914127a7e5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-01-01T12:14:11Z",
            "content": "Suriname flag on the mast\r\ngetty\r\nThanks to the efforts of hardworking Bitcoin advocates, Bitcoin circular economies are beginning to grow in Suriname.\r\nThese economies, the first and most well-known… [+6357 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘Time To Sell’—Serious Bitcoin Price Crash Warning Adds To Crypto Sell-Off",
            "description": "Legendary bitcoin and crypto investor Arthur Hayes has predicted when the bitcoin price and crypto market will crash...",
            "url": "https://www.forbes.com/sites/digital-assets/2025/01/09/time-to-sell-serious-bitcoin-price-crash-warning-adds-to-crypto-sell-off/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/633c2741f081733a2a78b209/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-01-09T08:31:16Z",
            "content": "Bitcoin and crypto prices have fallen sharply along with stock marketspushed lower by Tesla billionaire Elon Musk issuing a surprise bitcoin price warning.\r\nUnlock over $3,000 in NFT, web3 and crypto… [+3320 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "TIME Photo Department",
            "title": "TIME’s Best Photos of 2024",
            "description": "The most striking, influential, and surprising photographs published by TIME in 2024, selected by TIME's photo editors.",
            "url": "https://time.com/7202601/best-time-photos-2024/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2024/12/best-time-photos-2024-zoey-grossman.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2024-12-20T18:00:00Z",
            "content": "As much as the photographs captured by TIME this year are a snapshot of 2024, they are also a look into whats to come. By documenting history through their own lenses, TIME photographers sought out t… [+9488 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Insider Today: Blackstone's holiday cheer",
            "description": "In this Sunday edition of Insider Today, we're talking about Blackstone's holiday video, a Spanish inheritance battle, and Zestimate errors.",
            "url": "https://www.businessinsider.com/insider-today-blackstone-holiday-cheer-video-2024-12-22",
            "urlToImage": "https://i.insider.com/6765aa7a1cee543535a88970?width=1200&format=jpeg",
            "publishedAt": "2024-12-22T11:44:01Z",
            "content": "A collage of Blackstone holiday videos.Blackstone\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></u… [+6984 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Financial advisors are recommending crypto more than ever, a new survey shows",
            "description": "Cryptocurrency has been steadily gaining mainstream acceptance, and the support it received from President-elect Donald Trump during the 2024 election helped solidify its status as a household name in the United States. A new survey suggests that its growing …",
            "url": "https://qz.com/bitwise-vettafi-survey-advisors-crypto-bitcoin-etf-1851736233",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f459a4d665645821807427eecbcdb5e2.jpg",
            "publishedAt": "2025-01-09T17:59:40Z",
            "content": "Cryptocurrency has been steadily gaining mainstream acceptance, and the support it received from President-elect Donald Trump during the 2024 election helped solidify its status as a household name i… [+2568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MIT Technology Review"
            },
            "author": "Gregory E. Epstein",
            "title": "The cult of tech",
            "description": "“THE CULT OF THE FOUNDER.” “THE CULT OF THE TECH GENIUS.”  “Beware: Silicon Valley’s cultists want to turn you into a disruptive deviant.” “Tech’s cult of the founder bounces back.” “Silicon Valley’s Strange, Apocalyptic Cults.” “How the cult of personality a…",
            "url": "https://www.technologyreview.com/2024/12/23/1107291/the-cult-of-tech/",
            "urlToImage": "https://wp.technologyreview.com/wp-content/uploads/2024/12/icon.working-thumb.jpg?resize=1200,600",
            "publishedAt": "2024-12-23T21:00:00Z",
            "content": "The headlines seem to write themselves (if that cliché is allowed anymore in the age of ChatGPT and generative AI). Tech is culty. But that is a metaphor, right? Right?! \r\nWhen I first saw Michael Sa… [+4247 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "N Korea hackers stole $1.3bn of crypto this year - report",
            "description": "Some incidents may be linked to North Korean IT workers infiltrating tech firms, according to research firm Chainalysis.",
            "url": "https://www.bbc.com/news/articles/cwy3dz0614jo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d7d0/live/83e4c660-be89-11ef-b21a-b9164144efa7.jpg",
            "publishedAt": "2024-12-20T04:26:10Z",
            "content": "A total of $2.2bn (£1.76bn) in cryptocurrencies has been stolen this year, with North Korean hackers accounting for more than half that figure, according to a new study.\r\nResearch firm Chainalysis sa… [+1855 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techmeme.com"
            },
            "author": null,
            "title": "BlackRock's Bitcoin ETF surpassed $50B in assets in 11 months, marking the fastest-growing ETF debut ever and pushing BTC's price past $100K for the first time (Sidhartha Shukla/Bloomberg)",
            "description": "Sidhartha Shukla / Bloomberg:\nBlackRock's Bitcoin ETF surpassed $50B in assets in 11 months, marking the fastest-growing ETF debut ever and pushing BTC's price past $100K for the first time  —  - IBIT has grown to more than $50 billion in assets in 11 months …",
            "url": "https://www.techmeme.com/241231/p1",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ipy.2iK_yl.A/v1/1200x800.jpg",
            "publishedAt": "2024-12-31T05:10:01Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 12:15 AM ET, December 31, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo… [+72 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Korok Ray, Contributor, \n Korok Ray, Contributor\n https://www.forbes.com/sites/korokray/",
            "title": "Happy New Year, Bitcoin!",
            "description": "It is another year of opportunities, and 2025 will be the year for Bitcoin. After the 100k milestone, more fantastic advancements are to come.",
            "url": "https://www.forbes.com/sites/digital-assets/2025/01/07/happy-new-year-bitcoin/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/677d259b42417f776ff50d6b/0x0.jpg?format=jpg&crop=4096,3072,x0,y592,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-01-07T13:07:18Z",
            "content": "Bitcoin 2025\r\nBitcoin Reddit\r\n2024 was a big year for Bitcoin. It was the year of the spot Bitcoin ETF approvals, the beginnings of corporate adoption of Bitcoin, and the first crossing of the hundre… [+3445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Sandy Carter, Contributor, \n Sandy Carter, Contributor\n https://www.forbes.com/sites/sandycarter/",
            "title": "From Qubits To Cryptos: What Quantum Means For AI And Bitcoin",
            "description": "Google’s Quantum Breakthrough: What It Means for AI, Bitcoin, and the Future. Quantum can be good and bad for crypto, AI, and bitcoin.",
            "url": "https://www.forbes.com/sites/digital-assets/2024/12/16/from-qubits-to-cryptos-what-quantum-means-for-ai-and-bitcoin/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/675f790590925d83dd826ecd/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-12-16T13:00:00Z",
            "content": "Google's Willow Announcement (Photo illustration by VCG/VCG via Getty Images)\r\nVCG via Getty Images\r\nGoogles Quantum Breakthrough: What It Means for AI, Bitcoin, and the Future\r\nWhen I was at Davos e… [+10833 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "The ‘Virus Is Spreading’—Bitcoin Suddenly Braced For A ‘Major’ 2025 Price Move",
            "description": "The bitcoin price has been predicted to be just weeks away from a \"major\" move as fresh bitcoin ETF filings are revealed...",
            "url": "https://www.forbes.com/sites/digital-assets/2024/12/29/the-virus-is-spreading-bitcoin-suddenly-braced-for-a-major-2025-price-move/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/676fae96c2988d008381ed35/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-12-29T12:45:02Z",
            "content": "Bitcoin has rocketed higher through 2024, though a serious Federal Reserve warning has sparked fears of an imminent crash.\r\nUnlock over $3,000 in NFT, web3 and crypto perks Apply now!\r\nThe bitcoin pr… [+4765 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "The Dow surges 500 points after new inflation data woos investors",
            "description": "The Dow Jones Industrial Average climbed more than 500 points on Friday morning, buoyed by inflation data that helped the market rebound from the losses earlier this week. The Personal Consumption Expenditures (PCE) price index, which is regarded as the Feder…",
            "url": "https://qz.com/dow-surges-500-points-inflation-nvidia-smci-bitcoin-1851726351",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/55904f8289b2ff1164e372e508a56ecb.jpg",
            "publishedAt": "2024-12-20T16:40:04Z",
            "content": "In This Story\r\nThe Dow Jones Industrial Average climbed more than 500 points on Friday morning, buoyed by inflation data that helped the market rebound from the losses earlier this week. The Personal… [+1444 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "kcloonan@insider.com (Kelly Cloonan)",
            "title": "BlackRock's bitcoin ETF sees record daily outflow as crypto pauses its blockbuster rally",
            "description": "Traders pulled $333 million from BlackRock's spot bitcoin ETF on Thursday, marking the fund's longest losing streak as the crypto rally pauses.",
            "url": "https://markets.businessinsider.com/news/currencies/blackrock-bitcoin-etf-record-outflow-crypto-rally-trump-btc-ibit-2025-1",
            "urlToImage": "https://i.insider.com/675b35e5cf8d1359a2df9304?width=1200&format=jpeg",
            "publishedAt": "2025-01-03T16:39:04Z",
            "content": "BlackRock's spot bitcoin ETF saw record outflows yesterday as crypto takes a breather from its blockbuster rally.\r\nInvestors pulled $333 million from the iShares Bitcoin Trust ETF on Thursday, markin… [+1535 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "kcloonan@insider.com (Kelly Cloonan)",
            "title": "Why 2025 is set to be the year of the altcoin",
            "description": "While bitcoin already enjoys fairly robust regulatory support, more favorable crypto policy is likely to boost altcoins this year, source say.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-outlook-altcoin-ethereum-bitcoin-rally-federal-reserve-2025-1",
            "urlToImage": "https://i.insider.com/6752e7ef8fbb2783ed302ea4?width=1200&format=jpeg",
            "publishedAt": "2025-01-08T14:36:16Z",
            "content": "Last year saw a breakout surge in bitcoin, but 2025 is set for outperformance in other segments of the crypto market, industry experts say.\r\nWith bitcoin trading in a sideways range in recent weeks a… [+3957 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "jsor@businessinsider.com (Jennifer Sor)",
            "title": "Bitcoin falls below $100,000 as hawkish rate outlook weighs on crypto",
            "description": "Crypto's total market cap dropped nearly 7% in the last day. Bitcoin fell below six figures after hitting a record above $108,000 earlier in the week.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-btc-interest-rates-fed-cuts-crypto-outlook-2024-12",
            "urlToImage": "https://i.insider.com/66881a9f1aace5b3ada4b957?width=1200&format=jpeg",
            "publishedAt": "2024-12-19T18:51:03Z",
            "content": "Bitcoin tumbled below the $100,000 threshold on Thursday, weighed down by the outlook for fewer rate cuts in 2025. \r\nWhile other risk assets like stocks were looking to stage a rebound after a steep … [+1676 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "npr.org",
            "title": "Could 2025 be another game changing year for Bitcoin and other cryptocurrencies?",
            "description": "Could 2025 be another game changing year for Bitcoin and other cryptocurrencies?Bitcoin and other cryptocurrencies surged in 2024 with Bitcoin trading above $100,000 for the first time ever in December.",
            "url": "https://biztoc.com/x/95c5f76d29df9eba",
            "urlToImage": "https://biztoc.com/cdn/95c5f76d29df9eba_s.webp",
            "publishedAt": "2025-01-02T22:07:12Z",
            "content": "Could 2025 be another game changing year for Bitcoin and other cryptocurrencies?Bitcoin and other cryptocurrencies surged in 2024 with Bitcoin trading above $100,000 for the first time ever in Decemb… [+56 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "nredmond@insider.com (Nora Redmond)",
            "title": "A man trying to recover a hard drive containing $750 million of bitcoin from a landfill just had his latest bid rejected",
            "description": "James Howells has been trying to gain access to a landfill site for the past decade, where he believes his hard drive containing a bitcoin fortune is.",
            "url": "https://www.businessinsider.com/bitcoin-hard-drive-750-million-dump-landfill-site-2025-1",
            "urlToImage": "https://i.insider.com/678116f488b000981b4a53cb?width=1200&format=jpeg",
            "publishedAt": "2025-01-11T12:11:55Z",
            "content": "A British man's yearslong attempts to find a hard drive containing around $750 million of bitcoin in a landfill site have been hit with a fresh setback.\r\nJames Howells, 39, launched a legal bid to fo… [+2265 chars]"
        }
    ]
        
    constructor(props) {
        super(props);
        console.log("I am a constructor from news component");
        this.state ={
            articles: this.articles,
            loading: false,
            page:1
        }
    }

    // async componentDidMount(){
    //   let url  = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609ac69307d94dc99d278ea8e3676fd4";
    //   this.setState({
    //     loading:false
    //   })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     articles: parsedData.articles, 
    //     totalResults: parsedData.totalResults,
    //     loading:false
    // });
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.searchQuerry !== this.props.searchQuerry) {
    //         // Trigger search when searchQuerry changes
    //         this.handleSearchClick();
    //       }
    //   }

    // handleNextClick = async()=>{
    //     console.log("Next");
    //     if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

    //     }
    //     else{

    //     let url  = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609ac69307d94dc99d278ea8e3676fd4&page=${this.state.page +1}&pagesize=20`;
    //     this.setState({
    //         loading:true
    //     });
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         console.log(parsedData);
    //         this.setState({articles: parsedData.articles});

    //     this.setState({      
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading:false
    //     })
    // }
    // }

    // handlePrevClick = async()=>{
    //     console.log("Previous");
    //     let url  = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609ac69307d94dc99d278ea8e3676fd4&page=${this.state.page -1}&pagesize=20`;
    //     this.setState({
    //         loading:true
    //     })
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         console.log(parsedData);
    //         this.setState({
    //             articles: parsedData.articles,
    //             loading:false
    //         });

    //     this.setState({      
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })
    // }

    // handleSearchClick = async()=>{
    //     console.log("Searcing.......")
    //     let url  = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.searchQuerry}&apiKey=609ac69307d94dc99d278ea8e3676fd4`;
    //     this.setState({
    //         loading:true
    //     })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false});

    // }

  render() {
    const { isDarkMode} = this.props;
    return (

        <div className = "container my-3" id="main">
            <h2>NewsDaily - Top Headlines</h2>
            {this.state.loading && <Spinner/>}

        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl ={element.url} isDarkMode={isDarkMode}/>
                </div>
            })
        }
        </div>

        <div className="container d-flex justify-content-between my-3">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
       
      </div>
    )
  }
}

export default News
