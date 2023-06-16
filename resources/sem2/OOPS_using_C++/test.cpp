#include <iostream>
#include <map>
using namespace std;

int main()
{
    map<string, int> myMap = {{"John", 25}, {"Alice", 30}, {"Bob", 40}};

    // Access values using keys
    cout << "Age of Alice: " << myMap["Alice"] << endl;

    // Iterate over the map using a for loop
    cout << "Name - Age pairs: ";
    for (const auto &pair : myMap)
    {
        cout << pair.first << ":" << pair.second << " ";
    }
    cout << endl;

    // Check if a key exists in the map
    string name = "John";
    if (myMap.count(name) > 0)
    {
        cout << name << " exists in the map" << endl;
    }
    else
    {
        cout << name << " does not exist in the map" << endl;
    }

    // Erase an element from the map
    myMap.erase("Bob");

    return 0;
}
