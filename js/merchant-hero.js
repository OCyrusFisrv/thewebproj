class MerchantHero {
  constructor(container) {
    this.container = container;
    this.fetchMerchantData();
  }

  fetchMerchantData() {
    fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data); // Log the fetched data to the console
        this.render(data);
      })
      .catch(error => {
        console.error('Error fetching merchant data:', error);
      });
  }

  render(merchantData) {
    if (this.container && merchantData) {
      this.container.innerHTML = `
        <div class="merchant-info">
          <h2>Merchant Information</h2>
          <p>Name: ${merchantData.name}</p>
          <p>Phone: ${merchantData.phone}</p>
          <p>Address: ${merchantData.address.address1}, ${merchantData.address.city}, ${merchantData.address.state}, ${merchantData.address.zip}</p>
          <img src="${merchantData.logo}" alt="Merchant Logo" />
        </div>
      `;
    } else {
      console.error('Container or merchant data not available');
    }
  }
}

const merchantHeroContainer = document.getElementById('merchant-hero');
const merchantHero = new MerchantHero(merchantHeroContainer);
