/*
Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
Створити метод minPrice(), який повертає мінімальну ціну.
Створити метод maxPrice(), який повертає максимальну ціну.
 */

/* Коментар для викладача:
        тести для цього завдання у цьому ж файлі;
 */

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function () {
        if (typeof this === "object" && Object.keys(this).length !== 0) {
            let sum = 0;
            for (let key in this) {
                if(typeof this[key]==="function") continue;
                if (typeof this[key] !== "string" && typeof this[key] !== "number") continue;
                if(typeof this[key] === "string") {
                    let priceOfService = this[key].replaceAll("грн", "").trim();
                    if (priceOfService.includes(".") || priceOfService.includes(",")) {
                        sum += parseFloat(priceOfService);
                    } else {
                        sum += Number(priceOfService);
                    }
                } else if (typeof this[key] === "number") {
                    sum += this[key];
                }
            }
            return sum;
        } else {
            console.log("This object doesnt contain parameters for price");
            return null;
        }
    },
    minPrice: function () {
        if (typeof this === "object" && Object.keys(this).length !== 0) {
            let minPrice = 0;
            for (let key in this) {
                if(typeof this[key] ==="function") continue;
                if (typeof this[key] !== "string" && typeof this[key] !== "number") continue;
                let priceOfService = 0;

                if(typeof this[key] === "string") {
                    priceOfService = this[key].replaceAll("грн", "").trim();
                    if (priceOfService.includes(".") || priceOfService.includes(",")) {
                        priceOfService = parseFloat(priceOfService);
                    } else {
                        priceOfService = Number(priceOfService);
                    }
                } else if (typeof this[key] === "number") {
                    priceOfService = this[key];
                }
                if (minPrice === 0 && minPrice < priceOfService) {
                    minPrice = priceOfService;
                } else if (minPrice > priceOfService) {
                    minPrice = priceOfService;
                }
            }
            return minPrice;
        } else {
            console.log("This object doesnt contain parameters for price");
            return null;
        }
    },
    maxPrice: function () {
        if (typeof this === "object" && Object.keys(this).length !== 0) {
            let maxPrice = 0;
            for (let key in this) {
                if(typeof this[key] ==="function") continue;
                if (typeof this[key] !== "string" && typeof this[key] !== "number") continue;
                let priceOfService = 0;

                if(typeof this[key] === "string") {
                    priceOfService = this[key].replaceAll("грн", "").trim();
                    if (priceOfService.includes(".") || priceOfService.includes(",")) {
                        priceOfService = parseFloat(priceOfService);
                    } else {
                        priceOfService = Number(priceOfService);
                    }
                } else if (typeof this[key] === "number") {
                    priceOfService = this[key];
                }
                if (maxPrice === 0 && maxPrice < priceOfService) {
                    maxPrice = priceOfService;
                } else if (maxPrice < priceOfService) {
                    maxPrice = priceOfService;
                }
            }
            return maxPrice;
        } else {
            console.log("This object doesnt contain parameters for price");
            return null;
        }
    }
}

console.log("------------Basic---------------")
console.log(services.minPrice());
console.log(services.maxPrice());
console.log(services.price());

// TEST 1: check how method works with modified object
console.log("------------Test1---------------")
/* Change keys:
    Add a new one keys with value ("Манікюр" : 200 грн");
    Add a new one keys with value ("Фарбування" : 150 грн");
    Add a new one keys with value ("Укладка" : 50 грн");
 */
services["Манікюр"] = "200 грн";
services["Фарбування"] = "150 грн";
services["Укладка"] = "50 грн";
console.log(services.minPrice());
console.log(services.maxPrice());
console.log(services.price());

// TEST 2: check how method works with null, undefined, number
console.log("------------Test2---------------")
/* Change keys:
    Add a new one keys with value ("Барбер" : null);
    Add a new one keys with value ("Дипіляція" : 150);
    Add a new one keys with value ("Undefined" : undefined);
 */
services["Барбер"] = null;
services["Дипіляція"] = 150;
services["Undefined"] = undefined;
console.log(services.minPrice());
console.log(services.maxPrice());
console.log(services.price());