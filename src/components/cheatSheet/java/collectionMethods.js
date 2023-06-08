import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const CollectionMethods = () => {
  return (
    <div className="cheatsheetdiv rose">
      <h2 className="tx-sky fw-bold text-center">Methods within Collection Types</h2>

      <h3 className="tx-yellow">ArrayList:</h3>
      <JavaCodeBlock
        code={`ArrayList<E> list = new ArrayList<E>();

list.add(element); // adds an element to the end of the ArrayList
list.get(index); // returns the element at the specified index
list.remove(index); // removes the element at the specified index
list.size(); // returns the number of elements in the ArrayList
list.clear(); // removes all elements from the ArrayList
list.isEmpty(); // returns true if the ArrayList contains no elements`}
      />

      <h3 className="tx-yellow">Vector:</h3>
      <JavaCodeBlock
        code={`Vector<E> vec = new Vector<E>();

vec.addElement(obj); // Adds an element to the end of the Vector
vec.add(index, obj); // Inserts an element at the specified index
vec.removeElement(obj); // Removes the first occurrence of the specified element

vec.remove(index); // Removes the element at the specified index
vec.clear(); // Removes all elements from the Vector
vec.size(); // Returns the number of elements in the Vector
vec.elementAt(index); // Returns the element at the specified index
vec.setElementAt(obj, index); // Sets the element at the specified index to the specified object

vec.isEmpty(); // Returns true if the Vector contains no elements
vec.contains(obj); // Returns true if the Vector contains the specified element

vec.indexOf(obj); // Returns the index of the first occurrence of the specified element

vec.lastIndexOf(obj); // Returns the index of the last occurrence of the specified

vec.toArray(); // Returns an array containing all elements in the Vector`}
      />

      <h3 className="tx-yellow">LinkedList:</h3>
      <JavaCodeBlock
        code={`LinkedList<E> list = new LinkedList<E>();

list.add(element); // adds an element to the end of the LinkedList
list.addFirst(element); // adds an element to the beginning of the LinkedList
list.addLast(element); // adds an element to the end of the LinkedList
list.get(index); // returns the element at the specified index
list.remove(index); // removes the element at the specified index
list.removeFirst(); // removes the first element from the LinkedList
list.removeLast(); // removes the last element from the LinkedList
list.size(); // returns the number of elements in the LinkedList
list.clear(); // removes all elements from the LinkedList
list.isEmpty(); // returns true if the LinkedList contains no elements, false otherwise`}
      />

      <h3 className="tx-yellow">HashMap:</h3>
      <JavaCodeBlock
        code={`HashMap<K, V> map = new HashMap<K, V>();

map.put(key, value); // associates the specified value with the specified key in the HashMap

map.get(key); // returns the value associated with the specified key in the HashMap

map.remove(key); // removes the mapping for the specified key from the HashMap
map.containsKey(key); // returns true if the HashMap contains a mapping for the specified key, false otherwise

map.size(); // returns the number of key-value mappings in the HashMap
map.clear(); // removes all key-value mappings from the HashMap
map.isEmpty(); // returns true if the HashMap contains no key-value mappings, false otherwise`}
      />

      <h3 className="tx-yellow">HashSet:</h3>
      <JavaCodeBlock
        code={`HashSet<E> set = new HashSet<E>();

set.add(element); // adds the specified element to the HashSet
set.remove(element); // removes the specified element from the HashSet
set.contains(element); // returns true if the HashSet contains the specified element, false otherwise

set.size(); // returns the number of elements in the HashSet
set.clear(); // removes all elements from the HashSet
set.isEmpty(); // returns true if the HashSet contains no elements, false otherwise`}
      />

      <h3 className="tx-yellow">TreeSet:</h3>
      <JavaCodeBlock
        code={`TreeSet<E> set = new TreeSet<E>();

set.add(element); // adds the specified element to the TreeSet
set.remove(element); // removes the specified element from the TreeSet
set.contains(element); // returns true if the TreeSet contains the specified element, false otherwise

set.size(); // returns the number of elements in the TreeSet
set.clear(); // removes all elements from the TreeSet
set.isEmpty(); // returns true if the TreeSet contains no elements, false otherwise

set.first(); // returns the first (lowest) element currently in the TreeSet
set.last(); // returns the last (highest) element currently in the TreeSet`}
      />
      <br />
      <p>
        These are some commonly used methods for different collection types in
        Java. ArrayList, Vector, LinkedList, HashMap, HashSet, and TreeSet are
        popular collection classes in Java. They provide methods to add, remove,
        retrieve, and manipulate elements in the collections. The methods listed
        above are just a subset of the available methods. Refer to the Java API
        documentation for more details on each collection class and its methods.
      </p>
    </div>
  )
}

export default CollectionMethods
