let x=0;
let y=0;

function updateStatusInterview(id1){
    const status = document.getElementById(id1);
    status.innerText='Interview';
    status.classList.remove('text-red-400');
    status.classList.add('text-green-400');
}
function updateStatusRejected(id1){
    const status = document.getElementById(id1);
    status.innerText='Rejected';
    status.classList.remove('text-green-400');
    status.classList.add('text-red-400');
}


function onInterviewButton(id,id1,id2) {
    updateStatusInterview(id1);

    const card = document.getElementById(id);
    const interviewContainer = document.getElementById("available-interview");

    interviewContainer.classList.remove("hidden");

    if (interviewContainer.children.length === 1 && x===0) {
        interviewContainer.innerHTML = "";
        x++;
    }

    const clonedCard = card.cloneNode(true);
    interviewContainer.appendChild(clonedCard);

    const countText = document.getElementById(id2);
    const current = countText.innerText;
    const count = Number(current)+1;
    countText.innerText=count;
}

function onRejectedButton(id,id1,id2){
    updateStatusRejected(id1);

    const card = document.getElementById(id);
    const interviewContainer = document.getElementById("available-rejected");

    interviewContainer.classList.remove("hidden");

    if (interviewContainer.children.length === 1 && y===0) {
        interviewContainer.innerHTML = "";
        y++;
    }

    const clonedCard = card.cloneNode(true);
    interviewContainer.appendChild(clonedCard);

    const countText = document.getElementById(id2);
    const current = countText.innerText;
    const count = Number(current)+1;
    countText.innerText=count;
}

function deleteCard(id){
    const del = document.getElementById(id);
    del.classList.add('hidden');
}