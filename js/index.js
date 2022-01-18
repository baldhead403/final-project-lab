//here, you do two things
// hardcode adding gear
//build an eventListener



//start by creating an instance of your class GearController
const gearManager = new GearController();
console.log(gearManager);

//call addGear function (addGear method exists within the object gearManager)
gearManager.addGear("someURL", "Tent", "Camping", 200);
gearManager.addGear("someURL", "Boots", "Walking", 300);
gearManager.addGear("someURL", "Jacket", "Running", 300);

console.log(gearManager);
console.log(gearManager.gearArray);


let gearRows = document.getElementById("gearRows");
let addGearBtn = document.getElementById("addGearButton");

//good place to load our local storage (globally calling)
//as soon as the page loads, the first method that gets read has to load our local storage and if there's anything in our storage, it's going to add it to our array
gearManager.loadLocalStorage();


//create an eventListener listening for the submit botton

addGearBtn.addEventListener("click", function (event) {
    event.preventDefault(); //make sure the page doesn't just refresh when a user submits the form

    let gearUrl = document.getElementById("gearURL");
    let gearType = document.getElementById("gearType");
    let gearPrice = document.getElementById("gearPrice");
    let gearUsedFor = document.getElementById("gearUsedFor");

    gearManager.addGear(gearUrl.value, gearType.value, gearPrice.value, gearUsedFor.value);

    let newGear = {
        url: gearUrl.value,
        name: gearType.value,
        use: gearPrice.value,
        price: gearUsedFor.value
    };

    addItemToGearList(newGear);

    //we can clear the values that typed in so the form is refreshed
    gearUrl.value = "";
    gearType.value = "";
    gearPrice.value = "";
    gearUsedFor.value = "";

    console.log(gearManager.gearArray);
})


//this function takes in an object that is going to have stored the url, a name, a use, and a price
const addItemToGearList = (gear) => {
    console.log(gear);
    let newRow = document.createElement("tr"); //to create a new row
    newRow.innerHTML = `<tr> 
        <th scope="row"><img class="img-thumbnail" src="${gear.url}"></th>
        <td>${gear.name}</td>
        <td>${gear.use}</td>
        <td>${gear.price}</td>
    </tr>`; //to create the actual rows content
    gearRows.append(newRow); //append the newrow to the gearRows which is the table body
}

/*
//create an item
let boots = {
    url: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Boots",
    use: "Walking",
    price: 45
};

//add the item to my list (pass in my boots object)
addItemToGearList(boots);
*/

//console.log(gearManager,gearArray);
//gearManager.loadLocalStorage();
//console.log(gearManager.gearArray);