---
Title: ADT Dictionary
Date: 04/13/2023
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Class
Class: dataStructure
slug: adt_dictionary
Genera: Data Science 
Status: Planning 🔗
Due_Date: 04/13/2023
Cover_Image: https://source.unsplash.com/9DaOYUYnOls/1320x400
Description: What is ADT Dictionary or HashMap? How it is relevant as a data structure? Learn all the operations and concepts related to it. 
Tag:
  - class
---

# ADT HashMap (Dictionary)
A **HashMap** is a map, table or an associative Array, is made up of two parts. A key and value. A '`search`' key which could be a any English word, such as a name of object. A `value` is an object that is related to a key. So, the value could itself be a collection of object. A collection of key value pair is called HashTable. So, `HashMap` should be viewed as a collection of key/value pairs.
Also, notice that `HashMap` / `Disctionary` / `Map` is basically all mean same thing in some sense. 

## Key
A `key` is a search allowable part of the hashMap. It can be unique when we are building a HR Databases or to have Vehicle Identification Number. But it doesn't mean that `key` should always be unique. It can also be duplicates. Duplicate keys can be useful to store the meaning of the English Words where a word can have multiple meanings. Other place could be different products within the same Product Category. Along with that, keys can be, but are not required to be, sorted or in any particular order. But sorting the key will crop up the efficiency for that Dictionary. 

## Typical Usage of HashMap:
- Find address for a given person from Person as `key` and address is `value`. 
- An Engine for a given car object. 
- Meaning for a given word 
- Display all items in a list. 

> A **HashMap** is a map, table or an associative Array, is made up of two parts.

## Dictionary Operations
```js
//Operations related to HashMap or Dictionary. 
	public V remove(key)
	public V get (key)
	public V put(key, T value)
	public Enumeration<V> elements()
	public Enumeration<K> keys()
	public boolean isEmpty()
	public int size()
```

## A Java Interface for ADT Dictionary
```js
Here will go the Interface from the notes. 
```

## Handling Null Values
- #### For `key` part:
  Having Key in a dictionary to be null does not make sense becvause they are paried with corresponding value. So, the absence of a key means there no data entry. 
- #### For `value` part: 
  For the ADT Dictionary case where key-null appear can be handled in 2 ways in the implementation. 
	- Allow key-null pairs, but throw a KeyNotFoundException when the key is not found. 
	- One more goes here: 

## ADT Dictionary - Iterators
## Key-only Traversal
## Value-only Traversal


  
