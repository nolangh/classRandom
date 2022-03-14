class LinkedListNode {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	//Head
	//Down
	// 4 -> null

	insert(element) {
		if (this.head == null) {
			this.head = new LinkedListNode(element);
			this.size += 1;
		} else {
			if (element.key < this.head.element.key) {
				const newNode = new LinkedListNode(element);
				newNode.next = this.head;
				this.head = newNode;
				this.size += 1;
			}
			let current = this.head;
			while (current.next != null) {
				if (current.element.key == element.key) {
					return;
				} else if (element.key < current.next.element.key) {
					const newNode = new LinkedListNode(element);
					newNode.next = current.next;
					current.next = newNode;
					this.size += 1;
				} else {
					current = current.next;
				}
			}
			current.next = new LinkedListNode(element); //try nesting in different spots
			this.size += 1;
		}
	}

	contains(key) {}

	remove() {
		//
	}

	toString() {}
}
