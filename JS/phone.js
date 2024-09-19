const loadPhone = async (searchText, isShowAll = false) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;

  displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';

  const showAllContainer = document.getElementById('show-all');

  if (phones.length > 12) {
      showAllContainer.classList.remove('hidden');
  } else {
      showAllContainer.classList.add('hidden');
  }

  if (!isShowAll) {
      phones = phones.slice(0, 12);
  }

  phones.forEach(phone => {
      const phoneCard = document.createElement('div');
      phoneCard.classList = `card card-compact bg-base-100 w-96 shadow-xl`;
      phoneCard.innerHTML = `
          <figure>
              <img src="${phone.image}" alt="${phone.phone_name}" />
          </figure>
          <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
              </div>
          </div>`;
      phoneContainer.appendChild(phoneCard);
  });

  toggleLoadingSpinner(false);
}

const handleSearch = (isShowAll) => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
}

const handleSearch2 = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field2');
  const searchText = searchField.value;
  loadPhone(searchText, true);
}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loadingSpinner');
  if (isLoading) {
      loadingSpinner.classList.remove('hidden');
  } else {
      loadingSpinner.classList.add('hidden');
  }
}

const handleShowall = () => {
  handleSearch(true);
}
