const cryptoNews = [
    {
        title: "🚀 BITCOIN TO 100K! LFG! Diamond Hands ONLY! 💎🙌",
        summary: "BTC MOONING HARDER THAN DOGE IN 2021! Apes are HODLING strong as institutions keep buying the dip. This is NOT financial advice but... WAGMI! 🦍💪",
        crypto: "🟠 BTC",
        time: "Just now",
        vibe: "🔥🔥🔥"
    },
    {
        title: "ETH GAS FEES FINALLY UNDER $5! WE DID IT DEGENS! 🎉",
        summary: "Layer 2 solutions are CRUSHING IT! Finally can afford to move our bags without selling a kidney. Time to mint some more NFTs! 🎨✨",
        crypto: "💎 ETH",
        time: "69 minutes ago",
        vibe: "🌙"
    },
    {
        title: "PEPE COIN PUMPS 420% - FROG SEASON IS HERE! 🐸💚",
        summary: "The meme coin king is back! Pepe holders are literally crying tears of joy (and profits). Don't fade the frog, ser! 🚀📈",
        crypto: "🐸 PEPE",
        time: "4:20 AM",
        vibe: "🤑"
    },
    {
        title: "BORED APES FLOOR PRICE HITS 200 ETH! HOLY GRAIL! 🦍👑",
        summary: "Ape holders are eating GOOD tonight! Floor sweeping going crazy as celebrities keep buying in. If you know, you know! 💯",
        crypto: "🎨 NFT",
        time: "1 hour ago",
        vibe: "👑"
    },
    {
        title: "SOLANA NETWORK DOWN AGAIN BUT SOL STILL PUMPING? 🤔",
        summary: "Classic Solana move - network goes brrr (stops working) but price goes BRRR (moon time). Degens gonna degen! 😂🚀",
        crypto: "🟣 SOL",
        time: "3 hours ago",
        vibe: "😅"
    },
    {
        title: "CRYPTO TWITTER DISCOVERS NEW 100X GEM! (NOT CLICKBAIT)",
        summary: "CT is going absolutely WILD over this new low cap gem! DYOR but also... when CT speaks, we listen! 👀💎",
        crypto: "💎 GEM",
        time: "6 hours ago",
        vibe: "🎯"
    },
    {
        title: "DEFI YIELD FARMING HITS 6900% APY - TOTALLY SUSTAINABLE! 📈",
        summary: "New protocol promising astronomical yields with zero risk! What could go wrong? Apes are already depositing their life savings! 🤡💰",
        crypto: "🏦 DEFI",
        time: "12 hours ago",
        vibe: "🤡"
    },
    {
        title: "WHALE MOVES 69,420 BTC TO UNKNOWN WALLET! PANIC MODE! 🐋",
        summary: "Whale watching Twitter is in shambles! Is this bullish or bearish? Nobody knows but everyone has an opinion! 🤯📊",
        crypto: "🐋 WHALE",
        time: "1 day ago",
        vibe: "😱"
    },
    {
        title: "GM CRYPTO FAM! ☀️ Another Day, Another Dollar... OF LOSSES! 📉",
        summary: "Portfolio is down but spirits are UP! We're building character (and buying more dips). This is the gwei! ☕💪",
        crypto: "☀️ GM",
        time: "This morning",
        vibe: "☕"
    },
    {
        title: "ELON TWEETS ABOUT DOGE AGAIN! MARKET GOES WILD! 🐕🚀",
        summary: "One tweet, one pump! The dogefather strikes again and DOGE goes to the literal moon. Such wow, much gains! 🌙✨",
        crypto: "🐕 DOGE",
        time: "2 days ago",
        vibe: "🚀"
    }
];

function createNewsArticle(article) {
    return `
        <article class="news-article" onclick="celebrateClick(this)">
            <div class="vibe-indicator">${article.vibe}</div>
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <div class="news-meta">
                <span class="crypto-tag">${article.crypto}</span>
                <span class="time-badge">${article.time}</span>
            </div>
        </article>
    `;
}

function celebrateClick(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = 'celebrateClick 0.6s ease';
    
    // Add some random emojis flying around
    const emojis = ['🚀', '💎', '🔥', '🌙', '🦍', '🐸', '⚡', '💰', '🎉', '✨'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    const flyingEmoji = document.createElement('div');
    flyingEmoji.textContent = randomEmoji;
    flyingEmoji.style.cssText = `
        position: absolute;
        font-size: 2rem;
        pointer-events: none;
        animation: flyAway 2s ease forwards;
        z-index: 1000;
    `;
    
    const rect = element.getBoundingClientRect();
    flyingEmoji.style.left = rect.left + Math.random() * rect.width + 'px';
    flyingEmoji.style.top = rect.top + Math.random() * rect.height + 'px';
    
    document.body.appendChild(flyingEmoji);
    
    setTimeout(() => {
        flyingEmoji.remove();
    }, 2000);
}

function loadNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = cryptoNews.map(createNewsArticle).join('');
}

function filterNews(filterType) {
    const newsContainer = document.getElementById('news-container');
    let filteredNews = cryptoNews;
    
    if (filterType !== '🌟 latest alpha') {
        const searchTerms = {
            '₿ bitcoin': ['btc', 'bitcoin'],
            '🔷 ethereum': ['eth', 'ethereum', 'gas'],
            '🎨 nfts': ['nft', 'ape', 'bored', 'art', 'mint'],
            '🏦 defi': ['defi', 'yield', 'farming', 'protocol', 'apy']
        };
        
        const terms = searchTerms[filterType] || [filterType.toLowerCase()];
        
        filteredNews = cryptoNews.filter(article => 
            terms.some(term => 
                article.crypto.toLowerCase().includes(term) ||
                article.title.toLowerCase().includes(term) ||
                article.summary.toLowerCase().includes(term)
            )
        );
    }
    
    newsContainer.innerHTML = filteredNews.map(createNewsArticle).join('');
    
    // Add some spicy animation when filtering
    const articles = document.querySelectorAll('.news-article');
    articles.forEach((article, index) => {
        article.style.animation = 'none';
        article.style.opacity = '0';
        setTimeout(() => {
            article.style.animation = `slideIn 0.5s ease forwards`;
            article.style.animationDelay = `${index * 0.1}s`;
        }, 50);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    
    const navLinks = document.querySelectorAll('.nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase();
            filterNews(filter);
        });
    });
    
    // Add some initial loading animation
    const articles = document.querySelectorAll('.news-article');
    articles.forEach((article, index) => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(50px)';
        setTimeout(() => {
            article.style.transition = 'all 0.5s ease';
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 100);
    });
});