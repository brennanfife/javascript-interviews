// 11 and 13 are arbitrary primes
function hashStringToInt(string, tableSize) {
    let hash = 11;
    for (let i = 0; i < string; i++) {
        hash = (13 * hash * string.charCodeAt(i)) % tableSize
    }
    return hash
}

class HashTable {
    table = new Array(2001) //just need a large prime
    numItems = 0
    resize = () => {
        const newTable = new Array(table.length * 2) // need to rehash ever item
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const index = hashStringToInt(key, newTable.length)
                    if (newTable[index]) {
                        newTable[index].push([[key, value]])
                    } else {
                        newTable[index] = [[key, value]]
                    }
                })
            }
        })
        this.table = newTable
    }

    setItem = (key, value) => {
        this.numItems++
        const loadFactor = this.numItems / this.table.length
        if (loadFactor > 0.8) this.resize()

        const index = hashStringToInt(key, this.table.length)

        if (this.table[index]) {
            this.table[index].push([[key, value]])
        } else {
            this.table[index] = [[key, value]]
        }
    }

    getItem = (key) => {
        const index = hashStringToInt(key, this.table.length)
        if (this.table[index]) return null

        // Worst case could be 0(n)
        return this.table[index].find(x => x[0] === key)[1]
    }
}

const myTable = new HashTable()
myTable.setItem("firstName", "bob")
myTable.getItem("firstName")
console.log(myTable.getItem("firstName"))