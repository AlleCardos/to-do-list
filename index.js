const form = document.querySelector('.form');
const ul = document.querySelector('.list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('.value');
    const value = input.value;

    if(value == '') return;

    create_validation(value);
    validation(value);

    input.value = "";
})

ul.addEventListener('click', remove_item) 

function remove_item (element) {
    if(element.target.classList.contains('btn-delete')){
        element.target.parentElement.remove();
    }
}

function validation (value) {

    const btns = document.querySelectorAll('.btn-validation')

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            e.preventDefault();

            const validation = btn.value;

                if(validation == 'not'){
                    btn.parentElement.remove(); 
                    return;
                }else{
                    btn.parentElement.remove();
                    create_item(value); 
                }
        })
    })
}

function create_validation(){

    const body = document.querySelector('body')

    const div = document.createElement('div');
    const label = document.createElement('label');
    const btn_yes = document.createElement('button');
    const btn_not = document.createElement('button');

    div.classList.add('validation');

    label.textContent = 'Deseja adicionar esse item na lista?'

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

