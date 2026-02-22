function switchTab(id,id1){
    const all = document.getElementById('all-available-jobs');
    const interview = document.getElementById('available-interview');
    const rejected = document.getElementById('available-rejected');

    all.classList.add('hidden');
    interview.classList.add('hidden');
    rejected.classList.add('hidden');

    const show=document.getElementById(id);
    show.classList.remove('hidden');

    const one = document.getElementById('btn-all');
    const two = document.getElementById('btn-interview');
    const three = document.getElementById('btn-rejected');

    one.classList.remove('btn-primary');
    two.classList.remove('btn-primary');
    three.classList.remove('btn-primary');    

    const color =document.getElementById(id1);
    color.classList.add('btn-primary');
}
