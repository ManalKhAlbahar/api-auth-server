
class Collection {
    constructor(table) {
        this.table = table;
        console.log("constructor");
    }


//====Start getData Function
    async getData(id2) {
        try {
            if (id2) {
                return await this.table.findOne({ where: { id: id2 } });
            } else {
                return await this.table.findAll()
            }
        } catch (error) {
            console.log(`error from getData function ${this.table}`, error);
        }
    }
    //====End getData Function



    //====Start createData Function
    async createData(body) {
        try {
            if (body) {
                return await this.table.create(body);
            } else {
                console.log(`You should add data in your body as object`);
            }
        } catch (error) {
            console.log(`error from createData function ${this.table}`, error);
        }
    }
    //====End createData Function


    //====Start updateData Function

async updateData(id2,body){

    try {
        if (id2) {
            return await this.table.update(body,{ where: { id: id2 } });
        } else {
            console.log(`You should add data in your body as object and id as integer`);
        }
    } catch (error) {
        console.log(`error from updateData function ${this.table}`, error);
    }

}


    //====End updateData Function


        //====Start deleteData Function

async deleteData(id2){

    try {
        if (id2) {
            return await this.table.destroy({ where: { id: id2 } });
        } else {
            console.log(`You should add  id as integer`);
        }
    } catch (error) {
        console.log(`error from deleteData function ${this.table}`, error);
    }

}


    //====End deleteData Function






}



module.exports =Collection;