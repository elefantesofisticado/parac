const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.constrols');
const secBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content');

function pageTransition(){
    //boton 
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //section active
    allSelections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove other section
            secBtns.forEach(Btn => {
                Btn.classList.remove('active')
            })
            e.target.classList.add('active');
            //hide
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');


            

        }

    })
}

pageTransition();