import { Container } from 'unstated'

export default class AppContainer extends Container {

    state = {
        boards : {
            ['A'] : {
                '1' : 'a item 1',
                '2' : 'a item 2',
                '3' : 'a item 3',
            },
            ['B'] : {
                '1' : 'b item 1',
                '2' : 'b item 2',
                '3' : 'b item 3',
            },
            ['C'] : {
                '1' : 'c item 1',
                '2' : 'c item 2',
                '3' : 'c item 3',
            },
            ['D'] : {
                '1' : 'd item 1',
                '2' : 'd item 2',
                '3' : 'd item 3',
            }
        }
    }

}