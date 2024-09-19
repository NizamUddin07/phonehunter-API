const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;

    displayPhones(phones);
}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');

    phoneContainer.textContent='';

    const showAllContainer = document.getElementById('show-all');

    if (phones.length > 12){
      showAllContainer.classList.remove('hidden')
    }
    else{
      showAllContainer.classList.add('hidden')
    }
    phones = phones.slice(0,12)
    




    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact bg-base-100 w-96 shadow-xl`;
        phoneCard.innerHTML = `<figure>
                  <img
                    src="${phone.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>`;
        phoneContainer.appendChild(phoneCard);
    })

    toggleLoadingSpinner(false);
}


const handleSearch = () => {

  searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText) 
  loadPhone(searchText);



}


const handleSearch2 = () => {
  toggleLoadingSpinner(true);
  searchField = document.getElementById('search-field2');
  const searchText = searchField.value;
  console.log(searchText)
  loadPhone(searchText);

}



const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loadingSpinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden');
  }
}

// loadPhone();