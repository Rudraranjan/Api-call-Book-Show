const displayMassage = document.getElementById('display error');
displayMassage.style.display = 'none';

// search result fetching data

const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';

    fetch(`https://openlibrary.org/search.json?q=${inputValue}`)
    .then (res => res.json())   
    .then (data => displayBooks(data.docs, data))
}



const displayBooks = (items, total) => {
    console.log(items, total);

    // total use for showing search result details/amount
    
    const totalSearchDetails = document.getElementById('display-massage');
    totalSearchDetails.textContent = '';
    const divNew = document.createElement('div');
    divNew.innerHTML = `
        <h4>Total Search Result :${total.num_found}</h4>
        <h4>Total Result Show Now :${total.docs.length}</h4>            
    `
    totalSearchDetails.appendChild(divNew);

    // items details push by here

    const itemPush =document.getElementById('items-push'); 
    itemPush.textContent ='';    
    
    if(items.length === 0){
        const displayMassage = document.getElementById('display error');
        displayMassage.style.display = 'block';
    }
    else{
        items.forEach(item => {                
            const div = document.createElement('div')
            div.classList.add('col')
            const url =`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
            div.innerHTML= `
                     <div class="card">
                         <img src="${url}"class="w-50 m-auto card-img-top" alt="...">
                         <div class="card-body">
                            <h5 class="card-title">Book Name :${item.title ? item.title: 'Book Name Not Available'}</h5>
                            <p>Author Name : ${item.author_name ? item.author_name: 'Author Name Not Available' }</p>
                            <p>First Publishing : ${item.first_publish_year ? item.first_publish_year: 'Not Available'}</p>
                            <p>Publishers : ${item.publisher ? item.publisher: 'Publisher Details Not Available'} </p>
                            
                         </div>
                     </div
            
            `
             itemPush.appendChild(div); 
             const displayMassage = document.getElementById('display error');
            displayMassage.style.display = 'none';  
            });
    }
   
    
}