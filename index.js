class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	static counter = 1

	sayHello(){
		console.log(this.name,'----', this.age)
	}
}
