// Home Work Section start

const parentDiv = document.getElementById("home_work");
const addHeading = document.createElement("h1");
      addHeading.setAttribute("id", "headingStyle");
      addHeading.innerText = "Practice Home Work";
      parentDiv.appendChild(addHeading);

const addPara = document.createElement("p");
      addPara.setAttribute("class", "paraStyle")
      addPara.innerText = "This paragraph is writen by me.I wrote this paragraph in js file.";
      parentDiv.appendChild(addPara);

const addAnotherPara = document.createElement("p");
      addAnotherPara.style.backgroundColor = "red";
      addAnotherPara.style.padding = "10px";
      addAnotherPara.style.fontSize = "20px";
      addAnotherPara.style.color = "#ffffff";
      addAnotherPara.style.fontWeight = "500";
      addAnotherPara.style.letterSpacing = "1px";
      addAnotherPara.style.marginBottom = "10px";
      addAnotherPara.style.borderRadius = "15px";
      addAnotherPara.innerText = "This is another Paragraph. which also written by me.";
      parentDiv.appendChild(addAnotherPara);

const addUl = document.createElement("ul");
      addUl.setAttribute("id","list_order")
      parentDiv.appendChild(addUl);

      addListItem = document.createElement("li");
      addListItem.innerText = "List Item One";
      addUl.appendChild(addListItem);

      addListItem1 = document.createElement("li");
      addListItem1.innerText = "List Item Two";
      addUl.appendChild(addListItem1);

      addListItem2 = document.createElement("li");
      addListItem2.innerText = "List Item Two";
      addUl.appendChild(addListItem2);

      addListItem3 = document.createElement("li");
      addListItem3.innerText = "List Item Two";
      addUl.appendChild(addListItem3);













