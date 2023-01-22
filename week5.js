class Equipment {
    constructor(name, amount){
        this.name=name;
        this.amount=amount;
    }
    describe(){
        return `They are carrying ${this.amount} ${this.name}.`;
    }


}

class Character {
    constructor(name, cClass){
        this.name = name;
        this.cClass = cClass;
        this.theGoods=[];
    }

    addEquipment(equipment){
        if(equipment instanceof Equipment){
            this.theGoods.push(equipment);
        }else { 
            throw new Error(`You can only add equipment. This is not equipment: ${equipment}`);
        }
    }

    describe() {
        return `${this.name} has ${this.theGoods.length} pieces of equipment.`;
    }

}

class Menu {
    constructor() {
        this.characters = [];
        this.selectedCharacter= null;
    }
    start(){
  //      let list ='Current Characters \n';

/*           if(this.characters.length > 0){
        for(let i=0; i< this.characters.length; i++){
            console.log(this.characters);
            list += i + ') ' + this.characters[i].name + ' - ' + this.characters[i].cClass + '\n';
          

        }

        }else{
            list += 'There are no characters in this group \n';
            console.log(this.characters);

        } */

       // let selection = this.showMainMenuOptions(list);
        let selection = this.showMainMenuOptions();

        while (selection != 0){
/* 
            if(this.characters.length > 0){
                for(let i=0; i< this.characters.length; i++){
                    console.log(this.characters);
                    list += i + ') ' + this.characters[i].name + ' - ' + this.characters[i].cClass + '\n';
                  
        
                }
        
                }else{
                    list += 'There are no characters in this group \n';
                    console.log(this.characters);
        
                } */
            switch (selection){
                case '1' : 
                    this.createCharacter();
                    break;
                case '2' :
                    this.viewCharacter();
                    break;
                case '3' :
                    this.deleteCharacter();
                    break;
                case '4' :
                    this.displayCharacters();
                    break;
                default:
                    selection = 0;
            
            }
            //selection = this.showMainMenuOptions(list);
            selection = this.showMainMenuOptions();

        } // end while

        alert('Goodbye!');

    }

    showMainMenuOptions(characterList){
        return prompt(`
            1) create new Character
            2) view Character
            3) delete Character
            4) display all Characters

            0) exit 

        `);
    }

    showEquipmentMenuOptions(characterInfo){
        return prompt(`
            1) add equipment
            2) remove equipment
            
            0) back
            ________________
            ${characterInfo}`);
    }


    displayCharacters(){
        let characterString = `
        Current Character list

        Character - Class type
        ______________________` + '\n';
        for (let i = 0; i< this.characters.length; i++){
            characterString += i+1 + ')  ' + this.characters[i].name +' - ' + this.characters[i].cClass + '\n';
        }
        alert(characterString);
    }

    createCharacter() {
        let name = prompt('Enter name for new Character:');
        let cClass = prompt('Enter name for Character class:');
        this.characters.push(new Character(name, cClass));
    }

    viewCharacter(){
        let index = prompt('Enter the Character number you wish to view:');
        if(index-1 > -1 && index-1 < this.characters.length) {
            this.selectedCharacter = this.characters[index-1];
            let description = '\nCharacter Name: ' + this.selectedCharacter.name + '\n'+ 'Character Class: ' + this.selectedCharacter.cClass + '\n' +'Equipment List: \n';
           
            if(this.selectedCharacter.theGoods.length != 0){ 
            
            for(let i=0; i< this.selectedCharacter.theGoods.length; i++){
                description += i+1 + ')  ' + this.selectedCharacter.theGoods[i].name + ' - ' + this.selectedCharacter.theGoods[i].amount + '\n';
            }
            }else{

                description += 'No Equpiment added';
            }   

            let selection = this.showEquipmentMenuOptions(description);
            switch (selection){
                case '1':
                        this.createEquipment();
                        break;
                case '2':
                        this.deleteEquipment();
           }
        }
    }

    deleteCharacter(){
        let index = prompt('Enter the Character number you wish to delete:');
        if(index-1 >-1 && index-1 < this.characters.length){
            this.characters.splice(index-1,1);
            alert('Character Deleted\n returning to main menu');
        }else{
            alert('That is not a valid choice! \n returning to main menu');
        }
    }

    createEquipment(){
        let name = prompt('Enter Name of Equpiment:');
        let amount = prompt('Enter the amount of equipment');

        this.selectedCharacter.theGoods.push(new Equipment(name, amount));

    }

    deleteEquipment(){
        let index = prompt('Enter the Equipment number you wish to delete:');
        if(index-1 > -1 && index-1 < this.selectedCharacter.theGoods.length){
            this.selectedCharacter.theGoods.splice(index-1,1);
            alert('Item removed from inventory\n returning to main menu');
        }else{
            alert('That is not a valid choice! \n returning to main menu');
        }

    }



}

let menu = new Menu();

menu.start();












