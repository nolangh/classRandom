/* Initialize your data structure here. */
var MyHashSet = function () {
	this.table = {};
};

/* @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
	this.table[md5(key)];
};

/* @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
	delete this.table[md5(key)];
};

/* Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
	return this.table[md5(key)] ? true : false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
