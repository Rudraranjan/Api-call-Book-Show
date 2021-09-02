// search result fetching data

const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;

    fetch(`https://openlibrary.org/search.json?q=${inputValue}`)
    .then (res => res.json())
    .then (data => displayBooks(data.docs))
}

const displayBooks = (items) => {
    console.log(items);
    const itemPush =document.getElementById('items-push');
    items.forEach(item => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML= `
             <div class="card">
                 <img src="..." class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">Book Name :${item.title}</h5>
                    <p>Author Name : ${item.author_name}</p>
                    <p>First Publishing : ${item.first_publish_year ? item.first_publish_year: 'Not Available'}</p>
                    <p>Publishers : ${item.publisher[0] ? item.publisher[0]: 'Publisher Details Not Available'} </p>
                    
                 </div>
             </div
    
    `
     itemPush.appendChild(div);   
    });
    
}