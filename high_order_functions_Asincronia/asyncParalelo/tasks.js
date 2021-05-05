const util = require('util');
const sleep = util.promisify(setTimeout);
//sleep hace lo mismo que setTimeout pero se puede ejecutar a traves de async await

module.exports = {


    async taskOne() {
        try {
            // throw new Error('Some problem')
            await sleep(4000);
            return 'ONE VALUE'

        } catch (error) {

            console.log(error)
        }
    },
    async taskTwo() {
        try {

            await sleep(2000)
            return 'TWO VALUE'

        } catch (error) {

            console.log(error)
        }
    }


}