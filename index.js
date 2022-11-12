let form = document.querySelector('.form');
let ul = document.querySelector('.list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('.value');
    const value = input.value;

    if(value == '') return;

    opMessage = 1;

    create_validation(opMessage);
    validationInsertItem(value);

    input.value = "";
})

ul.addEventListener('click', (element) => {
    if(element.target.classList.contains('btn-delete')){

        opMessage = 2;
        create_validation(opMessage);
        validationRemoveItem(element);
    }
})

function validationInsertItem (value) {

    const btns = document.querySelectorAll('.btn-validation')

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            e.preventDefault();

            const validation = btn.value;

            if(validation == 'yes'){
                btn.parentElement.remove();
                create_item(value);
                return;
            }

            btn.parentElement.remove(); 

        })
    })
}

function validationRemoveItem (element) {

    const btns = document.querySelectorAll('.btn-validation')

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            e.preventDefault();

            const validation = btn.value;

            if(validation == 'yes'){
                btn.parentElement.remove(); 
                element.target.parentElement.remove();
                return;
            }

            btn.parentElement.remove(); 

        })
    })
}

function create_validation(opMessage){

    let message;

    if(opMessage == 1){
        message = 'Deseja adicionar esse item na lista?';
    }else{
        message = 'Deseja remover esse item da lista';
    }
    
    const body = document.querySelector('body')

    const div = document.createElement('div');
    const label = document.createElement('label');
    const btn_yes = document.createElement('button');
    const btn_not = document.createElement('button');

    div.classList.add('validation');

    label.textContent = message;

    btn_yes.textContent = 'Sim';
    btn_yes.classList.add('btn-validation');
    btn_yes.setAttribute("value","yes");

    btn_not.textContent = 'Não';
    btn_not.classList.add('btn-validation');
    btn_not.setAttribute("value","not");

    div.appendChild(label);
    div.appendChild(btn_yes);
    div.appendChild(btn_not);

    body.appendChild(div)
}

function create_item (value) {

    const li = document.createElement('li');
    const p = document.createElement('p')
    p.textContent = value;
    li.appendChild(p)
    
    const btn_delete = document.createElement('span')
    btn_delete.classList.add('btn-delete')
    btn_delete.textContent = 'X';
    
    li.appendChild(btn_delete);
    ul.appendChild(li);
}

