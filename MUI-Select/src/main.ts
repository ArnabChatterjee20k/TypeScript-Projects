import "./style.css";
import { VisibleOption } from "./VisibleOption";
const ID = "custom-select";
const app = document.getElementById("app") as HTMLDivElement;
const select = document.createElement("div");
const multiple = true;
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

const visibleOption = new VisibleOption(renderOptions, removeOptions);

createSelect();

function createSelect(): void {
  renderSelectedOptions();
}

function renderSelectedOptions() {
  const selectDisplay = select.querySelector(
    ".selectDisplay"
  ) as HTMLDivElement;
  const optionsDisplay = selectDisplay || document.createElement("div");

  if (!selectDisplay) {
    optionsDisplay.classList.add("selectDisplay");
    select.appendChild(optionsDisplay);
  }

  optionsDisplay.onclick = () => {
    // debugger;
    const state = visibleOption.getVisible;
    visibleOption.setVisible = !state;
  };

  const batch = document.createDocumentFragment();
  if (multiple) {
    selectStack.forEach((option) => batch.append(createChip(options[option])));
  } else {
    const selectedOption = options[selectStack[0]];
    batch.append(createChip(selectedOption));
    console.log(selectStack);
  }

  optionsDisplay.textContent = "";
  optionsDisplay.append(batch);

  if (selectStack.length === 0) {
    optionsDisplay.textContent = "No Options Selected!";
  }
}

function renderOptions(): void {
  let optionList = document.querySelector(
    ".selectList"
  ) as HTMLUListElement | null;

  if (!optionList) {
    optionList = document.createElement("ul");
    optionList.classList.add("selectList");
  }
  options?.map((option: string, index: number): void => {
    const listItem = createOption(option, index);
    optionList?.appendChild(listItem);
  });
  select.appendChild(optionList);
}

function removeOptions(): void {
  const optionsDisplay = document.querySelector(".selectList");
  if (optionsDisplay) optionsDisplay.parentNode?.removeChild(optionsDisplay);
}

function createOption(value: string, index: number): HTMLLIElement {
  const listItem = document.createElement("li");
  listItem.classList.add("option");
  listItem.textContent = value;
  listItem.setAttribute("data-value", index.toString());

  if (selectStack.includes(index)) {
    listItem.classList.add("selected");
  } else {
    listItem.addEventListener("click", (event: MouseEvent) => {
      const element = event.target as HTMLLIElement;
      const index = element.getAttribute("data-value");
      if (index) {
        multiple
          ? selectStack.push(Number.parseInt(index))
          : (selectStack[0] = Number.parseInt(index));
      }
      renderSelectedOptions();
      removeOptions();
      renderOptions();
    });
  }

  return listItem;
}

function createChip(value: string): HTMLParagraphElement {
  const chip = document.createElement("p");
  chip.classList.add("chip");
  chip.textContent = value;
  return chip;
}
