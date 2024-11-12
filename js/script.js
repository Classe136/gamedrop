const classe = [
  "Andrea Boato",
  "Eleonora Cappellesso",
  "Francesc Cialfi",
  "Giuseppe De Filippo",
  "Carlo Dettori",
  "Fabio Doria",
  "Orsouane Elaouizeb",
  "Daniel Ferraiuolo",
  "Simone Fratini",
  "Enrico Genovese",
  "Andrea Giancristiano",
  "Alessandro Guddo",
  "David Incarbone",
  "Fabio La Fisca",
  "Raffaele Pellegrino",
  "Luigi Maria Raciti",
  "Davide Rigamonti",
  "Michele Saraceni",
  "Andy Iulian Simota",
  "Alessio Tinaglia",
];
const studentList = document.querySelector(".row.row-cols-6");
let template = "";
for (let student of classe) {
  template += `
    <div class="col border">
        <div class="list-group-item p-2">
            ${student}
        </div>
    </div>
  `;
}

studentList.innerHTML += template;

const groups = document.querySelectorAll(".list-group.col");
for (value of groups) {
  Sortable.create(value, {
    group: {
      name: "students",
      pull: true,
    },
    animation: 150,
  });
}

Sortable.create(studentList, {
  group: {
    name: "students",
    pull: true,
  },
  animation: 150,
});
