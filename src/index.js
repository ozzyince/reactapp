function component() {
  let name = "Özgür İnce";
  let action = "rock";

  let element = document.createElement('div');

  element.innerHTML = `Hello ${name}, ready to ${action}?`;

  return element;
}

document.body.appendChild(component());
