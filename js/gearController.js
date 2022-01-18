//Create a class

class GearController {
    constructor(currentID = 0) {
        this.currentID = currentID;
        this.gearArray = [];
    }
    //create addGear method that takes whatever you have in your site and store all that info into an object newGear
    addGear(url, name, use, price) {
        //create an object out of the user information that typed in
        let newGear = {
            id: this.currentID++,
            url,
            name,
            use,
            price
        }
        //then, store the object in the array
        this.gearArray.push(newGear);
        this.setLocalStorage();
    }

    //After we are adding a new piece of gear in the local storage, we are calling our set local storage which takes our array gearArray at that point in time, and stores it into local storage. And it also takes the ID, at that point in time, and stores that into local storage so that we can keep track of our IDs for each piece of gear.

    setLocalStorage() {
        let storeGear = JSON.stringify(this.gearArray);
        localStorage.setItem("gear", storeGear);
        let currentID = JSON.stringify(this.currentID);
        localStorage.setItem("currentId", currentID);
    }

    //Next, we are going to load everything so it needs to exist in local storage for this to work, and that's what the if conditional check for. It says if local storage gets an item gear and all that is checking for is if it has the array, if it exists. if a key of gear exists and has value, then do something( save). if it doesn't exist, then we are not going to do anything
    loadLocalStorage() {
        if (localStorage.getItem("gear")) {
            let gearArrayJson = localStorage.getItem("gear");
            // console.log(gearArrayJson);
            // console.log(JSON.parse(gearArrayJson));
            this.gearArray = JSON.parse(gearArrayJson);
        }
        if (localStorage.getItem("currentID")) {
            let currentIdString = localStorage.getItem("currentID");
            this.currentId = Number(currentIdString);
        }
    }
}