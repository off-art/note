let text = document.getElementById("text");
let butt = document.getElementById("butt");
let list = document.getElementById("list");

let notes = {};
let edit = false;
let key;

butt.addEventListener("click", function() {
  if (edit) {
    notes[key] = text.value;
    edit = false;
    key = undefined;
    text.value = " ";
  } else {
    let date = new Date();
    let now = text.value;
    notes[now] = text.value;
    text.value = "";

    let li = document.createElement("li");
    li.classList.add('notes-list__link');
    li.innerHTML = now;
    list.appendChild(li);

    li.addEventListener("click", function() {
      text.value = notes[this.innerHTML];
      edit = true;
      key = this.innerHTML;
    });
  }
});

function removeElement()
{
   document.querySelector('li').remove();
}
