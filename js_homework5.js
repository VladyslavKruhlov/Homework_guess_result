/*
Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.
 */

/* Коментар для викладача:
        тести для цього завдання у main;
 */

export let course = {
    type: "QA",
    title: "QA Pro",
    access: true,
    homeworks: true,
    mentor: "Denys Smaha",
    group_members:  ["Vlad", "Viki", "Olya"],
    group_number: 21,
    tool: {
        name: "Github",
        repository: "https://github.com/git"
    },
    homework_description: [{
        name: "git",
        difficulty: "normal"
    },
    {
        name: "general JS",
        difficulty: "hard"
    },
    {
        name: "basis JS",
        difficulty: "easy"
    }
    ],
    getInfo: function (){
        if(typeof this == "object" && Object.keys(this).length !== 0) {
            for(let key in this){
                if (typeof this[key] === "function") continue;
                if (Array.isArray(this[key]) && this.value === "object") {
                    this[key].forEach(() => {
                        console.log(`${key} : ${JSON.stringify(this[key], null, 1)}`);
                    })
                }
                else if (typeof this[key] === "object") {
                    console.log(`${key} : ${JSON.stringify(this[key], null, 1)}`);
                }
                else {
                    console.log(`${key} : ${this[key]}`);
                }
            }
        }
    }
};