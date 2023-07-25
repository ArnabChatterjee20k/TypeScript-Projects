import "./style.css";
const ID = "custom-select";
const app = document.getElementById("app") as HTMLDivElement;
const select = document.createElement("div");
const multiple = false;
select.id = ID;
app.appendChild(select);

const options: string[] = [
  "Events",
  "Workshops",
  "Hackathons",
  "OSS Projects",
  "Building",
];
const selectStack: number[] = [];

createSelect();

function createSelect(): void {
  renderSelectedOptions();
  renderOptions();
}

function renderSelectedOptions() {
  let optionsDisplay = document.querySelector(".selectDisplay");
  if (!optionsDisplay) {
    optionsDisplay = document.createElement("div");
    optionsDisplay.classList.add("selectDisplay");
    select.appendChild(optionsDisplay);
  }

  optionsDisplay.textContent =
    selectStack.length === 0 ? "No Options Selected!" : options[selectStack[0]];
}
function renderOptions(): void {
  const optionList = document.createElement("ul");
  optionList.classList.add("selectList");
  options.map((option: string, index: number): void => {
    const listItem = createOption(option, index);
    optionList.appendChild(listItem);
  });
  select.appendChild(optionList);
}

function createOption(value: string, index: number): HTMLLIElement {
  const listItem = document.createElement("li");
  listItem.classList.add("option");
  listItem.textContent = value;
  listItem.setAttribute("data-value", index.toString());
  listItem.addEventListener("click", (event: MouseEvent) => {
    const element = event.target as HTMLLIElement;
    const index = element.getAttribute("data-value");
    if (index) {
      multiple
        ? selectStack.push(Number.parseInt(index))
        : (selectStack[0] = Number.parseInt(index));
    }
    console.log(selectStack[0]);
    renderSelectedOptions();
  });

  return listItem;
}
