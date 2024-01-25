import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "By <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a>, <a href=\"/profiles/elise-hammond\">Elise Hammond</a>, <a href=\"/profiles/tori-powell\">Tori B. Powell</a>, Michael Williams, Antoinette Radford, <a href=\"/profiles/shania-shelton\">Shania Shelton</a>, <a href=\"/profiles/jack-forrest\">Jack Forrest</a>, <a href=\"/profiles/tori-powell\">Tori B. Powell</a>, <a href=\"/profiles/elise-hammond\">Elise Hammond</a> and <a href=\"/profiles/amir-vera\">Amir Vera</a>, CNN",
      "title": "Live updates: Trump wins New Hampshire GOP primary, CNN projects - CNN",
      "description": "Former President Donald Trump will win New Hampshire's GOP primary, CNN projects, defeating Nikki Haley and further cementing his hold on the Republican Party. Follow here for the latest live news updates, analysis and results.",
      "url": "https://www.cnn.com/politics/live-news/new-hampshire-primary-01-23-24/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240120123326-split-nikki-haley-donald-trump-super-tease.jpg",
      "publishedAt": "2024-01-24T02:30:00Z",
      "content": "Former South Carolina Gov. Nikki Haley wants to continue her campaign after a bruising loss Tuesday in the New Hampshire Republican primary.\r\nThis is a delegate fight, a Haley adviser told CNN's Jeff… [+1507 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Oren Liebermann, Haley Britzky",
      "title": "US carries out airstrikes on Iranian-backed militias in Iraq - CNN",
      "description": "The US carried out airstrikes in Iraq targeting Iranian-backed militias in the country on Tuesday following repeated attacks on US forces, a US official told CNN, including an attack over the weekend that involved ballistic missiles.",
      "url": "https://www.cnn.com/2024/01/23/politics/us-strikes-iran-backed-militia-iraq/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230522144735-pentagon-aerial-0308.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-01-24T02:01:00Z",
      "content": "The US carried out airstrikes in Iraq targeting facilities used by Iranian-backed militias in the country on Tuesday following repeated attacks on US forces, Defense Secretary Lloyd Austin announced … [+5774 chars]"
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Aliza Chasan",
      "title": "Ryan Gosling, Oscar nominated for \"Barbie\" role, speaks out after Academy snubs Margot Robbie, Greta Gerwig - CBS News",
      "description": "\"Barbie\" was nominated for eight awards, but director Greta Gerwig and star Margot Robbie were notably snubbed. Ryan Gosling, who was nominated, said \"there is no Ken without Barbie.\"",
      "url": "https://www.cbsnews.com/news/ryan-gosling-america-ferrera-barbie-margot-robbie-greta-gerwig-oscar-snubs/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/24/5f9ad115-27af-44c7-9024-eb9b09f74853/thumbnail/1200x630/5d6c909bdadb6cffbdd4ef82bdf1ddd1/gettyimages-1485210271.jpg?v=1acc31b0e955989267fc7dd28b496c5e",
      "publishedAt": "2024-01-24T01:20:33Z",
      "content": "Actor Ryan Gosling Tuesday expressed his gratitude for his Oscar nomination for best supporting actor for his performance as Ken in the global phenomenon \"Barbie,\" but questioned Academy voters for p… [+2728 chars]"
    },
    {
      "source": { "id": null, "name": "Investor's Business Daily" },
      "author": "Investor's Business Daily",
      "title": "Futures Rise As Netflix Jumps Late; Here Comes Tesla - Investor's Business Daily",
      "description": null,
      "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-netflix-jumps-here-comes-tesla/",
      "urlToImage": null,
      "publishedAt": "2024-01-24T01:08:00Z",
      "content": null
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Sean Hollister",
      "title": "eBay will lay off 1000 employees — 9 percent of the company - The Verge",
      "description": "eBay is letting go of nearly a tenth of the company’s workers, and will “scale back” its contractors too. It says it wants to be “more nimble.”",
      "url": "https://www.theverge.com/24048636/ebay-layoffs-1000-employees-january-2024",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/OFic2zT2yoHgWukQpUINSDLUFJM=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25229468/STK252_ebay_stock_CVirginia_4.jpg",
      "publishedAt": "2024-01-24T00:49:00Z",
      "content": "eBay will lay off 1,000 employees 9 percent of the company\r\neBay will lay off 1,000 employees 9 percent of the company\r\n / The company says it needs to be more nimble.\r\nBySean Hollister, a senior edi… [+4657 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Reuters",
      "title": "Turkey approves Sweden's NATO membership bid after 20-month delay - Reuters",
      "description": null,
      "url": "https://www.reuters.com/world/turkey-set-approve-swedens-nato-membership-bid-after-long-delay-2024-01-23/",
      "urlToImage": null,
      "publishedAt": "2024-01-24T00:44:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Hornets Trade Terry Rozier to Heat for Kyle Lowry | Inside the NBA - Bleacher Report",
      "description": "Inside the NBA crew reacts to the trade between the Heat and Hornets, sending Terry Rozier to Miami and Kyle Lowry to Charlotte.Subscribe: https://www.youtub...",
      "url": "https://www.youtube.com/watch?v=7449PCXeFeM",
      "urlToImage": "https://i.ytimg.com/vi/7449PCXeFeM/maxresdefault.jpg",
      "publishedAt": "2024-01-24T00:41:41Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "3 Kansas City Chiefs Fans Found Dead in Friend’s Backyard - Inside Edition",
      "description": "Three Kansas City Chiefs fans were found dead in a friend’s backyard following an NFL game. The incident occurred after three buddies came to their friend’s ...",
      "url": "https://www.youtube.com/watch?v=bval8hv-1Ak",
      "urlToImage": "https://i.ytimg.com/vi/bval8hv-1Ak/maxresdefault.jpg",
      "publishedAt": "2024-01-23T23:51:18Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "[Removed]" },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": { "id": "espn", "name": "ESPN" },
      "author": "Alden Gonzalez",
      "title": "Adrian Beltre, Todd Helton, Joe Mauer into Baseball Hall of Fame - ESPN",
      "description": "Adrian Beltre, Todd Helton and Joe Mauer were voted into the National Baseball Hall of Fame, while closer Billy Wagner again fell just short with 73.8%.",
      "url": "https://www.espn.com/mlb/story/_/id/39372743/adrian-beltre-joe-mauer-todd-helton-baseball-hall-fame",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0123%2Fmlb_2024_hof3a_voting_16x9.jpg",
      "publishedAt": "2024-01-23T23:25:00Z",
      "content": "Adrian Beltre, Joe Mauer and Todd Helton are officially Hall of Famers.\r\nThe trio was voted into the National Baseball Hall of Fame and Museum in Cooperstown, New York, by the Baseball Writers' Assoc… [+4787 chars]"
    },
    {
      "source": { "id": null, "name": "MarketWatch" },
      "author": "Bill Peters",
      "title": "United pulls plans for Boeing's biggest 737 Max jet after Max 9 groundings - MarketWatch",
      "description": "‘It’s a great aircraft. But we can’t count on it, and so we’re working on alternate plans,’ CFO says",
      "url": "https://www.marketwatch.com/story/united-pulls-plans-for-boeings-biggest-737-max-jet-after-max-9-groundings-prove-to-be-straw-that-broke-the-camels-back-35b82591",
      "urlToImage": "https://images.mktw.net/im-71084564/social",
      "publishedAt": "2024-01-23T23:17:00Z",
      "content": "United Airlines Holdings Inc. on Tuesday said it was rethinking its longer-term plans for Boeings biggest 737 Max jet, the Max 10, after the governments grounding of dozens of Max 9s this month raise… [+2380 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Blood test may revolutionise treatment of Alzheimers disease | BBC News - BBC News",
      "description": null,
      "url": "https://www.youtube.com/watch?v=PlGvuKvBv5c",
      "urlToImage": null,
      "publishedAt": "2024-01-23T23:01:47Z",
      "content": null
    },
    {
      "source": { "id": "axios", "name": "Axios" },
      "author": "Axios",
      "title": "DeSantis unloads on Trump right after endorsing him - Axios",
      "description": null,
      "url": "https://www.axios.com/2024/01/23/desantis-criticizes-trump-after-endorsement",
      "urlToImage": null,
      "publishedAt": "2024-01-23T22:45:31Z",
      "content": null
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "The Wall Street Journal",
      "title": "Hamas Open to Releasing Some Israeli Hostages for Pause in Fighting, Mediators Say - WSJ - The Wall Street Journal",
      "description": null,
      "url": "https://www.wsj.com/world/middle-east/hamas-open-to-releasing-some-israeli-hostages-for-pause-in-fighting-mediators-say-81988681",
      "urlToImage": null,
      "publishedAt": "2024-01-23T22:15:00Z",
      "content": null
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Elizabeth Schulze",
      "title": "The IRS announces plans to simplify and redesign tax notices - ABC News",
      "description": "The changes will apply to around 170 million letters sent to taxpayers.",
      "url": "https://abcnews.go.com/Business/irs-announces-plans-simplify-redesign-tax-notices/story?id=106607137",
      "urlToImage": "https://i.abcnewsfe.com/a/4457e1bb-7451-4198-a254-07c9eb90b731/Taxes-ap-er-240123_1706045106730_hpMain_16x9.jpg?w=1600",
      "publishedAt": "2024-01-23T22:06:32Z",
      "content": "With tax season set to kick off next week, the IRS is launching a new initiative to redesign and simplify common tax documents.\r\nThe changes will eventually apply to around 170 million letters that a… [+1474 chars]"
    },
    {
      "source": { "id": null, "name": "[Removed]" },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": { "id": null, "name": "The Athletic" },
      "author": "Shams Charania, Sam Amick and Eric Nehm",
      "title": "Why the Bucks fired Adrian Griffin and why Doc Rivers could be their next head coach - The Athletic",
      "description": "The Bucks surprisingly fired their head coach despite a 30-13 record. Here's what we know about why it happened.",
      "url": "https://theathletic.com/5222650/2024/01/23/bucks-adrian-griffin-firing-why-doc-rivers/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/01/23152708/GettyImages-1943433383-scaled-e1706041737478.jpg",
      "publishedAt": "2024-01-23T21:09:04Z",
      "content": "The Milwaukee Bucks choice to fire first-year head coach Adrian Griffin on Tuesday was hardly an overnight decision.\r\nIt was borne out of months of underwhelming play, with internal concerns growing … [+12276 chars]"
    },
    {
      "source": { "id": null, "name": "[Removed]" },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": { "id": null, "name": "Android Police" },
      "author": "Dallas Thomas",
      "title": "First Pixel 9 leak eliminates the camera bar's awkward wraparound - Android Police",
      "description": "Oh, look, flat-sided frames. Such bold. Much daring.",
      "url": "https://www.androidpolice.com/google-pixel-9-pro-renders/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/01/pixel-8-pro-close-up-2.jpg",
      "publishedAt": "2024-01-23T20:03:00Z",
      "content": "Summary\r\n<ul><li> The upcoming Google Pixel 9 Pro has been tipped to feature a redesigned camera bar and flat sides, deviating from the previous design language. </li><li> The controversial temperatu… [+3515 chars]"
    },
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Scott Thompson",
      "title": "Chargers' pursuit of Jim Harbaugh advancing to final stages: report - Fox News",
      "description": "The Los Angeles Chargers and Michigan coach Jim Harbaugh are \"in the zone where something can happen\" to fill the team's head coaching vacancy.",
      "url": "https://www.foxnews.com/sports/chargers-pursuit-jim-harbaugh-advancing-final-stages",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/Jim-Harbaugh15.jpg",
      "publishedAt": "2024-01-23T20:00:00Z",
      "content": "Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+2731 chars]"
    }
  ];
  constructor(){
    super();
    console.log('Hello i am a constructor form News Components.')
    this.state={
     articles: this.articles,
     loading:false
    }
  }
    render() {
        return (
            <div className='container my-3'>
                <h2>SkyNews - Top Headlines </h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem  title="News Title" description="News Descriptions01" 
                        imageUrl='https://cdn.cnn.com/cnnnext/dam/assets/240120123326-split-nikki-haley-donald-trump-super-tease.jpg'
                        newUrl='Todo' />
                    </div>
                    <div className='col-md-4'>
                       <NewsItem  title="News Title" description="News Descriptions01" imageUrl='https://cdn.cnn.com/cnnnext/dam/assets/240120123326-split-nikki-haley-donald-trump-super-tease.jpg' />
                    </div>
                    <div className='col-md-4'>
                       <NewsItem  title="News Title" description="News Descriptions01" imageUrl='https://cdn.cnn.com/cnnnext/dam/assets/240120123326-split-nikki-haley-donald-trump-super-tease.jpg' />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
