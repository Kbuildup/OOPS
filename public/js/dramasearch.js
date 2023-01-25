const accountArray = [
    {
      name : "그 해 우리는",
      type : "드라마",
      image: "/img/drama.png",
    },
    {
      name : "이상한 변호사 우영우",
      type : '드라마',
      image: "/img/drama2.png",
    },
    {
      name : "나 혼자 산다",
      type : "예능",
      image: "/img/drama3.png",
    },
    {
      name : "지구오락실",
      type : "예능",
      image: "/img/drama4.png",
    },
    {
      name : "멜로가 체질",
      type : "드라마",
      image: "/img/drama5.png",
    },
]

const searchFunc = (objId) => {
  searchId = searhInput.value;
  return objId.indexOf(searchId) !== -1;
}

const showFilteredAccount = (account) => {
  const containerCap = document.querySelector(".suggestions-cap");
  resultContainer.style.display = "block";
  containerCap.style.display = "block";
  const filteredOne = document.createElement("li");
  filteredOne.innerHTML = `<img src=${account.image} alt=${account.name} 사진 />
  <div class="suggest-container">
    <p class="suggest-username">${account.name}</p>
    <p class="suggest-description">${account.type}</p>
  </div>`;
  filteredList.append(filteredOne);
};

searchInput.addEventListener("keyup", () => {
  // 초기화
  filteredList.innerHTML = "";
  resultContainer.style.display = "none";
  // input 값이 있다면,
  if (searchInput.value) {
    const filteredAccount = accountArray.filter((x) => searchFunc(x.name));
    // filteredAccout 배열이 있다면,
    if (filteredAccount) {
      filteredAccount.forEach((acc) => showFilteredAccount(acc));
    }
  }
});

// focusout시, 검색 결과 사라지기
searchInput.addEventListener("focusout", () => {
  const containerCap = document.querySelector(".suggestions-cap");
  resultContainer.style.display = "none";
  containerCap.style.display = "none";
});

document.getElementById("btn").addEventListener("click",()=> {window.location = 'more.html';});
