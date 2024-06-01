const cryptoContainer = document.getElementById('crypto-container');

async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets', {
            method: 'GET',
            qs: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10, page: 1, sparkline: false }
        });

        const data = await response.json();
        displayCryptoPrices(data);
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
    }
}

function displayCryptoPrices(data) {
    data.forEach(crypto => {
        const cryptoDiv = document.createElement('div');
        cryptoDiv.classList.add('crypto');
        
        cryptoDiv.innerHTML = `
            <img src="${crypto.image}" alt="${crypto.name}">
            <div class="name">${crypto.name}</div>
            <div class="price">$${crypto.current_price}</div>
        `;
        
        cryptoContainer.appendChild(cryptoDiv);
    });
}

fetchCryptoPrices();
