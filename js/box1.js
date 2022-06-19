//box1에 포함되어 있는 날짜, 시간, 명언을 표시합니다.

const date = document.querySelector("#date");  //날짜
const time = document.querySelector("#time");  //시간
const poem = document.querySelector("#poem");
const poemDetail = document.querySelector("#poemDetail");

const poems = [
    {poem: "길 없는 바다가 그대의 대지이기에",
     detail:"-「淑女에게」, 최시한"},
    {poem: "바다는 비에 젖지 않는다.",
    detail:"-「노인과 바다」, 헤밍웨이"},
    {poem: "푸른 바다에는 고래가 있어야지. 고래 한 마리 키우지 않으면 청년이 아니지",
    detail:"-「고래를 위하여」, 정호승"},
    {poem: "오늘은 오랜만에 내가 나에게 푸른 엽서를 쓴다 어서 일어나 섬들이 많은 바다로 가자고",
    detail:"-「내가 나에게」, 이해인"},
    {poem: "누구나 자기만의 바닷가가 하나씩 있으면 좋다 자기만의 바닷가로 달려가 쓰러지는 게 좋다",
    detail:"-「바닷가에 대하여」, 정호승"}
];

//날짜 표시
function handleDate(){
    const today = new Date();
    const month = String(today.getMonth()+1).padStart(2,"0");
    const day = String(today.getDate()).padStart(2,"0");
    date.innerText = `${month}/${day}`
}

//시간 표시
function handleTime(){
    const today = new Date();
    const hour = String(today.getHours()).padStart(2,"0");
    const minutes = String(today.getMinutes()).padStart(2,"0");
    time.innerText = `${hour}:${minutes}`;
}

//시 구절 표시
function handlePoem(){
    const chosenPoem = poems[Math.floor(Math.random() * poems.length)];
    poem.innerText = chosenPoem.poem;
    poemDetail.innerText = chosenPoem.detail;
}


handleDate();
handleTime();
handlePoem();
setInterval(handleDate,1000);
setInterval(handleTime,1000);

