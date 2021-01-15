# One to Many Relationships
---

## LGs:
- [ ] Revise one-to-many
- [ ] Practice keeping groups of data related to classes on the class as a class variable
- [ ] Practice domain modelling (ERD)
- [ ] Demonstrate Single Source of Truth by not storing collections of objects on other objects and storing objects only in one place (the class where they belong to)
- [ ] Implement both sides of a many to many relationships


## Outline

* Quick review of one-to-many:
  * Single Source of Truth Principle:
    - "Class can only store information about their own instances"
  * What is an example of one-to-many relationship:
    - Tweet belongs to a User, User has many Tweets;
      Tweet >- User // one-to-many 
      - when initializing Tweet, we pass a User instance as an argument;
      - One way to think about it: when a tweet is made it must have a user attached to it. But when a user is made, a tweet isn’t necessarily made.
      - I call the User the independent class and the Tweet the dependent class, since the instance of a Tweet depends on a User instance existing
  * In one-to-many relationship, can a User have 0 Tweets?
      YESSS!!!!

## How to think about relationships
1. For every one (x), how many (y)? 
2. For every one (y), how many (x)?

## Many-to-Many

1. One-to-many
- Tweet >- User
- League -< Team -< Player
- City -< School -< Student
- Store -< Aisle
- Plant -< Leaf

2. Many-to-many
    - A high school teacher has many students, and each high schooler has many teachers.
    - A dog can have many humans and a human can have many dogs

---

## Practice keeping groups of data related to classes on the class as a class variable

Doctor and Patiens

YAGNI: you ain't gonna need it

* How many classes do we need?
* Let's discuss the attributes
    * Doctor: specialty, name
    * Patient: name, birth (year)
    * ?  : problem
* Let's discuss the methods
    * What are the minimum methods we are going to need?
      * `initialize`
      * `.all`
* Create `.all` method for all the classes

## Tasks (10 mins):
1. Create Patient class with: `initialize` method, `attr_` macro and `.all` method.
1. Create Doctor class with: `initialize` method, `attr_` macro and `.all` method.

## Domain modelling:

![](https://i.imgur.com/IXtlVuq.png)
* A doctor has many patients and a patient has many doctors

* A doctor has many appointments / appointment belongs to doctor (we already know how to model this)
* A patient has many appointments / appointment belongs to patient (we already know how to model this)
* A doctor has many patients through appointments
* A patient has many doctors through appointments

## Understand single source of truth by not storing collections of objects on other objects
* How can we build relationship among these classes?
    * Using JOINER class
* Connecting all three classes using JOINER class:
    * Make sure to pass into a joiner instance the instances of the other two classes.

## Tasks (10 mins):
2. Create the JOINER class with `initialize` method, `attr_` macros and `.all` method.
3. Create `#doctors` method in the Patient class that return all the doctors who have appoinment with a perticular patient (hint: you need a helper method)

## Implement both sides of a many to many relationship
* many to many => one to many + one to many
* A doctor has how many appointments!
    * `#appointments` -- all the appointments of the given doctor 
* A patient has how many appointments!
    * `#appointments` -- all the appointments of the given patient
* A doctor has list of patients!
    * `#patients` -- all the patients of the given doctor
* A patients has list of doctors!
    * `#doctors` -- all the doctors of the given patient