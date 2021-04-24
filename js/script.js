const filterCompanies = (elem, name) => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn=>btn.classList.remove('btn-active'));
    elem.classList.add('btn-active');
    if(name!=='all') {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = "none";
            if (card.classList.contains(name)){
                card.style.display = "flex";
                console.log(card);
            };
        }); 
    } else {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = "flex";
        });
    };
    return '';
};