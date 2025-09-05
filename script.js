const cryptoNews = [
    {
        title: "Bitcoin Reaches New All-Time High Above $70,000",
        summary: "Bitcoin continues its bullish momentum, breaking through previous resistance levels as institutional adoption grows.",
        crypto: "BTC",
        time: "2 hours ago"
    },
    {
        title: "Ethereum 2.0 Staking Rewards Hit Record Levels",
        summary: "The Ethereum network sees unprecedented staking participation, driving yield opportunities for validators.",
        crypto: "ETH",
        time: "4 hours ago"
    },
    {
        title: "DeFi Protocol Launches Cross-Chain Bridge",
        summary: "New decentralized finance protocol introduces seamless asset transfers between major blockchain networks.",
        crypto: "DeFi",
        time: "6 hours ago"
    },
    {
        title: "Major Exchange Adds Support for 15 New Altcoins",
        summary: "Leading cryptocurrency exchange expands trading pairs, providing access to emerging digital assets.",
        crypto: "ALT",
        time: "8 hours ago"
    },
    {
        title: "NFT Marketplace Reports 300% Volume Increase",
        summary: "Non-fungible token trading surges as digital art and collectibles gain mainstream adoption.",
        crypto: "NFT",
        time: "10 hours ago"
    },
    {
        title: "Central Bank Announces CBDC Pilot Program",
        summary: "Government reveals plans for digital currency trials, marking significant step toward mainstream adoption.",
        crypto: "CBDC",
        time: "12 hours ago"
    },
    {
        title: "Layer 2 Solution Processes 1 Million Transactions",
        summary: "Ethereum scaling solution achieves milestone throughput, demonstrating improved network efficiency.",
        crypto: "L2",
        time: "14 hours ago"
    },
    {
        title: "Crypto Mining Firm Goes Carbon Neutral",
        summary: "Major mining operation completes transition to renewable energy sources, addressing environmental concerns.",
        crypto: "Mining",
        time: "16 hours ago"
    },
    {
        title: "Stablecoin Adoption Surges in Emerging Markets",
        summary: "Dollar-pegged cryptocurrencies gain traction as inflation hedge in developing economies.",
        crypto: "USDC",
        time: "18 hours ago"
    }
];

function createNewsArticle(article) {
    return `
        <article class="news-article">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <div class="news-meta">
                <span class="crypto-tag">${article.crypto}</span>
                <span>${article.time}</span>
            </div>
        </article>
    `;
}

function loadNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = cryptoNews.map(createNewsArticle).join('');
}

function filterNews(crypto) {
    const newsContainer = document.getElementById('news-container');
    let filteredNews = cryptoNews;
    
    if (crypto !== 'latest') {
        filteredNews = cryptoNews.filter(article => 
            article.crypto.toLowerCase() === crypto.toLowerCase() ||
            article.title.toLowerCase().includes(crypto.toLowerCase()) ||
            article.summary.toLowerCase().includes(crypto.toLowerCase())
        );
    }
    
    newsContainer.innerHTML = filteredNews.map(createNewsArticle).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase();
            filterNews(filter);
        });
    });
});