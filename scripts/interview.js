function onInterviewButton(id,id1,id2) {
    const status = document.getElementById(id1);
    status.innerText='Interview';
    status.classList.remove('text-red-400');
    status.classList.add('text-green-400');

    const card = document.getElementById(id);
    const interviewContainer = document.getElementById("available-interview");

    interviewContainer.classList.remove("hidden");

    if (interviewContainer.children.length === 1) {
        interviewContainer.innerHTML = "";
    }

    const clonedCard = card.cloneNode(true);
    interviewContainer.appendChild(clonedCard);

    const countText = document.getElementById(id2);
    const current = countText.innerText;
    const count = Number(current)+1;
    countText.innerText=count;
}

function onRejectedButton(id,id1,id2){
    const status = document.getElementById(id1);
    status.innerText='Rejected';
    status.classList.remove('text-green-400');
    status.classList.add('text-red-400');


    const card = document.getElementById(id);
    const interviewContainer = document.getElementById("available-rejected");

    interviewContainer.classList.remove("hidden");

    if (interviewContainer.children.length === 1) {
        interviewContainer.innerHTML = "";
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